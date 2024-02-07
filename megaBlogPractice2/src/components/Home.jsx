import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import service from '../appwrite/config'


const Home = () => {

    const [posts, setPosts] = useState([]);


    useEffect(() => {
        service.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents)
            }
        })
    }, []);


    return (
        <div className='w-full py-8'>
                <div className='flex flex-wrap'>
                    {posts.map((post) => {
                        return <div key={post.$id} className='p-2 w-1/4' >
                            <PostCard {...post} />
                        </div>
                    })}
                </div>
        </div>
    )
}

export default Home