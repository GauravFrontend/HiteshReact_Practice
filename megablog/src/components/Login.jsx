import React, { useState } from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'
import { login as authLogin } from "../store/authSlice"
import { Button, Input, Logo } from "../index"
import { useDispatch } from "react-redux"
import authService from "../appwrite/auth"
import { useForm } from "react-hook-form"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("");

    const login = async (data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

    return (
        <div
            className='flex items-center justify-center w-full'
        >
            <div>
                <Logo width="100%" />
            </div>
            <h2>Sign in to your account</h2>
            <p>dont have a account
                <Link to="/signup">Sign up</Link>
            </p>
        {error && <p>{error}</p>}


        <form onSubmit={handleSubmit(login)}>
            <div className='space-y-5'>
                <Input
                label = "Email: "
                placeholder = "enter your email"
                type= "email"
                {...register("email",{
                    required: true,
                    validate: {
                        matchPatern: (value) => /^([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}$/igm.
                        test(value) || "email address must be valid"
                    }
                })}
                />
                <Input
                label="passward"
                type="password"
                placeholder= "Enter passward"
                {...register("password",{
                    required: true
                })}
                />
                <Button
                type="submit"
                className="w-full" 
                >Sign In</Button>
            </div>
        </form>



        </div>
    )
}

export default Login