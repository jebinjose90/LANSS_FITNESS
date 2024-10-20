import axios from 'axios';
const apiUrl = import.meta.env.VITE_BACKEND_URL;

export const getTheme = async () => {
  const response = await axios.get(`${apiUrl}/api/theme`);
  return response.data;
};
