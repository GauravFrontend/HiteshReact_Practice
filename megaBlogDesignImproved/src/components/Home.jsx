import React, { useEffect, useState } from 'react'
import service from '../appwrite/config'
import PostCard from './PostCard';

const Home = () => {
	const [postState, setPostState] = useState([]);
	useEffect(() => {
		const getPosts = async () => {
			const allPosts = await service.getPosts()
			if (allPosts) {
				setPostState(allPosts.documents)
			}
		}
		getPosts();
	}, []);
	console.log(postState)
	return (
		<>
			<div className=' pl-36 pr-36 pt-14' >
				<div className=" flex flex-wrap justify-start align-middle gap-5" >

					{postState.map((post) => {
						return <div className='flex' key={post.$id} >
							<PostCard {...post} />
						</div>
					})}
				</div>
			</div>
		</>
	)
}

export default Home