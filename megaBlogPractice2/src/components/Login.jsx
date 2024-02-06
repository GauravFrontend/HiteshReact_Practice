import React from 'react'
import { useDispatch } from 'react-redux'
import authService from "../appwrite/auth"
import {login as authLogin} from "../store/authSlice"
import Input from './Input'
import {useForm} from "react-hook-form"
import { Navigate, useNavigate } from 'react-router-dom'

const Login = () => {
    const {register,handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();    
    

    const login = async (data) => {
        if (data) {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                navigate("/")
                }
            }
        }
    }

  return (
    <form onSubmit={handleSubmit(login)} className='flex flex-col gap-4' >
        <Input label="Email"
        {...register("email",{required:true})}
        className="bg-yellow-200 w-60 rounded-md " />
        <Input label="Password" 
        {...register("password",{required:true})}
        className="bg-yellow-200 w-60 rounded-md " />
        <button type='submit' className='bg-purple-400 rounded-md w-20 h-8 ' >Submit</button>
    </form>
  )
}

export default Login