import {getRandomResponse} from './aiResponses'

export const generateDeepSeekResponse = async(userMessage:string):Promise<string> =>{
    try{
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`
            },
        })
    }catch(error){
        console.error("Error generating DeepSeek response: ", error);
        return getRandomResponse(userMessage);
    }
}