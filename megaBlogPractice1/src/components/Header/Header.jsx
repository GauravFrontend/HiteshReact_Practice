import React from 'react'
import {useSelector} from "react-redux"
import Logoutbtn from './Logoutbtn'

const Header = () => {
    const authStatus = useSelector((state) => state.auth.status )



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
                    {item.name}
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