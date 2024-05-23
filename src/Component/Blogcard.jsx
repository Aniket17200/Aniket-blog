import React from 'react'
import { Link } from 'react-router-dom';

const Blogcard = ({blogs}) => {
    const filteredBlog =blogs;
    console.log(filteredBlog);
  return (
    <div className=' grid md:grid-cols-2 grid-cols-1 gap-8'>
        {
            filteredBlog.map((blog)=><Link key={blog.id} className='  p-6 shadow-lg rounded-lg cursor-pointer'>
                <div>
                   <h3 className='mt-4 mb-3  font-bold hover:text-blue-500 cursor-pointer'>Title : {blog.title}</h3>
                   <p className=' mt-4 mb-3'>post : {blog.body}</p>
                </div>
            </Link>)
        }
      
    </div>
  )
}

export default Blogcard
