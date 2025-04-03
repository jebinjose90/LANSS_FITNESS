import axios from 'axios';
const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const getTheme = async () => {
  try {
    const response = await axios.get(`${apiUrl}/api/theme`);

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