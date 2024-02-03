import React from 'react'
import service from '../appwrite/config'
import { Link } from 'react-router-dom'
const PostCard = ({$id,title,featuredImage}) => {
  return (
    <Link to={`/post/${$id}`} > 
    <img src={service.getFilePreview(featuredImage)} alt={title} />
        <h2>{title}</h2>
    </Link>
  )
}

export default PostCard