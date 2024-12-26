import { Readable } from 'stream';
import ffmpeg from 'fluent-ffmpeg';
import path from 'path';

ffmpeg.setFfmpegPath(path.resolve('node_modules/ffmpeg-static/ffmpeg'));

export async function processAudio(audioUrl, suffix) {
  try {
    const audioResponse = await fetch(audioUrl);
    if (!audioResponse.ok) {
      throw new Error(`Failed to fetch audio. Status: ${audioResponse.status}`);
    }

    const audioBuffer = await audioResponse.arrayBuffer();
    if (!audioBuffer) {
      throw new Error("Failed to retrieve audio buffer.");
    }

    const buffer = Buffer.from(audioBuffer);

    const fullVersionDataUrl = `data:audio/mp3;base64,${buffer.toString('base64')}`;

    const previewBuffer = await createPreviewBuffer(audioBuffer);
    const previewDataUrl = `data:audio/mp3;base64,${previewBuffer.toString('base64')}`;

    return { previewDataUrl, fullVersionDataUrl };
  } catch (error) {
    console.error(`Error in processAudio for ${suffix}:`, error);
    throw error;
  }
}

function createPreviewBuffer(audioBuffer) {
  return new Promise((resolve, reject) => {
    const inputStream = new Readable();
    inputStream.push(Buffer.from(audioBuffer));
    inputStream.push(null);

    const chunks = [];

    ffmpeg(inputStream)
      .setDuration('30')
      .audioCodec('libmp3lame')
      .outputOptions('-b:a 128k')
      .format('mp3')
      .on('error', reject)
      .on('end', () => {
        const previewBuffer = Buffer.concat(chunks);
        resolve(previewBuffer);
      })
      .pipe()
      .on('data', (chunk) => {
        chunks.push(chunk);
      });
  });
}