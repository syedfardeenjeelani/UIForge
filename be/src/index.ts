import OpenAI from "openai";
require("dotenv").config()

// console.log(process.env.DEEPSEEK_API_KEY);

const DEEPSEEK_API_KEY = process.env.DEEPSEEK_API_KEY;

// Please install OpenAI SDK first: `npm install openai`


const openai = new OpenAI({
  baseURL: "https://api.deepseek.com/v1",
  apiKey: `${DEEPSEEK_API_KEY}`,
});

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: "You are a helpful assistant." }],
    model: "deepseek-chat",
  });

  console.log(completion.choices[0].message.content);
}

main();