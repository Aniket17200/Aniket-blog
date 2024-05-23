import React from 'react'
import Blogpage from '../Component/Blogpage'



export default function Blog() {
  return (
    <div>
     <div className='py-40 bg-white text-center text-black'>
      <h2 className=' text-5xl lg:text-7xl  loading-snug font-bold mb-5'>Blog page</h2>
     </div>
     <div className='max-w-7xl mx-auto'>
      <Blogpage/>
     
     </div>
    </div>
  )
}
