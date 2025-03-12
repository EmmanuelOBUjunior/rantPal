import OpenAI from 'openai';
import { getRandomResponse } from './aiResponses';

//Initialize OpenAI clinet
const openai = new OpenAI({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    dangerouslyAllowBrowser: true
})

export const generateOpenAIResponse = async(userMessage:string):Promise<string> =>{
    try {
        const response = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo'
        })
        
    } catch (error) {
        console.error('Error generating OpenAI response: ', error)
        //Call the fallback response generator
        return getRandomResponse(userMessage)
    }
}