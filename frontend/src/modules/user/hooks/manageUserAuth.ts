// frontend\src\modules\user\hooks\manageUserAuth.ts

import { useCallback, useState } from 'react';
import { userApi } from '../../../infrastructure/api/userApi';
import { useNavigate } from 'react-router-dom';
import userCRM from '../../../core/constants/route/userCRM';


export const useUserAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null); // Adjust type as needed
  const navigate = useNavigate();
  const apiUrl:String = import.meta.env.VITE_BACKEND_URL;

  const userLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await userApi.login(email, password);
      // Access token, username, and imageUrl from response data
      const { token,username, imageUrl } = data.data;
      // Save token, username, and imageUrl to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('userImageUrl', `${apiUrl}${imageUrl}`);
      console.log("HOME");
      navigate(`/${userCRM.Home}`);
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
      localStorage.setItem('userImageUrl', `${apiUrl}${imageUrl}`);
    }
    catch (err) {
      setError('Home data fetching failed. Please check your credentials.');
    }
    finally {
      setLoading(false);
    }
  };

  const profile = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await userApi.profileData();
      // Access token, username, and imageUrl from response data
      const profile = data.data;
      setUserData(profile)
    }
    catch (err) {
      setError('Profile data fetching failed. Please check your credentials.');
    }
    finally {
      setLoading(false);
    }
  };

  const userSignup = async (username: string, email: string, password: string, phone: number, imageUrl: string) => {
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

  const userResendOtp = async (email: string) => {
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

  const userLogout = useCallback(async () => {
    try {
      await userApi.logout();
      localStorage.removeItem('token');
      localStorage.removeItem('username');
      localStorage.removeItem('userImageUrl');
      navigate('/userSignin');
    } catch (error) {
      console.error('Error during logout', error);
    }
  }, [navigate]);

  const userVerifyOtp = async (email: string, otp: string) => {
    setLoading(true);
    setError(null);
    try {
      // Call verifyOtp and expect a response with username and imageUrl
      console.log(typeof userApi.verifyOtp); // Should log: 'function'
      const data = await userApi.verifyOtp(email, otp);
      
      // Access token, username, and imageUrl from response data
      const { token, username, imageUrl } = data.data;
      // Save token, username, and imageUrl to localStorage
      localStorage.setItem('token', token);
      localStorage.setItem('username', username);
      localStorage.setItem('userImageUrl', imageUrl);

      navigate('/home');
    }
    catch (err) {
      setError('OTP verification failed. Please try again.');
    }
    finally {
      setLoading(false);
    }
  };

  const updateUserProfile = async(email: string, username: string, age: string, gender: string, height: string, weight: string, place: string) => {
    setLoading(true);
    setError(null);
    try {
      const updatedData = await userApi.updateProfile(email, username, age, gender, height, weight, place);
      setUserData(updatedData.data);
    }
    catch (err) {
      setError('Profile update failed.');
    }
    finally {
      setLoading(false);
    }
  };
  
  const userSigninWithGoogle = async () => {
    await userApi.loginWithGoogle(); // Calls the loginWithGoogle method from userApi
  };

  return { loading, error, userData, userLogin, userSignup, userSigninWithGoogle, userVerifyOtp, userResendOtp, userLogout, home, profile, updateUserProfile};
};
