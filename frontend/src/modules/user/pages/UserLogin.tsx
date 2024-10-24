import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin';
import Login from '../../common/pages/Login';

interface UserType {
    imageUrl: string;
    userType: string;
    newUserType: string;
    createUserHref: string;
    onSubmit: (event: React.FormEvent) => void;
    children?: React.ReactNode; // This allows passing in custom input fields
}

const UserLogin: React.FC<UserType> = () => {
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle login logic
    };
    return (
        <AuthenticationUISkin
            imageUrl='https://i.imgur.com/9MJtr4G.jpeg'
            userType='Welcome Back!'
            createUserHref=''
            newUserType='New User?'
            onSubmit={handleSubmit}>
                <Login/>
        </AuthenticationUISkin>

    )
}

export default UserLogin