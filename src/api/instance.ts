import axios, { AxiosRequestConfig } from "axios";

export const instance = axios.create({
   baseURL: 'http://192.168.1.43:8080/api',
   headers: {
      'Content-type': 'application/json',
      'Access-Control-Allow-Origin': '*'
   }
})
