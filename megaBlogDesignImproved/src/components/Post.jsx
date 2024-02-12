import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import service from '../appwrite/config';
import parse from "html-react-parser";



const Post = () => {
    const { slug } = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) {
                    setPost(post)
                    console.log(post)
                }
                else navigate("/")
            })
        }
        else navigate("/")
        
    }, [slug,navigate]);



    return post ? (
        <div>
        <img src={service.getFilePreview(post.featuredImage)} alt="" />
        <h1>{post.title}</h1>
        <h1>{parse(post.content)}</h1>
    </div>
    ): null
}

export default Post