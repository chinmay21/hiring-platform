import React from 'react'
import logo from '../assets/logo.png'

const Signup = () => {
  return (
    <>
      <div>
        <div className='bg-[#5D0703] flex justify-between px-10 py-5 items-center'>
          <img src={logo} width={150} height={150}/>
          <div className='flex px-10 justify-evenly items-center gap-5'>
            <p className='text-[#EEDCC8] font-bebas text-xl'>Already have an account?</p>
            <a href='/login' 
              className='bg-[#EEDCC8] font-rose text-[#5D0703] rounded-lg px-3 py-1 hover:bg-transparent cursor-pointer
              hover:text-[#EEDCC8] transition-all ease-in'>
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup