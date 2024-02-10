import React from 'react'
import service from '../appwrite/config'
import { Link } from "react-router-dom"

const PostCard = ({
    $id,
    title,
    featuredImage

}) => {
    return (
        <>
            <Link className='h-auto'  to={`/post/${$id}`} >
                <div className="max-w-sm  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">

                    <div className="max-w-sm max-h-72 overflow-hidden">
                        <img className="rounded-t-lg object-cover w-full h-full" src={service.getFilePreview(featuredImage)} alt="" />
                    </div>


                    <div className="p-5">

                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

                        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                        <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Read more
                            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                            </svg>
                        </a>
                    </div>
                </div>
            </Link>
        </>
    )
}

export default PostCard