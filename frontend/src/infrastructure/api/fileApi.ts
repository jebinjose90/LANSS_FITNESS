import axios from 'axios';

const apiUrl = import.meta.env.VITE_BACKEND_URL;

// Create an axios instance
const apiClient = axios.create({
  baseURL: apiUrl,
});

// Add a request interceptor to attach the token
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Define the response type for image upload
interface UploadImageResponse {
  imageUrl: string;
}

// Function to upload the image
export const uploadImage = async (base64Image: string): Promise<UploadImageResponse> => {
    const formData = new FormData();
    
    // Convert the base64 image to a Blob to simulate a file
    const byteCharacters = atob(base64Image.split(",")[1]);  // Remove the base64 prefix
    const byteArrays = [];
  
    for (let offset = 0; offset < byteCharacters.length; offset++) {
      const byteArray = byteCharacters.charCodeAt(offset);
      byteArrays.push(byteArray);
    }
  
    const byteArray = new Uint8Array(byteArrays);
    const blob = new Blob([byteArray], { type: 'image/png' }); // Adjust MIME type accordingly
  
    formData.append('file', blob, 'image.png'); // 'file' must match the backend field name
  
    const response = await apiClient.post('/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  
    return response.data;
  };
  
