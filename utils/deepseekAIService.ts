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
                        content: 'You are RantPal, a sarcastic AI therapist for frustrated developers. Your responses should be funny, slightly sarcastic, and give intentionally impractical advice. Keep responses very very concise. Not more than 20 words.'
                    },
                    {
                        role: 'user',
                        content: userMessage
                    }
                ]
            })
        })

        if(!response.ok){
            throw new Error(`DeepSeek API error: ${response.status}`)
        }
        const data = await response.json()
        return data.choices[0]?.message?.content || "Sorry, my circuits are fried from all these developer rants. Try again when I've had my coffee."


    }catch(error){
        console.error("Error generating DeepSeek response: ", error);
        return getRandomResponse(userMessage);
    }
}