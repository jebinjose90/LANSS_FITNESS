// frontend/src/modules/user/hooks/useBMI.ts
import { useState } from 'react';
import { userApi } from '../../../infrastructure/api/userApi';

export const useBMI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const calculateBMI = async (weight: string,height: string,age: string,gender: string) => {
    try {
      setLoading(true);
      setError('');
      console.log("BMI   DATAAAA", age,gender,height,weight);
      let heightCm = height
      const result = await userApi.submitBMI(weight, heightCm, age, gender);
      return result
    } catch (error) {
      setError('Failed to calculate BMI');
    } finally {
      setLoading(false);
    }
  };

  return {
    calculateBMI,
    loading,
    error,
  };
};
