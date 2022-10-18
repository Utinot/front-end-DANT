import axios, { AxiosRequestConfig } from "axios";

export const instance = axios.create({
   baseURL: 'http://127.0.0.1:8000/api', 
   headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
   }
})
