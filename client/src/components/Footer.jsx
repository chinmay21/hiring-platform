
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='bg-[#5D0703] text-[#EEDCC8] pt-16 pb-10 border-t border-[#EEDCC8]/15'>
      <div className='max-w-7xl mx-auto px-6 sm:px-10 lg:px-12'>
        {/* Brand Header */}
        <div className='pb-10 space-y-3'>
          <h2 className='font-rose text-3xl sm:text-4xl font-bold tracking-wide text-white'>HireLens</h2>
          <p className='font-bebas text-xl sm:text-2xl text-[#EEDCC8]/90 tracking-wider max-w-xl'>
            Connecting the right people with the right opportunities.
          </p>
        </div>

        {/* Links Grid */}
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-10 pt-4'>
          {/* Product */}
          <div className='flex flex-col gap-4 group'>
            <div className='text-2xl sm:text-3xl font-bebas tracking-wide'>
              Product
              <div className='h-[1.5px] w-12 bg-[#EEDCC8] mt-1 group-hover:w-20 transition-all duration-300'></div>
            </div>
            <a 
              href='/jobs'
              className='text-base sm:text-lg font-rose cursor-pointer hover:translate-x-2 transition-all duration-200 opacity-75 hover:opacity-100 hover:text-white w-fit'
            >
              Jobs
            </a>
            <a  
              href='#how-it-works'
              className='text-base sm:text-lg font-rose cursor-pointer hover:translate-x-2 transition-all duration-200 opacity-75 hover:opacity-100 hover:text-white w-fit'
            >
              How It Works
            </a>
            <a 
              href='#recruiters'
              className='text-base sm:text-lg font-rose cursor-pointer hover:translate-x-2 transition-all duration-200 opacity-75 hover:opacity-100 hover:text-white w-fit'
            >
              For Recruiters
            </a>
            <a 
              href='#job-seekers'
              className='text-base sm:text-lg font-rose cursor-pointer hover:translate-x-2 transition-all duration-200 opacity-75 hover:opacity-100 hover:text-white w-fit'
            >
              For Job Seekers
            </a>
          </div>

          {/* Company */}
          <div className='flex flex-col gap-4 group'>
            <div className='text-2xl sm:text-3xl font-bebas tracking-wide'>
              Company
              <div className='h-[1.5px] w-12 bg-[#EEDCC8] mt-1 group-hover:w-20 transition-all duration-300'></div>
            </div>
            <a 
              href='/aboutUs'
              className='text-base sm:text-lg font-rose cursor-pointer hover:translate-x-2 transition-all duration-200 opacity-75 hover:opacity-100 hover:text-white w-fit'
            >
              About Us
            </a>
            <a 
              href='/contactUs'
              className='text-base sm:text-lg font-rose cursor-pointer hover:translate-x-2 transition-all duration-200 opacity-75 hover:opacity-100 hover:text-white w-fit'
            >
              Contact Us
            </a>
          </div>

          {/* Account */}
          <div className='flex flex-col gap-4 group'>
            <div className='text-2xl sm:text-3xl font-bebas tracking-wide'>
              Account
              <div className='h-[1.5px] w-12 bg-[#EEDCC8] mt-1 group-hover:w-20 transition-all duration-300'></div>
            </div>
            <a 
              href='/login'
              className='text-base sm:text-lg font-rose cursor-pointer hover:translate-x-2 transition-all duration-200 opacity-75 hover:opacity-100 hover:text-white w-fit'
            >
              Login
            </a>
            <a 
              href='/signup'
              className='text-base sm:text-lg font-rose cursor-pointer hover:translate-x-2 transition-all duration-200 opacity-75 hover:opacity-100 hover:text-white w-fit'
            >
              Sign Up
            </a>
          </div>

          {/* Legal */}
          <div className='flex flex-col gap-4 group'>
            <div className='text-2xl sm:text-3xl font-bebas tracking-wide'>
              Legal
              <div className='h-[1.5px] w-12 bg-[#EEDCC8] mt-1 group-hover:w-20 transition-all duration-300'></div>
            </div>
            <span className='text-base sm:text-lg font-rose cursor-pointer hover:translate-x-2 transition-all duration-200 opacity-75 hover:opacity-100 hover:text-white w-fit'>
              Privacy Policy
            </span>
            <span className='text-base sm:text-lg font-rose cursor-pointer hover:translate-x-2 transition-all duration-200 opacity-75 hover:opacity-100 hover:text-white w-fit'>
              Terms of Service
            </span>
          </div>

          {/* Follow Us */}
          <div className='col-span-2 sm:col-span-1 flex flex-col gap-4 group'>
            <div className='text-2xl sm:text-3xl font-bebas tracking-wide'>
              Follow Us
              <div className='h-[1.5px] w-12 bg-[#EEDCC8] mt-1 group-hover:w-20 transition-all duration-300'></div>
            </div>
            <div className='flex gap-4 pt-1'>
              <a 
                href='#' 
                aria-label='Instagram'
                className='text-2xl cursor-pointer opacity-75 hover:opacity-100 hover:scale-125 hover:-translate-y-1 transition-all duration-300 p-2 rounded-full hover:bg-[#EEDCC8]/10'
              >
                <FaInstagram/>
              </a>
              <a 
                href='#' 
                aria-label='Twitter'
                className='text-2xl cursor-pointer opacity-75 hover:opacity-100 hover:scale-125 hover:-translate-y-1 transition-all duration-300 p-2 rounded-full hover:bg-[#EEDCC8]/10'
              >
                <FaXTwitter/>
              </a>
              <a 
                href='#' 
                aria-label='LinkedIn'
                className='text-2xl cursor-pointer opacity-75 hover:opacity-100 hover:scale-125 hover:-translate-y-1 transition-all duration-300 p-2 rounded-full hover:bg-[#EEDCC8]/10'
              >
                <FaLinkedin/>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className='h-[1px] w-full mt-12 mb-6 bg-[#EEDCC8]/20'></div>
        
        {/* Copyright */}
        <div className='text-[#EEDCC8]/80 text-center font-rose text-base sm:text-lg'>
          © 2026 HireLens. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer