import React, { useCallback, useState } from 'react';
import CommonLogin from '../../../common/authenticationComponents/CommonLogin';
import { trainerLoginThunk } from '../../../../usecases/thunks/trainer/trainerThunks';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../interface-adapters/redux/store';
import { useNavigate } from 'react-router-dom';
import { debounce } from 'lodash';
import useValidation from '../../../../usecases/validation/useValidation';
import { showCustomToast } from '../../../../usecases/toast/showCustomToast';
import toastTypeConstants from '../../../../core/constants/toastTypeConstants';

const Login = () => {
    const [formValues, setFormValues] = useState({ email: '', password: '' });
    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();

    const { validateAll } = useValidation();

    const gioLoc = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const p = position.coords;
            console.log(p.latitude, p.longitude);
        })
    }

    const debouncedSubmit = useCallback(
        debounce(async (data: typeof formValues) => {
            try {
                const allErrors = validateAll({ email: data.email, password: data.password });
                if (allErrors.length > 0) {
                    showCustomToast(allErrors[0] || 'Login failed', toastTypeConstants.error)
                }
                await dispatch(trainerLoginThunk(data)).unwrap();
            } catch (err) {
                console.error('Login failed:', err);
                // Toast already handled inside thunk
            }
        }, 800),
        [dispatch, navigate]
    );

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