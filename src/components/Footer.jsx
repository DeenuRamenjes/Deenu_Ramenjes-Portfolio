import React from 'react'
import { FaLinkedin, FaGithub, FaInstagram  } from "react-icons/fa";
import RevealOnScroll from './RevealOnScroll';

const Footer = () => {
  return (
    <RevealOnScroll>
        <footer className="h-25 items-center justify-center bg-purple-500/10 border-t-1 border-t-purple-400 ">
            <div className='flex flex-2 space-x-8 items-center justify-center mt-5'>
                <a href="https://www.linkedin.com/in/d%E1%B4%87%E1%B4%87%C9%B4%E1%B4%9C-r%E1%B4%80%E1%B4%8D%E1%B4%87%C9%B4%E1%B4%8A%E1%B4%87s-m-s-b49902336/" className='flex gap-1'> <FaLinkedin className='mt-1' /> Linkedin</a>
                <a href="https://github.com/DeenuRamenjes" className='flex gap-1'> <FaGithub className='mt-1' /> Github</a>
                <a href="" className='flex gap-1'> <FaInstagram  className='mt-1 text-white'/> Instagram</a>
            </div>
            <div className='relative top-6 ml-auto items-center justify-center flex'>
                <p>&#169;Copyright. All rights reserved.</p>
            </div>
        </footer>
    </RevealOnScroll>
  )
}

export default Footer