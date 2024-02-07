import service from "../appwrite/config"
import React from 'react'
import { Link } from 'react-router-dom'


const PostCard = ({$id,
    title,
    featuredImage
}) => {
  return (
    <>
    <Link to={`/post/${$id}`} >
    <img src={service.getFilePreview(featuredImage)} alt="" />
    </Link>
    {title}
    </>
  )
}

export default PostCard