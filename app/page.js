'use client';

import { useState } from 'react';
import { ImageUploader } from '../components/ImageUploader';
import SongPlayer from '../components/SongPlayer';
import { exampleRoasts } from './config/constants'

export default function Home() {
  const [songA, setSongA] = useState(null);
  const [songB, setSongB] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleImageUpload = async (file) => {
    setIsLoading(true);
    setError(null);
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/generate-song', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate song');
      }

      const data = await response.json();
      setSongA(data.songA);
      setSongB(data.songB);
    } catch (error) {
      console.error('Error generating song:', error);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">AI Roast Generator</h1>
          <p className="text-gray-600">Upload an image and let AI create your perfect roast</p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <ImageUploader onUpload={handleImageUpload} isLoading={isLoading} />
        </div>

        {isLoading && (
          <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
            <div className="text-center">
              <div className="inline-block animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full mb-4"></div>
              <p className="text-gray-600">Generating your roast... This may take a few minutes.</p>
            </div>
          </div>
        )}

        {error && (
          <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-8">
            <p className="text-red-600">Error: {error}</p>
          </div>
        )}

        {(songA || songB) && (
          <div className="grid gap-6 md:grid-cols-2">
            {songA && <SongPlayer song={songA} title="Version A" />}
            {songB && <SongPlayer song={songB} title="Version B" />}
          </div>
        )}

        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Example Roasts</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {exampleRoasts.map((example) => (
              <div 
                key={example.id} 
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <img 
                  src={example.imageUrl} 
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <div className="space-y-2">
                    <>
                      <audio 
                        controls 
                        src={example.songA.fullVersionUrl}
                        className="w-full mb-2"
                      >
                        Your browser does not support the audio element.
                      </audio>
                    </>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}