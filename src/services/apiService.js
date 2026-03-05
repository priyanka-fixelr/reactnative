import { API_BASE_URL, ERROR_MESSAGES } from '../constants';

class ApiService {
    static async request(endpoint, options = {}) {
        // Determine full URL, if it's already a full URL skip base url appending
        const url = endpoint.startsWith('http') ? endpoint : `${API_BASE_URL}${endpoint}`;

        const defaultHeaders = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        };

        const config = {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers,
            },
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || ERROR_MESSAGES.DEFAULT);
            }

            return data;
        } catch (error) {
            console.error('API Request Error:', error);
            // Let the caller handle the specific error or fallback to a default one
            throw new Error(error.message || ERROR_MESSAGES.DEFAULT);
        }
    }

    static get(endpoint, headers) {
        return this.request(endpoint, { method: 'GET', headers });
    }

    static post(endpoint, body, headers) {
        return this.request(endpoint, { method: 'POST', body: JSON.stringify(body), headers });
    }

    static put(endpoint, body, headers) {
        return this.request(endpoint, { method: 'PUT', body: JSON.stringify(body), headers });
    }

    static delete(endpoint, headers) {
        return this.request(endpoint, { method: 'DELETE', headers });
    }
}

export default ApiService;
