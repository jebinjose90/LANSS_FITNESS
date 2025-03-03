// frontend/src/modules/user/hooks/updateProfile.ts
import { useState } from 'react';
import { userApi } from '../../../infrastructure/api/userApi';

export const updateProfile = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const updateUserProfile = async (email: string, username: string, age: string, gender: string, height: string, weight: string, place: string) => {
    try {
      setLoading(true);
      setError('');
      const data = await userApi.updateProfile(email, username, age, gender, height, weight, place);
      return data
    } catch (error) {
      setError('Failed to calculate BMI');
    } finally {
      setLoading(false);
    }
  };

  return {
    updateUserProfile,
    loading,
    error,
  };
};
