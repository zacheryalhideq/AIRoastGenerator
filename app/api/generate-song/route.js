import { NextResponse } from 'next/server';
import { generateSong, checkWorkStatus } from '@/app/lib/music/musicAI';
import { processAudio } from '@/app/lib/audio/audioProcessing';
import { delay } from '@/app/lib/utils';
import { POLL_INTERVAL, MAX_RETRIES, DUMMY_LYRICS, DUMMY_MUSIC_RESPONSE } from '@/app/config/constants';
import { generateLyrics } from '@/app/lib/ai/openAi';

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('image');
    
    if (process.env.DUMMY_LYRICS == "false" && !file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64Image = buffer.toString('base64');

    console.log("generating song prompt...");
    const rapLyrics = process.env.DUMMY_LYRICS  == "true" ? DUMMY_LYRICS : await generateLyrics(base64Image);
    const musicData = process.env.DUMMY_MUSIC_AI == "true" ? DUMMY_MUSIC_RESPONSE : await generateSong(rapLyrics);

    let audioUrlA, audioUrlB;
    for (let i = 0; i < MAX_RETRIES; i++) {
      await delay(process.env.DUMMY_MUSIC_AI == "true" ? 0 : POLL_INTERVAL);
      const statusData = await checkWorkStatus(musicData.workId);
      audioUrlA = statusData?.response_data?.[0]?.audio_url;
      audioUrlB = statusData?.response_data?.[1]?.audio_url;
      
      if (audioUrlA && audioUrlB) {
        console.log(`statusData: ${JSON.stringify(statusData?.response_data, null, 2)}`)
        break;
      }
      if (statusData.response_data?.[0]?.status === 'failed') {
        throw new Error('Song generation failed');
      }
    }

    if (!audioUrlA || !audioUrlB) {
      throw new Error('Song generation timed out');
    }

    const songA = await processAudio(audioUrlA, 'A');
    const songB = await processAudio(audioUrlB, 'B');

    return NextResponse.json({
      songA: {
        previewUrl: songA.previewDataUrl,
        fullVersionUrl: songA.fullVersionDataUrl
      },
      songB: {
        previewUrl: songB.previewDataUrl,
        fullVersionUrl: songB.fullVersionDataUrl
      }
    });
  
  } catch (error) {
    console.error('Unexpected error in generate-song API:', error);
    return NextResponse.json({ error: error.message || 'Internal server error' }, { status: 500 });
  }
}