import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_API_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true, // Allow cookies & sessions to be sent
});
;

const FetchProjects = async () => {
    try {
        const response = await API.get('/api/projects');

        return response?.data;

    } catch (error) {
        console.error("Error fetching:", error);
        return error?.response?.data;
    }
};

export default FetchProjects