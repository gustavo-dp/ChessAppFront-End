import React from 'react'
import './home.css'
import { useSelector } from 'react-redux';
import type { RootState } from '../../store/store';
import { useLocation, useNavigate } from 'react-router-dom';
import GeneralInput from '../../components/GeneralInput/GeneralInput';
function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = (e: React.FormEvent) =>{
    e.preventDefault();
    const isAuthenticated = useSelector((state:RootState) => state.auth.isAuthenticated)
    if(isAuthenticated==false){
        navigate("/login", 
        {state : 
        {from : location.pathname}
        });
    }
  }
    
  return (
    <div className='container'>
      <form onSubmit={handleSubmit}>
      <GeneralInput 
      placeholder='save your match here! paste your PGN'
      />
      </form>
    </div>
  )
}

export default Home;