import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
import { useForm } from "react-hook-form"
import authService from '../appwrite/auth';
import { login } from '../store/authSlice';


const SignupC = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const signupPrClickKiya = async (data) => {
    setError("")
    const createAccount = await authService.createAccount(data);
    if (createAccount) {
      const currentUser = await authService.getCurrentUser();
      if (currentUser) {
        navigate("/")
        console.log(currentUser)
        dispatch(login(currentUser))
      }
      
    }
  }

  return (
    <>
      <div>upun signup hai</div>
      <form onSubmit={handleSubmit(signupPrClickKiya)}>
        <Input
          type="text"
          label="Name: "
          placeholder="Enter you name"
          {...register("name", {
            required: true
          })}
        />
        <Input
          type="text"
          label="Email: "
          placeholder="Enter you email"
          {...register("email", {
            required: true,
            validate: {
              matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                "Email address must be a valid address",
            }
          })}
        />
        <Input
          type="text"
          label="Password: "
          placeholder="Enter you password"
          {...register("password", {
            required: true
          })}
        />
        <button type='submit'>
          Signup
        </button>
      </form>
    </>
  )
}

export default SignupC