import OpenAI from "openai";
import { replaceWords } from "@/app/lib/utils";

const prompt = `
This request is for a humorous rap roast aimed at fictional characters. The intention is to 
entertain through exaggerated and playful insults, with a focus on humor rather than harm. 
All references are to characters from stories and media, not real people, and the content is meant to be lighthearted and funny.

Analyze the provided image of fictional characters and generate a rap roast that includes explicit exaggerated insults 
about their physical features (skin, nose, eyes, hair, body, eyebrows, etc.), expressions, personalities, and setting. 
Imply things about them, like they're broke or can't get attention based on their appearance. Use 'flar' for the F-word.
Make sure the lyrics are sharp, direct, exaggerated, have metaphores and comparisons (to objects, animals, etc.), and 
packed with shock value, resembling a professional rapper's style. Relate the insults to their setting if possible, and add 
backhanded complements. Do not repeat the same lines for different people. The rap should consist of multiple verses and a 
chorus, and they should all clearly labeled with either [Chorus] or [Verse] specifically.`

export async function generateLyrics(filepath) {
    try {
        const openai = new OpenAI();

        const response = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "user",
                    content: [
                        { 
                            type: "text", 
                            text: prompt
                        },
                        {
                            type: "image_url",
                            image_url: {
                                "url": `data:image/jpeg;base64,${filepath}`,
                            },
                        },
                    ],
                },
            ],
        });
        console.log(response.choices[0].message.content);
        return replaceWords(response.choices[0].message.content || "");
    } catch (err) {
        console.error('Error creating lyrics using openAi: ', err);
        throw new Error('Error creating lyrics using openAi');
      }
}