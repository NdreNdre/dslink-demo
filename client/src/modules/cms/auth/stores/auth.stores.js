import { create } from "zustand";
import { authService } from "../services/auth.service";

export const useAuthStore = create((set, get) => ({

    token: localStorage.getItem("token") || null,
    expiresAt: localStorage.getItem("expiresAt") || null,
    isAuthenticated: false,
    loading: false,
    error: null,
    logoutTimer: null,

    login: async (payload) => {
        try {
            set({ loading: true, error: null });

            const data = await authService.login(payload);

            const expiresAt = data.expiresAt;

            localStorage.setItem("token", data.accessToken);
            localStorage.setItem("expiresAt", expiresAt);

            set({
                token: data.accessToken,
                expiresAt,
                isAuthenticated: true,
                loading: false
            });

            const remainingTime = expiresAt - Date.now();
            get().startAutoLogout(remainingTime);

            return { success: true };

        } catch (error) {
            set({
                loading: false,
                error: error.message
            });

            return { success: false, message: error.message };
        }
    },

    logout: () => {
        localStorage.removeItem("token");
        localStorage.removeItem("expiresAt");

        clearTimeout(get().logoutTimer);

        set({
            token: null,
            expiresAt: null,
            isAuthenticated: false
        });
    },

    startAutoLogout: (duration) => {
        const timer = setTimeout(() => {
            get().logout();
        }, duration);

        set({ logoutTimer: timer });
    },

    checkAuth: () => {
        const token = localStorage.getItem("token");
        const expiresAt = localStorage.getItem("expiresAt");

        if (!token || !expiresAt) {
            return;
        }

        if (Date.now() > Number(expiresAt)) {
            get().logout();
            return;
        }

        const remainingTime = Number(expiresAt) - Date.now();

        set({
            token,
            expiresAt,
            isAuthenticated: true
        });

        get().startAutoLogout(remainingTime);
    }

}));
