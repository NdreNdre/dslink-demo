import axios from "axios";
import toast from "react-hot-toast";

const API_URL = import.meta.env.VITE_BASE_API_URL;

export const api = axios.create({
    baseURL: API_URL
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});

api.interceptors.response.use(
    (response) => response,

    (error) => {
        const status = error.response?.status;

        // 🔐 Unauthorized
        if (status === 401) {
            localStorage.removeItem("token");
            localStorage.removeItem("expiresAt");

            toast.error("Session expired. Please login again.");

            setTimeout(() => {
                window.location.href = "/login";
            }, 1000);
        }

        // 🚫 Forbidden
        else if (status === 403) {
            toast.error("Access denied.");
        }

        // 💥 Internal Server Error
        else if (status === 500) {
            toast.error("Something went wrong. Please try again.");
        }

        // 🌐 Network Error
        else if (!error.response) {
            toast.error("Server unreachable. Check your connection.");
        }

        // 🧠 Other Errors (backend message)
        else {
            const message = error.response?.data?.message || "Unexpected error occurred.";

            toast.error(message);
        }

        return Promise.reject(error);
    }
);

