/** @format */

import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function generateAction(req, res) {
  const voices = ["pirate", "donald duck", "Goofy", "batman", "boss baby"];
  const basePromptPrefix = `Explain how I should answer this question, explain concepts for all answer choices when applicable, and tell me the concepts I should study further with specific resource links for an advanced high school student in language that resembles the way ${
    voices[Math.floor(Math.random() * voices.length)]
  } speaks: `;
  // Run first prompt

  const baseCompletion = await openai.createCompletion({
    model: "text-davinci-003",
    prompt: `${basePromptPrefix}${req.body.userInput}`,
    temperature: 0.6,
    max_tokens: 1000,
  });

  const basePromptOutput = baseCompletion.data.choices.pop();
  res.status(200).json({ output: basePromptOutput });
}
