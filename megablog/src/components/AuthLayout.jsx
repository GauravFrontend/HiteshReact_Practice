import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export default function Protected({children,authenticaiton=true}){

const navigate = useNavigate()
const [loader, setLoader] = useState(true);
const authStatus = useSelector((state) => state.auth.status)

useEffect(() => {
    if (authenticaiton &&authStatus !==authenticaiton) {
        navigate("/login")
    } else if (!authenticaiton && authStatus !==authenticaiton) {
        navigate("/")
    }
    setLoader(false)
}, [authStatus,navigate,authenticaiton]);


  return loader? <h1>loading......</h1> : <>{children}</>
}

