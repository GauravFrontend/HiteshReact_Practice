import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import service from '../appwrite/config';
import PostCard from './PostCard';
import authService from '../appwrite/auth';



const AllPosts = () => {
    const [posts, setPosts] = useState([]);
    const loginStatus = useSelector((state) => state.auth.status)
    const loginData = useSelector((state) => state.auth.userData)
    useEffect(() => {
        try {
            const getPosts = async () => {
                const arePostsThere = await service.getPosts()
                if (arePostsThere) {
                    const getUser = await authService.getCurrentUser();
                    if (getUser) {
                        const filterdPosts = arePostsThere.documents.filter((item) => item.userId === loginData.$id)
                    if (filterdPosts) {
                        setPosts(filterdPosts)
                    }
                }
                    }
            }
            getPosts();
        } catch (error) {
            console.log(error.message)
        }
        
    }, []);




    return (
        <div className='w-full py-8'>

            <div className='flex flex-wrap'>
                {posts.map((post) => (
                    <div key={post.$id} className='p-2 w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>

        </div>
    )
}

export default AllPosts