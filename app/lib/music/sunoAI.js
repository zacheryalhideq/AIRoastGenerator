const prompt = `[Verse]
Silver cities shine brightly
Skies are painted blue
Hopes and dreams take flight
Future starts anew

[Verse 2]
Machines hum a new tune
Worlds we’ve never seen
Chasing stars so far
Building our own dream

[Chorus]
Future dreams so high
Touch the endless sky
Live beyond the now
Make the future wow

[Verse 3]
We create the world
Technology our guide
Hearts and minds as one
Infinite the ride

[Chorus]
Future dreams so high
Touch the endless sky
Live beyond the now
Make the future wow

[Bridge]
With every beat we rise 
See through wiser eyes 
The places we can go 
A brilliance that will grow `

const baseUrl = "https://roast-me-ai-suno.netlify.app";
const url = `${baseUrl}/api/custom_generate`;

export async function generateSunoSong(songPrompt) {
    console.log("generating suno song...");
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                prompt: prompt,
                make_instrumental: false,
                wait_audio: false,
                tags: "rap",
                title: "Roasting...",
            }),
        });

        const data = await response.json();
        console.log("data: ", data);
        const ids = `${data[0].id},${data[1].id}`;
        console.log(`ids: ${ids}`);
        // const ids = "382b5f96-b610-4ced-952a-ddf816fa1c6c,194a1e72-4bd1-4617-b872-41f0f667a23a";

        for (let i = 0; i < 60; i++) {
            const data = await getAudioInformation(ids);
            if (data[0].status === "streaming") {
                console.log("streaming break")
                console.log(`${data[0].id} ==> ${data[0].audio_url}`);
                console.log(`${data[1].id} ==> ${data[1].audio_url}`);
                return {
                    audioUrlA: data[0].audio_url,
                    audioUrlB: data[1].audio_url
                }
            } else {
                console.log(`data status: ${data[0].status}`);
            }
            // sleep 5s
            await new Promise((resolve) => setTimeout(resolve, 5000));
        }

        
    //     const response = await fetch('https://api.aimlapi.com/v2/generate/audio/suno-ai/clip', {
    //         method: 'POST',
    //         headers: headers,
    //         body: JSON.stringify({
    //             prompt: prompt,  // Fixed to use the correct parameter name
    //             tags: "rap, hip-hop",
    //             mv: "chirp-v3.5",
    //             title: "Rap Roast",
    //             make_instrumental: false,
    //             wait_audio: false
    //         }),
    //     });

    //     if (!response.ok) {
    //         const errorData = await response.json();
    //         console.log("error: ", errorData)
    //         throw new Error(`API Error: ${response.status} - ${JSON.stringify(errorData)}`);
    //     }

    //     const data = await response.json();
    //     console.log(data);
    //     return data.clip_ids;
    } catch (error) {
        console.error('Error generating SUNO song:', error);
        throw error;
    }

    // const headers = {
    //     "Authorization": `Bearer ${process.env.SUNO_API_KEY}`,
    //     "Content-Type": "application/json"
    // };

    // console.log(headers)
    // const { clip_ids } = await fetch('https://api.aimlapi.com/v2/generate/audio/suno-ai/clip', {
    //     method: 'POST',
    //     headers: headers,
    //     body: JSON.stringify([
    //     {
    //         "prompt": prompt,
    //         "tags": "rap, hip-hop",
    //         "mv": "chirp-v3.5",
    //         "title": "Rap Roast",
    //         "make_instrumental": false,
    //         "wait_audio": false
    //     }
    //     ]),
    // }).then((res) => { console.log(res); return res.json()});

    // console.log('Generated clip ids:', clip_ids);
    // const url = new URL('https://api.aimlapi.com/v2/generate/audio/suno-ai/clips');
    // url.searchParams.set('clip_id', 'bf8bc1ee-1aa8-428f-abf0-e7c93d105d7a');
    // url.searchParams.set('status', 'streaming');
  
    // const data = await fetch(url, {
    //   method: 'GET',
    //   headers: headers
    // }).then((res) => res.json());
  
    // console.log('Clips data:', data);
}

async function getAudioInformation(audioIds) {
    const url = `${baseUrl}/api/get?ids=${audioIds}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
  }
  