import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin';
import Login from '../../user/components/login/Login';

const UserLogin: React.FC = () => {
    
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/9MJtr4G.jpeg"
            heading="Welcome Back!"
            showSubHeading={true}
            showUserSignup={true}
            userSigupText='New User?'
            userSignupHref='/userSignup'>
            <Login />
        </AuthenticationUISkin>
    )
}

export default UserLogin