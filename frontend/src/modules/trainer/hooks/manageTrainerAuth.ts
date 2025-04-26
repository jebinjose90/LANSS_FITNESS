// frontend\src\modules\trainer\hooks\managetrainerAuth.ts

import { useCallback, useState } from 'react';
import { trainerApi } from '../../../infrastructure/api/trainerApi/trainerApi';
import { useNavigate } from 'react-router-dom';
import trainerCRM from '../../../core/constants/route/trainerCRM';


export const useTrainerAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [trainerData, setTrainerData] = useState<any>(null); // Adjust type as needed
  const navigate = useNavigate();
  const apiUrl: String = import.meta.env.VITE_BACKEND_URL;


  const trainerLogin = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await trainerApi.login(email, password);
      // Access token, trainername, and imageUrl from response data
      const { trainername, imageUrl } = data.data;
      // Save token, trainername, and imageUrl to localStorage
      localStorage.setItem('trainername', trainername);
      localStorage.setItem('trainerImageUrl', `${apiUrl}${imageUrl}`);
      navigate('/trainer/profile');
    }
    catch (err) {
      setError('Login failed. Please check your credentials.');
    }
    finally {
      setLoading(false);
    }
  };

  const trainerProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await trainerApi.profileData();
      // Modify the imageUrl by adding the API URL
      const trainnameToCaps = data.data.trainername.toUpperCase();
      const updatedData = {
        ...data.data, // Spread the existing data
        imageUrl: `${apiUrl}${data.data.imageUrl}`,
        trainername: `${trainnameToCaps}` // Update the imageUrl
      };

      return updatedData;
    }
    catch (err: any) {
      // Check if the error response exists and contains a message
      if (err.response && err.response.data && err.response.data.message) {
        console.log("ERR", err.response.data.message);
        setError(err.response.data.message); // Display the message from the server
      } else {
        setError("An unexpected error occurred. Please try again later."); // Fallback error
      }
    }
    finally {
      setLoading(false);
    }
  };

  const trainerUserChats = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await trainerApi.usersListData();
        return data; // Ensure it's returning an array
    } catch (err: any) {
      // Check if the error response exists and contains a message
      if (err.response && err.response.data && err.response.data.message) {
        console.error("ERR", err.response.data.message);
        setError(err.response.data.message); // Display the message from the server
      } else {
        setError("An unexpected error occurred. Please try again later."); // Fallback error
      }
      return []; // Return an empty array in case of an error
    } finally {
      setLoading(false);
    }
  };


  const trainerSignup = async (trainername: string, email: string, password: string, phone: number, imageUrl: string, certificatePdfUrl: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await trainerApi.signup(trainername, email, password, phone, imageUrl, certificatePdfUrl);
      navigate(`/${trainerCRM.TrainerOTP}?email=${encodeURIComponent(email)}`); // Pass email as a URL parameter;
      setTrainerData(data);
      // Handle post-signup actions
    }
    catch (err) {
      setError(`Signup failed. Please try again.`);
      console.error();
    }
    finally {
      setLoading(false);
    }
  };

  const trainerResendOtp = async (email: string) => {
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

  const trainerLogout = useCallback(async () => {
    try {
      await trainerApi.logout();
      localStorage.removeItem('trainername');
      localStorage.removeItem('trainerImageUrl');
      navigate('/trainer/trainerSignin');
    } catch (error) {
      console.error('Error during logout', error);
    }
  }, [navigate]);

  const trainerVerifyOtp = async (email: string, otp: string) => {
    setLoading(true);
    setError(null);
    try {
      // Call verifyOtp and expect a response with trainername and imageUrl
      const data = await trainerApi.verifyOtp(email, otp);
      // Access token, trainername, and imageUrl from response data
      const { trainername, imageUrl } = data.data;
      // Save trainername, and imageUrl to localStorage
      localStorage.setItem('trainername', trainername);
      localStorage.setItem('trainerImageUrl', imageUrl);

      navigate('/trainer/profile');
    }
    catch (err) {
      setError('OTP verification failed. Please try again.');
    }
    finally {
      setLoading(false);
    }
  };

  const trainerSigninWithGoogle = async () => {
    await trainerApi.loginWithGoogle(); // Calls the loginWithGoogle method from trainerApi
  };

  return { loading, error, trainerData, trainerLogin, trainerSignup, trainerSigninWithGoogle, trainerVerifyOtp, trainerResendOtp, trainerLogout, trainerProfile, trainerUserChats };
};
