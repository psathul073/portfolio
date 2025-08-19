import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true, // Allow cookies & sessions to be sent
});

export const SendMail = async (data) => {
    try {
        const response = await API.post('/api/contact', data);
        return response?.data;
    } catch (error) {
        console.error('Error send mail', error);
    }
};