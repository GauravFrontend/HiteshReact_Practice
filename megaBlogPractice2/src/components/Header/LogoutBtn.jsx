import React from 'react'
import authService from '../../appwrite/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import { logout as authLogin } from '../../store/authSlice'
import { useDispatch } from 'react-redux'


const LogoutBtn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogout = async () => {
        authService.logout().then(() => {
            return dispatch(authLogin()); 
        })
    }


  return (
    <button onClick={handleLogout} className='bg-purple-400 rounded-md w-20 h-8 ' >
        Logout
    </button>
  )
}

export default LogoutBtn