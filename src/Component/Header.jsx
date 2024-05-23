import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaGitlab, FaXmark } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { TbBrandLeetcode } from "react-icons/tb";

export default function Header() {
  const[isMenuOpen,setMenOpen]=useState(false);
  const toggleMenu = () =>{
    setMenOpen(!isMenuOpen);
  }
  const navitem=[
    {path:"/",Link:"Home"},
    {path:"/Services",Link:"Services"},
    {path:"/About",Link:"About"},
    {path:"/Blog",Link:"Blog"},
    {path:"/Contact",Link:"Contact"},
  ]
  return (
   <header className=' bg-white shadow-md rounded-lg fixed top-0 left-0 right-0 '>
      <nav className=' px-4 py-4  max-w-7xl mx-auto flex  justify-between  items-center '>
        <a href="/" className=' text-xl font-bold   text-blue-300'>My<span className=' text-orange-500'>Port</span></a>
        <ul className='md:flex gap-12  text-lg hidden'>
          {
            navitem.map(({path,Link})=><li className=' text-black 'key={path}>
              <NavLink className={({isActive,isPending})=>
                isActive
                ? "active"
                : "isPending"
                ? "pending"
                : ""
               } to={path}>{Link}</NavLink>
             
            </li>)
          }
        </ul>

        {/* menu icon */}
        <div className=' lg:flex gap-4 items-center hidden'>
          <a href="/" className=' hover:text-blue-300'><FaGitlab/></a>
          <a href="/" className=' hover:text-orange-500'><FaLinkedin/></a>
          <a href="/" className=' hover:text-blue-300'><TbBrandLeetcode/></a>
          <button className=' bg-blue-500 px-6 py-2 font-medium rounded-lg  text-white hover:text-orange-500 hover:bg-white transition-all duration-200  ease-in '>Login</button>
        </div>

        {/* mobile icon */}
        <div className=' md:hidden'>
        <button  onClick={toggleMenu} className=' cursor-pointer'>
          {

             isMenuOpen ?<FaXmark className=' w-5 h-5' />:<FaBars className=' w-5 h-5'/>
          }
        </button>
        </div>
      </nav>

      {/* menu item for mobile */}
      <div className={`md:hidden gap-12  text-lg block space-y-4 px-4 py-6 mt-14 ${isMenuOpen ? "fixed top-0 left-0  w-full transition-all ease-out duration-150":"hidden"}`}>
          {
            navitem.map(({path,Link})=><li className=' text-black 'key={path}>
                  <NavLink onClick={toggleMenu} to={path}>{Link}</NavLink>
            </li>)
          }
      </div>
   </header>
 
  )
}
