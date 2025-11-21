import axios from 'axios';
import type { AxiosInstance, InternalAxiosRequestConfig } from 'axios';

const api = axios.create({
    baseURL:'http://localhost:8080',
});
api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        const token : string | null = localStorage.getItem('jwtToken');
        if(token){
            config.headers.Authorization = `Bearer${token}`
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default api;