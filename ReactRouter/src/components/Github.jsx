import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';

const Github = () => {
    const [dataa, setDataa] = useState([]);
    useEffect(() => {
        fetch("https://api.github.com/users/hiteshchoudhary")
        .then(res => res.json())
        .then(data =>{
            setDataa(data)
        })
    }, []);
  return (
    <div>
      <h1>Github Followers : {dataa.followers}</h1>
    </div>
  )
}

export default Github
