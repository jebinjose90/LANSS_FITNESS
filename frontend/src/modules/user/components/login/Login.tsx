//frontend/src/modules/user/components/login/Login.tsx
import React, { useCallback, useEffect, useState } from 'react';
import CommonLogin from '../../../common/authenticationComponents/CommonLogin';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../interface-adapters/redux/store';
import { userLoginThunk } from '../../../../usecases/thunks/user/userThunks';
import { useNavigate } from 'react-router-dom';
import userCRM from '../../../../core/constants/route/userCRM';
import { debounce } from 'lodash';
import useValidation from '../../../../usecases/validation/useValidation';
import { showCustomToast } from '../../../../usecases/toast/showCustomToast';
import toastTypeConstants from '../../../../core/constants/toastTypeConstants';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [formValues, setFormValues] = useState({ email: '', password: '' });

    const { validateAll } = useValidation();
    // Get all errors as an array


    const gioLoc = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const p = position.coords;
            console.log(p.latitude, p.longitude);
        })
    }

    const debouncedSubmit = useCallback(
        debounce(async (data: typeof formValues) => {
            const allErrors = validateAll({ email: data.email, password: data.password });
            if (allErrors.length > 0) {
                showCustomToast(allErrors[0], toastTypeConstants.error);
                return;
            }
            try {
                await dispatch(userLoginThunk(data)).unwrap();
                
            } catch (err) {
                console.error('Login failed:', err);
                // Toast already handled inside thunk
            }
        }, 800),
        [dispatch, navigate]
    );

    useEffect(() => {
        return () => {
            debouncedSubmit.cancel();
        };
    }, [debouncedSubmit]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        debouncedSubmit({ ...formValues });
    };

    return (
        <>
            <CommonLogin formValues={formValues} gioLoc={gioLoc} handleSubmit={handleSubmit} setFormValues={setFormValues} />
        </>
    )
}

export default Login