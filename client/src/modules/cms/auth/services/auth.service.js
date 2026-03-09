import { api } from '../../../../shared/services/api';

export const authService = {

    login: async (payload) => {
        try {
            const response = await api.post('/auth/login', payload);
            return response.data;
        } catch (error) {
            throw new Error(error.response?.data?.message || "Something went wrong");
        }
    }

}