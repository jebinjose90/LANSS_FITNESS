//LANSS_FITNESS\frontend\src\modules\user\components\login\LoginForm.tsx
import React, { useCallback, useState } from 'react';
import { LoginRequest } from '../../../../core/models/Userr/userAuthModel';

import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch } from '../../../../interface-adapters/redux/store';
import { userLoginThunk } from '../../../../usecases/thunks/user/userThunks';

import useValidation from '../../../../usecases/validation/useValidation';
import { debounce } from 'lodash';
import { useNavigate } from 'react-router-dom';
import userCRM from '../../../../core/constants/route/userCRM';

const LoginForm: React.FC = () => {
  // const { handleLogin, loading, error } = useLogin();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, userData: authUser} = useSelector((state: RootState) => state.user);

  const [formData, setFormData] = useState<LoginRequest>({
    email: '',
    password: '',
  });
  const { validateAll } = useValidation();
  // Get all errors as an array
  const allErrors = validateAll({ email: formData.email, password: formData.password});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const debouncedSubmit = useCallback(
    debounce(async (data: typeof formData & { allErrors: string[] }) => {
      try {
        const result = await dispatch(userLoginThunk(data)).unwrap();
        if (result) {
          console.log("RESULT");
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
    debouncedSubmit({...formData, allErrors});
  };



  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {authUser && <div className="text-green-500">Welcome, {authUser.username}</div>}
    </form>
  );
};

export default LoginForm;
