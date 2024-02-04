import React, { useState } from 'react'
import Input from './Input'
import { useForm } from "react-hook-form"
import {login as authLogin} from "../store/authSlice"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {Link,useNavigate} from "react-router-dom"

const LoginC = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const joInputBoxMaiValueAai = async (data) => {
    setError("")
    try {
        const session = await authService.login(data)
        if (session) {
            const userData = await authService.getCurrentUser()
            if (userData) {
              dispatch(authLogin(userData))
              navigate("/")
            }
        }
    } catch (error) {
        setError(error.message)
    }
  }



  return (
    <>
      <div>mai login hu</div>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit(joInputBoxMaiValueAai)}>
      <Input type="text" label="Email: " placeholder="Enter your email"
        {...register("email", {
          required: true,
          validate: {
            matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
              "Email address must be a valid address",
          }
        })}
      />
      <Input type="text" label="Password: " placeholder="Enter your password" 
      {...register("password",{
        required:true
      })}/>
      <button type='submit'>
        sign in
      </button>
      </form>
    </>

  )
}

export default LoginC