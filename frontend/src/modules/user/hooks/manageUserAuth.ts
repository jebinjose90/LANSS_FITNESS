// frontend\src\modules\user\hooks\manageUserAuth.ts

import { useCallback, useState } from 'react';
import { userApi } from '../../../infrastructure/api/userApi';
import { useNavigate } from 'react-router-dom';


export const useUserAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null); // Adjust type as needed
  const navigate = useNavigate();
  const apiUrl:String = import.meta.env.VITE_BACKEND_URL;

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await userApi.login(email, password);
      // Access token, username, and imageUrl from response data
      const { token,username, imageUrl } = data.data;
      // Save token, username, and imageUrl to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('imageUrl', `${apiUrl}${imageUrl}`);
      navigate('/home');
    }
    catch (err) {
      setError('Login failed. Please check your credentials.');
    }
    finally {
      setLoading(false);
    }
  };

  const home = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await userApi.homeData();
      // Access token, username, and imageUrl from response data
      const { username, imageUrl } = data.data;
      
      // Save token, username, and imageUrl to localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('imageUrl', `${apiUrl}${imageUrl}`);
    }
    catch (err) {
      setError('Home data fetching failed. Please check your credentials.');
    }
    finally {
      setLoading(false);
    }
  };

  const signup = async (username: string, email: string, password: string, phone: number, imageUrl: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await userApi.signup(username, email, password, phone, imageUrl);
      setUserData(data);
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
      const data = await userApi.requestResendOtp(email);
      setUserData(data);
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
      await userApi.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('imageUrl');
      navigate('/userSignin');
    } catch (error) {
      console.error('Error during logout', error);
    }
  }, [navigate]);

  const verifyOtp = async (email: string, otp: string) => {
    setLoading(true);
    setError(null);
    try {
      // Call verifyOtp and expect a response with username and imageUrl
      const data = await userApi.verifyOtp(email, otp);
      // Access token, username, and imageUrl from response data
      const { token, username, imageUrl } = data.data;
      // Save token, username, and imageUrl to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('imageUrl', imageUrl);

      navigate('/home');
    }
    catch (err) {
      setError('OTP verification failed. Please try again.');
    }
    finally {
      setLoading(false);
    }
  };

  const signinWithGoogle = async () => {
    await userApi.loginWithGoogle(); // Calls the loginWithGoogle method from userApi
  };

  return { loading, error, userData, login, signup, signinWithGoogle, verifyOtp, resendOtp, logout, home};
};
