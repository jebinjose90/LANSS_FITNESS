import { useEffect, useState } from 'react';
import { userApi } from '../../../infrastructure/api/userApi';
const apiUrl:String = import.meta.env.VITE_BACKEND_URL;

export const userProfile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const data = await userApi.profileData();
        
        // Modify imageUrl by prepending apiUrl
        const modifiedProfile = {
          ...data.data, // Spread existing data
          imageUrl: data.data.imageUrl ? `${apiUrl}${data.data.imageUrl}` : null
        };

        setProfile(modifiedProfile);
        console.log("Modified Profile:", modifiedProfile);
        
      } catch (err: any) {
        setError(err.response?.data?.message || 'Error fetching profile');
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, []);

  return { profile, loading, error };
};
