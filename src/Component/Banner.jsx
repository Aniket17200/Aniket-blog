import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Blogpage from './Blogpage'




export default function Banner() {
  return (
<div>
    <div className='px-4 py-32  bg-white mx-auto'>
        <div className=' text-blue-400 text-center'>
               <h1 className=' text-5xl lg:text-7xl leading-snug font-bold mb-5'>Welecome to our Blog</h1>
                   <p className=' text-black lg:w-3/5 mx-auto  mb-5 font-primary'>Start your blog today and joined a comminity of write and readers who are passionate 
                       about sharing their stories and ideas. we offer everthing you need to get started,from
                       helpful tips and tutiorial
                    </p>
                 <div>
                     <Link to="/" className=' font-medium  hover:text-orange-500 inline-flex items-center py-1'>Learn More<FaArrowRight className='mt-1 ml-2'/></Link>
                     <Blogpage/>
                 </div>
           </div>
     </div>
  </div>
  )
}
