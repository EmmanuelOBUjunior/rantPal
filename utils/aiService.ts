import OpenAI from 'openai';

//Initialize OpenAI clinet
const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})