import axios from 'axios';
import { config } from '../config/config';

const { baseUrl } = config;

const login = async(email: string, password: string): Promise<any> => {
    return await axios.post(`${baseUrl}/login`, { email, password });
};

const getAuthState = async(): Promise<any> => {
    
    const token = localStorage.getItem('access_token');

    if (token) {
        return await axios.get(`${baseUrl}/auth-state`, {
            headers: { 'x-token': token }
        });
    }

}

export default {
    login,
    getAuthState,
};
