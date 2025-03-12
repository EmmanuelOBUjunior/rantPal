import {getRandomResponse} from './aiResponses'

export const generateDeepSeekResponse = async(userMessage:string):Promise<string> =>{
    try{
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_DEEPSEEK_API_KEY}`
            },
            body:JSON.stringify({
                model: 'deepseek/deepseek-r1:free',
                messages:[
                    {
                        role: 'system',
                        content: 'You are RantPal, a sarcastic AI therapist for frustrated developers. Your responses should be funny, slightly sarcastic, and give intentionally impractical advice. Keep responses very concise.'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ]
            })
        })
    }catch(error){
        console.error("Error generating DeepSeek response: ", error);
        return getRandomResponse(userMessage);
    }
}