import { useQuery } from '@tanstack/react-query';

// Mock API call
const fetchUserData = async () => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Return mock data
    return {
        id: 1,
        name: 'Antigravity User',
        email: 'user@example.com',
        bio: 'React Native Developer',
    };
};

export const useGetUserData = () => {
    return useQuery({
        queryKey: ['user-data'],
        queryFn: fetchUserData,
    });
};
