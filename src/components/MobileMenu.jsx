import React from 'react'

const MobileMenu = ({menuOpen,setMenuOpen}) => {
  return (
    <div className={`fixed top-0 left-0 w-full z-40 bg-[rgba(10,10,10,0.8)] flex flex-col items-center justify-center
     transition-all duration-300 ease-in-out
     ${menuOpen ? 'h-screen opacity-100 pointer-events-auto' : 'h-0 opacity-0 pointer-events-none'}`}>
        <button onClick={() => setMenuOpen(false)} className='absolute top-6 right-6 text-white focus:outline-none cursor-pointer' aria-label='Close Menu'>
        &#10006;
        </button>
            <a href="#home" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} onClick={() => setMenuOpen(false)} >Home</a>
            <a href="#about" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} onClick={() => setMenuOpen(false)} >About</a>
            <a href="#projects" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} onClick={() => setMenuOpen(false)} >Projects</a>
            <a href="#contact" className={`text-2xl font-semibold text-white my-4 transform transition-transform duration-300 ${menuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`} onClick={() => setMenuOpen(false)} >Contact us</a>
    </div>
  )
}

export default MobileMenu