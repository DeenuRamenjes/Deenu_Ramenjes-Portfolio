import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="h-25 items-center justify-center bg-blue-500/10 border border-blue-500 ">
        <div className='flex flex-2 space-x-8 items-center justify-center mt-5'>
            <a href="" className='flex gap-1'> <FaLinkedin className='mt-1' /> Linkdin</a>
            <a href="" className='flex gap-1'> <FaGithub className='mt-1' /> Github</a>
            <a href="" className='flex gap-1'> <FaInstagram  className='mt-1 text-white'/> Instagram</a>
        </div>
        <div className='relative top-6 ml-auto items-center justify-center flex'>
            <p>&#169;Copyright. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer