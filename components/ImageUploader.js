'use client';
import React, { useState } from 'react';

export function ImageUploader({ onUpload, isLoading }) {
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);
  const [previewUrl, setPreviewUrl] = useState(null);
  
  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      // Create preview URL for the image
      const url = URL.createObjectURL(selectedFile);
      console.log(url);
      setPreviewUrl(url);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (file) {
      onUpload(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragActive(false);
    
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      setFile(droppedFile);
      // Create preview URL for the dropped image
      const url = URL.createObjectURL(droppedFile);
      setPreviewUrl(url);
    }
  };

  // Cleanup preview URL when component unmounts
  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <form onSubmit={handleSubmit}>
      <div
        className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
        }`}
        onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
        onDragLeave={() => setDragActive(false)}
        onDrop={handleDrop}
      >
        {!previewUrl ? (
          <>
            <div className="mb-4">
              <svg className="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div className="mb-4">
              <label className="cursor-pointer">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                  Choose a file
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
              <span className="text-gray-500 ml-2">or drag and drop</span>
            </div>
          </>
        ) : (
          <div className="relative">
            <img 
              src={previewUrl} 
              alt="Preview" 
              className="max-h-64 mx-auto rounded-lg object-contain"
            />
            <button
              type="button"
              onClick={() => {
                setFile(null);
                setPreviewUrl(null);
              }}
              className="absolute top-2 right-2 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 text-white rounded-full p-2 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="mt-4">
              <label className="cursor-pointer">
                <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full hover:bg-blue-100 transition-colors">
                  Choose different file
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          </div>
        )}
        {file && (
          <div className="text-sm text-gray-600 mt-4">
            Selected: {file.name}
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-end">
        <button
          type="submit"
          disabled={!file || isLoading}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          Generate Roast
        </button>
      </div>
    </form>
  );
}