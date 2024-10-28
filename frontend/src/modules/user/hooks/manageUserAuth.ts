import { useState } from 'react';
import { userApi } from '../../../infrastructure/api/userApi';


export const useUserAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null); // Adjust type as needed

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await userApi.login(email, password);
      setUserData(data);
      // Save token or user data to local storage if needed
    } catch (err) {
      setError('Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (username: string, email: string, password: string, phone: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await userApi.signup(username, email, password, phone);
      setUserData(data);
      // Handle post-signup actions
    } catch (err) {
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, userData, login, signup };
};
