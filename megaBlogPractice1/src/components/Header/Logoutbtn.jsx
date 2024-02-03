import React from 'react'
import {useDispatch} from "react-redux"
import { logout } from '../../store/authSlice';
import authService from '../../appwrite/auth';
const Logoutbtn = () => {

    const dispatch = useDispatch();
    const logoutHandler = () => {
       authService.logout().then(() => {
        dispatch(logout())
       })
    }


  return (
    <button
    onClick={logoutHandler}
    >
        LogOut
    </button>
  )
}

export default Logoutbtn