import React, { useState } from 'react'
import authService from '../appwrite/auth'
import { Link, useNavigate } from 'react-router-dom'
import { Button, Input, Logo } from "./index"
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'

const Signup = () => {
    const navigate = useNavigate()
    const [error, setError] = useState("");
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()

    const create = async (data) => {
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if (userData) dispatch(login(userData))
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }


    return (
       <div>
        <Logo/>
        <div>
        <h2>already have a account <Link>Login</Link> </h2>
        </div>
        <form onSubmit={handleSubmit(create)}>
            <div className='space-y-5'>
                <Input
                label="Name:"
                placeholder="enter your full name"
                {...register("name",{
                    required:true
                })}
                />
                <Button
                type="submit"
                className="w-full" 
                >Create Account</Button>
            </div>
        </form>
       </div>
    )
}

export default Signup