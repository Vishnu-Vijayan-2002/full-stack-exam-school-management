import { commonAPI } from "./commenAPI"
import { SERVER_URL } from './serverURL';


//register
export const registerAPI = async(reqBody)=>{
    return await commonAPI("POST",`${SERVER_URL}/register`,reqBody)
}

//get students
export const getAllDeatilsAPI = async()=>{
    return await commonAPI("GET",`${SERVER_URL}/details`)
}