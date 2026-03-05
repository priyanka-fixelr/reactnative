import { useState } from 'react';
import ApiService from '../services/apiService';
import { ENDPOINTS, ERROR_MESSAGES } from '../constants';

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = async (name, password) => {
        setIsLoading(true);
        setError(null);

        try {
            // Note: For boilerplate demonstration, this issues a GET request to jsonplaceholder
            // In a real application, you would change this to POST: 
            // await ApiService.post(ENDPOINTS.LOGIN, { name, password });

            const response = await ApiService.get(ENDPOINTS.LOGIN);
            setIsLoading(false);

            return {
                success: true,
                data: response
            };
        } catch (err) {
            setIsLoading(false);
            const errorMessage = err.message || ERROR_MESSAGES.DEFAULT;
            setError(errorMessage);
            return {
                success: false,
                error: errorMessage
            };
        }
    };

    return {
        login,
        isLoading,
        error
    };
};
