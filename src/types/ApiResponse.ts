import { Message } from "@/model/User";

//type of api response look like
export interface ApiResponse {
    success : boolean,
    message : string,
    isAcceptingMessage?: boolean,
    messages?: Array<Message> 
}