import React, { useState } from 'react';
import { useTrainerAuth } from '../../hooks/manageTrainerAuth';
import CommonLogin from '../../../common/authenticationComponents/CommonLogin';

const Login = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const { loading, error, trainerLogin } = useTrainerAuth();
    const gioLoc = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const p = position.coords;
            console.log(p.latitude, p.longitude);
        })
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        trainerLogin(formValues.email, formValues.password);
    };

    return (
        <>
            <CommonLogin formValues={formValues} gioLoc={gioLoc} handleSubmit={handleSubmit} setFormValues={setFormValues}/>
        </>
    )
}

export default Login