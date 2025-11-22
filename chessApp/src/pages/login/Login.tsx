import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
import type { RootState, AppDispatch } from '../../store/store';
import { loginUser } from '../../slices/authSlice';
import GeneralInput from '../../components/GeneralInput/GeneralInput';
import GreenButton from '../../components/GreenButton/GreenButton';

interface LoginFormProps {
    name:String,
    email: String,
}

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch<AppDispatch>();
    const navigate = useNavigate();

    const {isLoading, isAuthenticated, error} = useSelector((state: RootState) => state.auth);

    if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();

    dispatch(loginUser({email, password})).unwrap()
    .then(()=>{
        console.log('Login realizado com sucesso!');
    })
    .catch((err) => {
        console.error('Falha no login:', err);
    })
  }

  return (
    <div>
      <h1>faça seu login</h1>
      <form onSubmit={handleSubmit}>
        <GeneralInput 
         value={email}
         type='email'
         placeholder="Digite seu e-mail"
         onChange={(e)=> setEmail(e.target.value)}
        />
        <GeneralInput 
         value={password}
         type='password'
         placeholder="Digite sua senha"
         onChange={(e)=> setPassword(e.target.value)}
        />
        <GreenButton 
        type='submit'     
        >
          Log-in
        </GreenButton>
      </form>
    </div>
  )
}

export default Login