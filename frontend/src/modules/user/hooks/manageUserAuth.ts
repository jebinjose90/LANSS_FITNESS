// frontend\src\modules\user\hooks\manageUserAuth.ts

import { useState } from 'react';
import { userApi } from '../../../infrastructure/api/userApi';

interface OtpUserData {
  username: string;
  imageUrl: string;
}

export const useUserAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [userData, setUserData] = useState<any>(null); // Adjust type as needed
  const [otpData, setOtpData] = useState<OtpUserData | null>(null); // Adjust type as needed

  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await userApi.login(email, password);
      setUserData(data);
      // Save token or user data to local storage if needed
    }
    catch (err) {
      setError('Login failed. Please check your credentials.');
    }
    finally {
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
    }
    catch (err) {
      setError('Signup failed. Please try again.');
    }
    finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (email: string, otp: string) => {  
    setLoading(true);
    setError(null);
    try {
      // Call verifyOtp and expect a response with username and imageUrl
      const data = await userApi.verifyOtp(email, otp);
      setOtpData(data);  // Store the user data after OTP verification
      return data;  // Optionally return the data if needed for further use
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

  return { loading, error, userData, otpData,login, signup, signinWithGoogle , verifyOtp};
};
