'use client';

export default function SongPlayer({ song, title }) {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-4">
          <svg className="h-5 w-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
          </svg>
          <h3 className="text-lg font-semibold text-gray-600">{title}</h3>
        </div>
        <audio 
          controls 
          src={song.previewUrl}
          className="w-full mb-4"
        >
          Your browser does not support the audio element.
        </audio>
        <button
          onClick={() => {
            const a = document.createElement('a');
            a.href = song.fullVersionUrl;
            a.download = 'full_roast.mp3';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          }}
          className="w-full bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
        >
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Download Full Version
        </button>
      </div>
    </div>
  );
}