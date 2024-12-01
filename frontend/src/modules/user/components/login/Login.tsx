import React, { useState } from 'react';
import { useUserAuth } from '../../hooks/manageUserAuth';
import CommonLogin from '../../../common/authenticationComponents/CommonLogin';

const Login = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const { loading, error, userLogin } = useUserAuth();
    const gioLoc = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const p = position.coords;
            console.log(p.latitude, p.longitude);
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        userLogin(formValues.email, formValues.password);
    };

    return (
        <>
            <CommonLogin formValues={formValues} gioLoc={gioLoc} handleSubmit={handleSubmit} setFormValues={setFormValues}/>
        </>
    )
}

export default Login