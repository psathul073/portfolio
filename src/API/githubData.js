import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true, // Allow cookies & sessions to be sent
});


export const FetchGithubStatus = async () => {
    try {
        const response = await API.get('/api/github-stats');
        return response?.data;

    } catch (error) {
        console.error("Error fetching:", error);
        return null;
    }
};

