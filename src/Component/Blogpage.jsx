import React from 'react'
import { useEffect,useState} from 'react';
import Blogcard from './Blogcard';


export default function Blogpage() {
    const [blogs,setBlog]=useState([]);

    useEffect(()  =>{
        async function fetchBlog() {
            
            let url ='https://jsonplaceholder.typicode.com/posts';
             let response=await fetch(url);
             let data= await response.json();
             console.log(data);
             setBlog(data);
    
        }
       fetchBlog();

    },[])      
  return (
    <div>
       <div>page Category</div>
       <div>
        <Blogcard blogs={blogs}/>
       </div>
       <div>pagination</div>
      
    </div>
  )
}
