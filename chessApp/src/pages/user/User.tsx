import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../../store/store'
import { useLocation, useNavigate } from 'react-router-dom';

const User = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthenticated = useSelector((state:RootState)=> state.auth.isAuthenticated);

   useEffect(()=>{
        if(!isAuthenticated){
        navigate("/login", {state : 
        {from : location.pathname}
        });
    }
   },[isAuthenticated, location.pathname, navigate])

  return (
    <div>User</div>
  )
}

export default User