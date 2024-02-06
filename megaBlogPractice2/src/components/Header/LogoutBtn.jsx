import React from 'react'
import authService from '../../appwrite/auth'
import { Navigate, useNavigate } from 'react-router-dom'
import { logout } from '../../store/authSlice'
import { useDispatch } from 'react-redux'


const LogoutBtn = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleLogout = async () => {
        const logout = await authService.logout()
        if (logout) {
            dispatch(logout())
            navigate("/login")
        }
    }


  return (
    <button onClick={handleLogout} className='bg-purple-400 rounded-md w-20 h-8 ' >
        Logout
    </button>
  )
}

export default LogoutBtn