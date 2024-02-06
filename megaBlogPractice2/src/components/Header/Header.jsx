import React from 'react'
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from "react-router-dom"
import LogoutBtn from './LogoutBtn'

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate();

    const navItems = [
        {
            name: "Home",
            slug: "/",
            active: true
        },
        {
            name: "Login",
            slug: "/login",
            active: !authStatus
        },
        {
            name: "Signup",
            slug: "/signup",
            active: !authStatus
        },
        {
            name: "All Posts",
            slug: "/all-posts",
            active: authStatus
        },
        {
            name: "Add Post",
            slug: "/add-post",
            active: authStatus
        }
    ]


    return (
        <div>
            <ul className='flex gap-8 ' >
                {navItems.map((item) => item.active ? (
                    <li key={item.name}>
                        <button className='bg-purple-400 rounded-md w-20 h-8 ' onClick={() => navigate(item.slug)}>
                            {item.name}
                        </button>
                    </li>
                ) : null)}
                {authStatus && (
                    <LogoutBtn/>
                )}
            </ul>

        </div>
    )
}

export default Header