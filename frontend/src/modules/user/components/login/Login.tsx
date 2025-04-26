import React, { useCallback, useState } from 'react';
import CommonLogin from '../../../common/authenticationComponents/CommonLogin';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../../../interface-adapters/redux/store';
import { userLoginThunk } from '../../../../usecases/thunks/user/userThunks';
import { useNavigate } from 'react-router-dom';
import userCRM from '../../../../core/constants/route/userCRM';
import { debounce } from 'lodash';
import useValidation from '../../../../usecases/validation/useValidation';

const Login = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch<AppDispatch>();
    const [formValues, setFormValues] = useState({ email: '', password: '' });

    const { validateAll } = useValidation();
    // Get all errors as an array
    const allErrors = validateAll({ email: formValues.email, password: formValues.password });

    const gioLoc = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            const p = position.coords;
            console.log(p.latitude, p.longitude);
        })
    }

    const debouncedSubmit = useCallback(
        debounce(async (data: typeof formValues & { allErrors: string[] }) => {
            try {
                const result = await dispatch(userLoginThunk(data)).unwrap();
                if (result) {
                    console.log("RESULT",result);
                    navigate(`/${userCRM.Home}`, { replace: true });
                }
            } catch (err) {
                console.error('Login failed:', err);
                // Toast already handled inside thunk
            }
        }, 800),
        [dispatch, navigate]
    );


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        debouncedSubmit({ ...formValues, allErrors });
    };

    return (
        <>
            <CommonLogin formValues={formValues} gioLoc={gioLoc} handleSubmit={handleSubmit} setFormValues={setFormValues} />
        </>
    )
}

export default Login