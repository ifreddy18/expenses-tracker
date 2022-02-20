import axios from 'axios';
import { config } from '../config/config';

const { baseUrl } = config;

const login = async(email: string, password: string) => {
    return await axios.post(`${baseUrl}/login`, { email, password });
};

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    login
};
