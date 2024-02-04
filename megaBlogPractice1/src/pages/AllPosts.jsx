import React, { useState, useEffect } from 'react'
import PostCard from '../components/PostCard';
import appwriteService from "../appwrite/config";
import { useSelector } from 'react-redux';
import authService from '../appwrite/auth';

function AllPosts() {
const [posts, setPosts] = useState([]);

useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await appwriteService.getPosts();
            if (response) {
                const userData = await authService.getCurrentUser();
                if (userData) {
                    const filteredPosts = response.documents.filter(post => post.userId === userData.$id);
                    setPosts(filteredPosts);
                    console.log("Filtered Posts:");
                    console.log(filteredPosts);
                    console.log("User ID:", userData.$id);
                }
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    fetchData();

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


