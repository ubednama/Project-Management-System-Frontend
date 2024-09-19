import axios from "axios";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const api = axios.create({ baseURL: API_BASE_URL });

api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("jwt");
        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.defaults.headers.post["Content-Type"] = "application/json";

export default api;