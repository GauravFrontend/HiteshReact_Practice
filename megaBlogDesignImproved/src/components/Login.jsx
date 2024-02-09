import React from 'react'
import Input from './Input'
import {useForm} from "react-hook-form"
import { login as authSliceLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'



const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {register,handleSubmit} = useForm();

    const onLogin = async (loginData) => {
        try {
            const session = await authService.login(loginData)
            if (session) {
                const userData = await authService.getCurrentUser()
                if (userData) {
                    dispatch(authSliceLogin(userData))
                    navigate("/")
                    console.log(userData)
                }
            }
        } catch (error) {
            console.log("error in login fetching onLogin function")
        }
    }


  return (
   <>
   <div className='custom-width flex justify-center pt-40 pb-32' >
   <div className=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form onSubmit={handleSubmit(onLogin)}>
        <h5 className=" mb-4 text-xl font-medium text-gray-900 dark:text-white">Login to our platform</h5>

        <Input 
        type="email"
        {...register("email",{
            required:true,
            validate:{
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                        "Email address must be Link valid address",
            }
        })}
        label="Your Email: " 
        />

        <Input 
        {...register("password",{
            required:true
        })}
        type="password"
        label = "Your password:" />

        <div className=" mt-4 flex items-start">
            <div className="flex items-start">
                <div className="flex items-center h-5">
                    <input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" />
                </div>
                <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
            </div>
            <Link href="#" className="ms-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
        </div>
        <button  type="submit" className=" mt-4 w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
        <div className=" mt-4 text-sm font-medium text-gray-500 dark:text-gray-300">
            Not registered? <Link href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
        </div>
    </form>
</div>
   </div>



   </>
  )
}

export default Login