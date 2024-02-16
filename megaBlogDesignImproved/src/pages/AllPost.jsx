import React, { useEffect, useState } from 'react'
import service from '../appwrite/config';
import authService from '../appwrite/auth';
import PostCard from '../components/PostCard';
import { useSelector } from 'react-redux';



const AllPost = () => {
    const userData = useSelector((state) => state.auth.userData )
    const [post, setPost] = useState(null);

    useEffect(() => {
       const getFilteredPosts = async () => {
        if (userData) {
            const response = await service.getPosts();
            if (response) {
                const filtered = response.documents.filter((post) => post.userId === userData.$id);
                setPost(filtered)
                console.log(filtered)
            }
           }
       }
       getFilteredPosts();
    }, []);


    return post ? (
        <div>
            {post.map((item) => {
                return <PostCard key={item.$id} {...item} />
            })}
        </div>
      ):null
}

export default AllPost