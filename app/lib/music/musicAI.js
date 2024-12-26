export async function generateSong(songPrompt) {
  const response = await fetch('https://udioapi.pro/api/generate', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: 'Roast',
      prompt: songPrompt,
      custom_mode: true,
      model: "udio-130",
      style: "old school rap",
      make_instrumental: false,
      disable_callback: true,
      token: process.env.MUSIC_API_TOKEN
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to initiate song generation');
  }

  const data = await response.json();
  console.log('Music API Response:', JSON.stringify(data, null, 2));

  if (!data.workId) {
    throw new Error('No workId found in the response');
  }

  return data;
}

export async function checkWorkStatus(workId) {
  const statusResponse = await fetch(`https://udioapi.pro/api/feed?workId=${workId}`);

  if (!statusResponse.ok) {
    throw new Error('Failed to check work status');
  }

  return await statusResponse.json();
}