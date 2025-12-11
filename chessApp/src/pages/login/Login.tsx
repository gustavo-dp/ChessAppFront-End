import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import type { RootState, AppDispatch } from '../../store/store';
import { loginUser } from '../../slices/authSlice';
import GeneralInput from '../../components/GeneralInput/GeneralInput';
import GeneralButton from '../../components/GeneralButton/GeneralButton';
import GeneralCard from '../../components/GeneralCard/GeneralCard';
import "./login.css"
import AuthLayout from '../../layouts/AuthLayout/AuthLayout';

interface LoginFormProps {
  name: String,
  email: String,
}

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";
  const { isLoading, isAuthenticated, error } = useSelector((state: RootState) => state.auth);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(loginUser({ email, password }));

  }
  useEffect(() => {

    if (isAuthenticated) {

      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, from]);

  return (
    <AuthLayout>
      <GeneralCard>
        <div className="card-header">
          <div className="card-title">Login</div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Digite seu e-mail</label>
            <GeneralInput
              value={email}
              type='email'
              placeholder="Digite seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>digite sua senha</label>
            <GeneralInput
              value={password}
              type='password'
              placeholder="Digite sua senha"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='container-btn'>
            <GeneralButton
              type='submit'
            >
              fazer login
            </GeneralButton>
          </div>

        </form>
      </GeneralCard>
    </AuthLayout>
  )
}

export default Login