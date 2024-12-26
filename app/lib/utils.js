import fetch from 'node-fetch';

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export function replaceWords(song) {
  song = song.replace(/\bflar\b/gi, "fuck");
  song = song.replace(/\bf\*\*\*\b/gi, "fuck");
  song = song.replace(/\bflaring\b/gi, "fucking");
  song = song.replace(/\bflarin\b/gi, "fuckin");
  return song;
}

// Used if we need a quick way to store images
export async function uploadImageToTmpFiles(buffer, mimeType, displayName) {
  const formData = new FormData();
  formData.append('file', new Blob([buffer], { type: mimeType }), displayName);

  const response = await fetch('https://tmpfiles.org/api/v1/upload', {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    throw new Error('Failed to upload image to tmpfiles.org');
  }

  const data = await response.json();
  
  // Extract the file ID and original filename
  const fileId = data.data.url.split('/')[3]; // This will give you the ID part from the URL
  const originalFileName = displayName; // Keep the original file name

  const tempURL = `https://tmpfiles.org/dl/${fileId}/${originalFileName}`;

  return tempURL;
}
