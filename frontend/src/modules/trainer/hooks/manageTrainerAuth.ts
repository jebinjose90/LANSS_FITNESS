// frontend\src\modules\trainer\hooks\managetrainerAuth.ts

import { useCallback, useState } from 'react';
import { trainerApi } from '../../../infrastructure/api/trainerApi';
import { useNavigate } from 'react-router-dom';


export const useTrainerAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [trainerData, setTrainerData] = useState<any>(null); // Adjust type as needed
  const navigate = useNavigate();
  const apiUrl:String = import.meta.env.VITE_BACKEND_URL;

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await trainerApi.login(email, password);
      // Access token, trainername, and imageUrl from response data
      const { token,trainername, imageUrl } = data.data;
      // Save token, trainername, and imageUrl to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('trainername', trainername);
      localStorage.setItem('imageUrl', `${apiUrl}${imageUrl}`);
      navigate('/trainer/profile');
    }
    catch (err) {
      setError('Login failed. Please check your credentials.');
    }
    finally {
      setLoading(false);
    }
  };

  const profile = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await trainerApi.profileData();
      // Access token, trainername, and imageUrl from response data
      const { trainername, imageUrl } = data.data;
      
      // Save token, trainername, and imageUrl to localStorage
      localStorage.setItem('trainername', trainername);
      localStorage.setItem('imageUrl', `${apiUrl}${imageUrl}`);
    }
    catch (err) {
      setError('Home data fetching failed. Please check your credentials.');
    }
    finally {
      setLoading(false);
    }
  };

  const signup = async (trainername: string, email: string, password: string, phone: number, imageUrl: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await trainerApi.signup(trainername, email, password, phone, imageUrl);
      setTrainerData(data);
      // Handle post-signup actions
    }
    catch (err) {
      setError('Signup failed. Please try again.');
    }
    finally {
      setLoading(false);
    }
  };

  const resendOtp = async (email: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await trainerApi.requestResendOtp(email);
      setTrainerData(data);
      // Handle post-signup actions
    }
    catch (err) {
      setError('Signup failed. Please try again.');
    }
    finally {
      setLoading(false);
    }
  };

  const logout = useCallback(async () => {
    try {
      await trainerApi.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('trainername');
      localStorage.removeItem('imageUrl');
      navigate('/trainer/trainerSignin');
    } catch (error) {
      console.error('Error during logout', error);
    }
  }, [navigate]);

  const verifyOtp = async (email: string, otp: string) => {
    setLoading(true);
    setError(null);
    try {
      // Call verifyOtp and expect a response with trainername and imageUrl
      const data = await trainerApi.verifyOtp(email, otp);
      // Access token, trainername, and imageUrl from response data
      const { token, trainername, imageUrl } = data.data;
      // Save token, trainername, and imageUrl to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('trainername', trainername);
      localStorage.setItem('imageUrl', imageUrl);

      navigate('/trainer/profile');
    }
    catch (err) {
      setError('OTP verification failed. Please try again.');
    }
    finally {
      setLoading(false);
    }
  };

  const signinWithGoogle = async () => {
    await trainerApi.loginWithGoogle(); // Calls the loginWithGoogle method from trainerApi
  };

  return { loading, error, trainerData, login, signup, signinWithGoogle, verifyOtp, resendOtp, logout, profile};
};
