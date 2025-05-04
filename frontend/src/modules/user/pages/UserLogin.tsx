import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin';
import Login from '../../user/components/login/Login';
// import LoginForm from '../components/login/LoginForm';
import userCRM from '../../../core/constants/route/userCRM';
import IsLoading from '../../common/components/IsLoading';
import { useSelector } from 'react-redux';
import { RootState } from '../../../interface-adapters/redux/store';

const UserLogin: React.FC = () => {
    const { loading } = useSelector((state: RootState) => state.user)

    if (loading) {
        return<IsLoading/>
    }
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/9MJtr4G.jpeg"
            heading="Welcome Back!"
            showSubHeading={true}
            showUserSignup={true}
            userSigupText='New User?'
            userSignupHref={`/${userCRM.UserSignup}`}>
            <Login />
        </AuthenticationUISkin>
    )
}

export default UserLogin