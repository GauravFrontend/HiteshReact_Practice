import React, { useEffect, useState } from 'react'
import PostForm from '../components/PostForm'
import { useNavigate, useParams } from 'react-router-dom';
import service from '../appwrite/config';


const EditPost = () => {
    const {slug} = useParams();
    const [post, setPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        service.getPost(slug).then((item) => {
            if (item) {
                setPost(item)
            }
            else {
                navigate("/")
            }
        })
    }, []);
  return post?(
    <PostForm post={post} />
  ):null
}

export default EditPost