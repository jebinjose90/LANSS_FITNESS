import apiClient from './baseUrl';

export const getTheme = async () => {
  try {
    const response = await apiClient.get(`/api/theme`)

    // Check if response data is empty or invalid
    if (!response.data || Object.keys(response.data).length === 0) {
      throw new Error('Empty response data'); // Force fallback to default values
    }

    return response.data;
    
  } catch (error) {
    console.error('Error fetching theme:', error);

    // Return default values in case of error
    return {
      color1: "#2F2F2F",
      color2: "#424449",
      color3: "#D3FBD8",
      companyName: "LANSS FITNESS",
      logoUrl: "https://i.imgur.com/H7QtKIM.png"
    };
  }
};