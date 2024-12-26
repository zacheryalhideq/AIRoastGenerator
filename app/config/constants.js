export const POLL_INTERVAL = 10000; // 10 seconds
export const MAX_RETRIES = 30; // 5 minutes total
export const DUMMY_LYRICS = 
`[Chorus]
Yo, check it, these folks think they're hot,
But their drip ain't nothing, just a lukewarm spot.
Their smiles fake, their confidence a facade,
Living life in a concrete jungle, feeling kinda sad.

[Verse 1]
First up, the dude with the beard like a tangled mess,
You think you're a lumberjack? Time to put that shit to the test.
Your eyes like a startled hamster, your skin a shade of burnt toast,
You’re lookin' like a reject from a  "Most Unlikely To..." roast.
Your chest hair's a jungle, a haven for jungle cats, 
And you're drowning in that pool like you're trying to catch the latest fad.

[Verse 2]
Next up, the dude with the hair up in a bun,
Maybe you're trying to be trendy, but you're just a little on the run.
Your eyebrows are thin, they're like a couple of pencils,
Your tongue's out, lookin' for attention, ain't nothin' special.
You think your chain's the bomb?  It’s like a flea market find,
This ain't a fashion show, you're more a 'lost and found' kinda kind.

[Verse 3]
The girl in the middle, you're tryin' to be cute,
But your sunglasses are bigger than your whole attitude.
You're like a Barbie doll that got a little too much sun,
And your smile is kinda... well, you know, "forced by the photographer, to be a little fun."
But hey, you got those assets, gotta give ya that, 
Even if the rest of your look is a little bit of a... *what the fuck?*

[Verse 4]
Now, the dude in the back, we don't even know who you are,
Maybe you're just lookin' to blend in, playin' the role of a "not-so-far-off-star." 
Your shirt's gettin' wet, your hair's lookin' like a mess,
This pool party ain't nothin' but a social media dress rehearsal, at best.

[Chorus]
Yo, check it, these folks think they're hot,
But their drip ain't nothing, just a lukewarm spot.
Their smiles fake, their confidence a facade,
Living life in a concrete jungle, feeling kinda sad.`;

export const DUMMY_MUSIC_RESPONSE = 
  {
    workId: "4d4f9b08-8ba9-40b7-8184-b5a69d5c8319",
    type: 'complete',
    request_body: {
      prompt: "Create a sitcom intro song with a catchy tune that highlights the image of six friends sitting at a diner counter, each with a milkshake or sundae.  The vibe should be fun, light-hearted, and nostalgic, with a 90's sitcom feel.  Include lyrics about their love for milkshakes, the diner as their hangout spot, and their crazy everyday adventures.  The song should have a fast tempo and a playful, upbeat tone. \n",
      style: '',
      title: 'Sitcom Intro Song',
      customMode: false,
      instrumental: false
    },
    response_data: [
      {
        id: 'bf8bc1ee-1aa8-428f-abf0-e7c93d105d7a',
        audio_url: 'https://audiopipe.suno.ai/?item_id=d8addced-ccc8-47d7-9e67-c72811fe374f',
        image_url: 'https://cdn.gogloai.com/udioapi/image0_67ae4d04-026a-47a8-b3b1-1efe396ae1df.jpeg',
        prompt: '[Verse]\n' +
          'Six friends at a diner counter glow\n' +
          "Milkshakes we're loving see the happiness flow\n" +
          'Sundaes with a cherry top so sweet\n' +
          'Everyday adventures make our lives complete\n' +
          '[Verse 2]\n' +
          'Laughter echoing as we clink our glass\n' +
          'Diner lights shimmering memories that last\n' +
          'Sipping through the straws feeling quite elite\n' +
          'In our little refuge where the world’s a treat\n' +
          '[Chorus]\n' +
          "Hey ho let's go on this fun-filled ride\n" +
          'Toast those milkshakes with our friends beside\n' +
          'Diner life feels just like family\n' +
          'Crazy everyday but we’re loving every spree\n' +
          '[Verse 3]\n' +
          'Spontaneous plans and unpredictable fun\n' +
          'Between those linoleum tiles we always run\n' +
          'Milkshakes melting hearts with every sip\n' +
          'Forever young and wild on this friendship trip\n' +
          '[Bridge]\n' +
          "Late nights to sunrise we wouldn't trade a thing\n" +
          'Under neon signs together we sing\n' +
          'Life sparkles when we’re here every single day\n' +
          'The world stops spinning when we laugh away\n' +
          '[Chorus]\n' +
          "Hey ho let's go on this fun-filled ride\n" +
          'Toast those milkshakes with our friends beside\n' +
          'Diner life feels just like family\n' +
          'Crazy everyday but we’re loving every spree',
        model_name: 'udio-32',
        title: 'Milkshake Friends',
        tags: 'playful 90s sitcom feel fast tempo',
        createTime: '2024-10-15T22:40:01.183Z',
        duration: 170,
        status: 'complete'
      },
      {
        id: '8f4f4f96-eab5-4e00-bbdd-8d7a4cf87880',
        audio_url: 'https://audiopipe.suno.ai/?item_id=a0375e84-4f99-4fcd-85c1-8e3c3d1f7775',
        image_url: 'https://cdn.gogloai.com/udioapi/image1_67ae4d04-026a-47a8-b3b1-1efe396ae1df.jpeg',
        prompt: '[Verse]\n' +
          'Six friends at a diner counter glow\n' +
          "Milkshakes we're loving see the happiness flow\n" +
          'Sundaes with a cherry top so sweet\n' +
          'Everyday adventures make our lives complete\n' +
          '[Verse 2]\n' +
          'Laughter echoing as we clink our glass\n' +
          'Diner lights shimmering memories that last\n' +
          'Sipping through the straws feeling quite elite\n' +
          'In our little refuge where the world’s a treat\n' +
          '[Chorus]\n' +
          "Hey ho let's go on this fun-filled ride\n" +
          'Toast those milkshakes with our friends beside\n' +
          'Diner life feels just like family\n' +
          'Crazy everyday but we’re loving every spree\n' +
          '[Verse 3]\n' +
          'Spontaneous plans and unpredictable fun\n' +
          'Between those linoleum tiles we always run\n' +
          'Milkshakes melting hearts with every sip\n' +
          'Forever young and wild on this friendship trip\n' +
          '[Bridge]\n' +
          "Late nights to sunrise we wouldn't trade a thing\n" +
          'Under neon signs together we sing\n' +
          'Life sparkles when we’re here every single day\n' +
          'The world stops spinning when we laugh away\n' +
          '[Chorus]\n' +
          "Hey ho let's go on this fun-filled ride\n" +
          'Toast those milkshakes with our friends beside\n' +
          'Diner life feels just like family\n' +
          'Crazy everyday but we’re loving every spree',
        model_name: 'udio-32',
        title: 'Milkshake Friends',
        tags: 'playful 90s sitcom feel fast tempo',
        createTime: '2024-10-15T22:40:01.183Z',
        duration: 169.24,
        status: 'complete'
      }
    ],
    created_at: '2024-10-15 22:39:58'
  };

  export const DUMMY_SUNO_RESPONSE = {
    audioUrlA: "https://audiopipe.suno.ai/?item_id=b07d8d8d-1055-443f-a9c4-c4f1572e6e64",
    audioUrlB: "https://audiopipe.suno.ai/?item_id=7e428d35-3965-42fa-8ec3-ef890ea47bf0"
  }

  export const exampleRoasts = [
    {
      id: 1,
      imageUrl: "/example_images/costa_rica.jpg",
      songA: {
        fullVersionUrl: "/example_audio/costa_rica.mp3",
      },
    },
    {
      id: 2,
      imageUrl: "/example_images/group.jpg",
      songA: {
        fullVersionUrl: "/example_audio/group.mp3",
      },
    },
  ];