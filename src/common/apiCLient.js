import { config } from "../config.js"
import axios from "axios"



export const apiClient = {
    async fetch(method, path, body, language){
        const axios_parameters = {
            method: method,
            url: `${config.baseUrl}${path}`,
            headers: {
                "Content-Type": "application/json",
                "Accept-Language" : language
            },
        }

        if(body !== null && body !== {})
        {
            axios_parameters.data = body;
        }

        try{
            const response = await axios(axios_parameters);
            if (response.status === 200) {
                return response.data
            }
        }catch(e){
            console.log(e);
        }

    }
}