import React from 'react'
import logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='bg-[#09080E] text-[#FE6807]'>
        {/* Container Div */}
        <div className='flex h-25 items-center justify-between px-5'>
            <img src={logo} alt='logo' loading='lazy' height={150} width={150}/>
            {/* Section Div */}
            <div className='font-bebas space-x-15 text-xl'>
                <a className='cursor-pointer hover:border-b-2' href='/'>Home</a>
                <a className='cursor-pointer hover:border-b-2' href='/jobs'>Jobs</a>
                <a className='cursor-pointer hover:border-b-2' href='/aboutUs'>About</a>
                <a className='cursor-pointer hover:border-b-2' href='/contactUs'>Contact</a>
            </div>
            {/* Button Div */}
            <div className='font-rose flex gap-x-15'>
                <button className='bg-[#FE6807] text-[#09080E] rounded-lg px-3 py-1 hover:bg-transparent cursor-pointer
                 hover:text-[#FE6807] transition-all ease-in'
                >
                    Signup
                </button>
                <button className='bg-[#FE6807] text-[#09080E] rounded-lg px-3 py-1 hover:bg-transparent cursor-pointer
                 hover:text-[#FE6807] transition-all ease-in'
                >
                    Login
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar