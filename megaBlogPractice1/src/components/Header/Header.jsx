import React from 'react'
import {useSelector} from "react-redux"
import Logoutbtn from './Logoutbtn'
import { useNavigate } from 'react-router-dom'

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status )
    const navigate = useNavigate();


    const navItems = [
        {
            name:"Home",
            slug:"/",
            active:true
        },
        {
            name:"Login",
            slug:"/login",
            active:!authStatus
        },
        {
            name:"Signup",
            slug:"/signup",
            active:!authStatus
        },
        {
            name:"All Posts",
            slug:"/all-posts",
            active:authStatus
        },
        {
            name:"Add Post",
            slug:"/add-post",
            active:authStatus
        },
        
    ]



  return (
    <header className='py-3 shadow bg-gray-500' >
        <ul className='flex ml-auto '>
        {navItems.map((item) => (
            item.active?(
                <li className='mx-4' key={item.name}>
                    <button className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
                    onClick={() => navigate(item.slug) } >
                    {item.name}
                    </button>
                </li>
            ):null
        ))}

        {authStatus && (
            <li>
                <Logoutbtn/>
            </li>
        )}

        </ul>
    </header>
  )
}

export default Header