import React, { useEffect, useState } from 'react'
import service from '../appwrite/config';
import PostCard from '../components/PostCard';

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
    <>
    <div>ye home hai</div>
    <div>
        {posts.map((post) => {
            return <div key={post.$id} >
                <PostCard {...post} />
            </div>
        })}
    </div>
    </>
  )
}

export default Home