import {getRandomResponse} from './aiResponses'

export const generateDeepSeekResponse = async(userMessage:string):Promise<string> =>{
    try{

    }catch(error){
        console.error("Error generating DeepSeek response: ", error);
        return getRandomResponse(userMessage);
    }
}