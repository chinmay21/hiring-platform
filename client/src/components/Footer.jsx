import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='bg-[#09080E] text-[#FE6807] py-15'>
        {/* Container Div */}
        <div className='py-10 px-10 space-y-5'>
            <p className='font-rose text-3xl'>HireLens</p>
            <p className='font-bebas text-2xl'>Connecting the right people with the right opportunities.</p>
        </div>
        <div className='flex gap-x-30 px-20'>
            <div className='flex flex-col gap-5'>
                <div className='text-3xl font-bebas'>
                    Product
                    <div className='h-[0.9px] w-[50%] bg-[#FE6807]'></div>
                </div>
                <a 
                    className='text-xl font-rose cursor-pointer hover:translate-x-5 hover:scale-120 transition-all opacity-70
                    hover:opacity-100'
                >
                    Jobs
                </a>
                <a  
                    href='#how-it-works'
                    className='text-xl font-rose cursor-pointer hover:translate-x-5 hover:scale-120 transition-all opacity-70
                    hover:opacity-100'
                >
                    How It Works
                </a>
                <a 
                    className='text-xl font-rose cursor-pointer hover:translate-x-5 hover:scale-120 transition-all opacity-70
                    hover:opacity-100'
                >
                    For Recruiters
                </a>
                <a 
                    className='text-xl font-rose cursor-pointer hover:translate-x-5 hover:scale-120 transition-all opacity-70
                    hover:opacity-100'
                >
                    For Job Seekers
                </a>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='text-3xl font-bebas'>
                    Company
                    <div className='h-[0.9px] w-[50%] bg-[#FE6807]'></div>
                </div>
                <a 
                    className='text-xl font-rose cursor-pointer hover:translate-x-5 hover:scale-120 transition-all opacity-70
                    hover:opacity-100'
                >
                    About Us
                </a>
                <a 
                    className='text-xl font-rose cursor-pointer hover:translate-x-5 hover:scale-120 transition-all opacity-70
                    hover:opacity-100'
                >
                    Contact Us
                </a>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='text-3xl font-bebas'>
                    Account
                    <div className='h-[0.9px] w-[50%] bg-[#FE6807]'></div>
                </div>
                <a 
                    className='text-xl font-rose cursor-pointer hover:translate-x-5 hover:scale-120 transition-all opacity-70
                    hover:opacity-100'
                >
                    Login
                </a>
                <a 
                    className='text-xl font-rose cursor-pointer hover:translate-x-5 hover:scale-120 transition-all opacity-70
                    hover:opacity-100'
                >
                    Sign Up
                </a>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='text-3xl font-bebas'>
                    Legal
                    <div className='h-[0.9px] w-[50%] bg-[#FE6807]'></div>
                </div>
                <a 
                    className='text-xl font-rose cursor-pointer hover:translate-x-5 hover:scale-120 transition-all opacity-70
                    hover:opacity-100'
                >
                    Privacy Policy
                </a>
                <a 
                    className='text-xl font-rose cursor-pointer hover:translate-x-5 hover:scale-120 transition-all opacity-70
                    hover:opacity-100'
                >
                    Terms of Service
                </a>
            </div>
            <div className='flex flex-col gap-5'>
                <div className='text-3xl font-bebas'>
                    Follow Us
                    <div className='h-[0.9px] w-[50%] bg-[#FE6807]'></div>
                </div>
                <div className='flex gap-5'>
                    <a className='text-3xl cursor-pointer opacity-70 hover:opacity-100'>
                        <FaInstagram/>
                    </a>
                    <a className='text-3xl cursor-pointer opacity-70 hover:opacity-100'>
                        <FaXTwitter/>
                    </a>
                    <a className='text-3xl cursor-pointer opacity-70 hover:opacity-100'>
                        <FaLinkedin/>
                    </a>
                </div>
            </div>
        </div>
        <div className='h-[0.5px] w-[75%] mx-auto mt-10 bg-[#FE6807]'></div>
        <div className='text-[#FE6807] w-fit mx-auto py-5 font-rose text-lg'>© 2026 HireLens. All rights reserved.</div>
    </div>
  )
}

export default Footer