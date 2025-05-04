import React from 'react'
import AuthenticationUISkin from '../../common/AuthenticationUISkin'
import Signup from '../../user/components/signup/Signup'
import userCRM from '../../../core/constants/route/userCRM'
import IsLoading from '../../common/components/IsLoading'
import { useSelector } from 'react-redux'
import { RootState } from '../../../interface-adapters/redux/store'

const UserSignup: React.FC = () => {
    const { loading } = useSelector((state: RootState) => state.user)

    if (loading) {
        return <IsLoading/>
    }
    return (
        <AuthenticationUISkin
            imageUrl="https://i.imgur.com/678tyUR.jpeg"
            heading="Sign Up"
            showUserSignin={true}
            userSiginText='Already User?'
            userSigninHref={`/${userCRM.UserLogin}`}>
            <Signup/>
        </AuthenticationUISkin>
    )
}

export default UserSignup