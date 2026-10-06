import React from 'react'
import logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#5D0703] text-[#EEDCC8]'>
        {/* Container Div */}
        <div className='flex h-25 items-center justify-between px-5'>
            <a href='/'><img className='cursor-pointer' src={logo} alt='logo' loading='lazy' height={200} width={200}/></a>
            {/* Section Div */}
            <div className='font-bebas space-x-15 text-xl'>
                <a className='cursor-pointer hover:border-b-2' href='/'>Home</a>
                <a className='cursor-pointer hover:border-b-2' href='/jobs'>Jobs</a>
                <a className='cursor-pointer hover:border-b-2' href='/aboutUs'>About</a>
                <a className='cursor-pointer hover:border-b-2' href='/contactUs'>Contact</a>
            </div>
            {/* Button Div */}
            <div className='font-rose flex gap-x-15'>
                <button 
                    onClick={() => navigate("/signup")}
                    className='bg-[#EEDCC8] text-[#5D0703] rounded-lg px-3 py-1 hover:bg-transparent cursor-pointer
                hover:text-[#EEDCC8] transition-all ease-in'
                >
                    Signup
                </button>
                <button
                    onClick={() => navigate("/login")} 
                    className='bg-[#EEDCC8] text-[#5D0703] rounded-lg px-3 py-1 hover:bg-transparent cursor-pointer
                hover:text-[#EEDCC8] transition-all ease-in'
                >
                    Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar