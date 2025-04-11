//LANSS_FITNESS\frontend\src\modules\user\components\login\LoginForm.tsx
import React, { useState } from 'react';
import { useLogin } from '../../hooks/userLogin';
import { LoginRequest } from '../../../../core/models/Userr/userAuthModel';

import { useDispatch, useSelector } from 'react-redux';
import { RootState,AppDispatch } from '../../../../interface-adapters/redux/store';
import { loginUser } from '../../../../usecases/user/loginUser';
import toast from 'react-hot-toast';
import useValidation from '../../../../usecases/validation/useValidation';

const LoginForm: React.FC = () => {
  // const { handleLogin, loading, error } = useLogin();

  const dispatch = useDispatch<AppDispatch>();
  const { loading, error, data } = useSelector((state: RootState) => state.user);


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


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({...formData, allErrors}));
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
      {error && <p className="error">{error}</p>}
      {data && <div className="text-green-500">Welcome, {data.username}</div>}
    </form>
  );
};

export default LoginForm;
