import React, { useState } from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin';
import Login from '../../common/authenticationComponents/Login';
import { useUserAuth } from '../hooks/manageUserAuth';

const UserLogin: React.FC = () => {
const { loading, error, login } = useUserAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
  };
    return (
        <AuthenticationUISkin
        imageUrl="https://i.imgur.com/9MJtr4G.jpeg"
        heading="Welcome Back!"
        showSubHeading = {true}
        showUserSignup = {true}
        userSigupText = 'New User?'
        userSignupHref = ''
        onSubmit={() => handleSubmit}>
            <Login />
        </AuthenticationUISkin>
    )
}

export default UserLogin