import React from 'react'
import logo from '../assets/logo.png'
import { BiSolidHide } from "react-icons/bi";
import { HiMiniEye } from "react-icons/hi2";
import { useState } from 'react';

const Signup = () => {
  const [hide, setHide] = useState(true);
  const [role, setRole] = useState("");
  const [applicantToggle, setApplicantToggle] = useState(true);
  const [employerToggle, setEmployerToggle] = useState(false);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    formdata.append("role", role);
    console.log([...formdata.entries()]);

    e.target.reset();
    setRole("");
  }

  const applicantClickHandler = () => {
    setRole("Applicant")
    setApplicantToggle(true)
    setEmployerToggle(false)
  }

  const employerClickHandler = () => {
    setRole("Employer")
    setApplicantToggle(false)
    setEmployerToggle(true)
  }

  console.log(role);

  return (
    <>
      <div>
        <div className='bg-[#5D0703] flex justify-between px-10 py-5 items-center'>
          <a href='/' className='cursor-pointer'>
            <img src={logo} width={150} height={150}/>
          </a>
          <div className='flex px-10 justify-evenly items-center gap-5'>
            <p className='text-[#EEDCC8] font-bebas text-xl'>Already have an account?</p>
            <a href='/login' 
              className='bg-[#EEDCC8] font-rose text-[#5D0703] rounded-lg px-3 py-1 hover:bg-transparent cursor-pointer
              hover:text-[#EEDCC8] transition-all ease-in'>
              Login
            </a>
          </div>
        </div>
        <div className='bg-[#EEDCC8] text-[#5D0703]'>
          <div className='flex flex-col items-center py-10 gap-5'>
            <h2 className='text-5xl font-bebas'>Create your account</h2>
            <p className='text-2xl font-rose'>Join HireLens and take the next step toward finding the right opportunity or the right talent.</p>
          </div>
          <div className='px-10 py-10'>
            <form onSubmit={onSubmitHandler} className='text-[#5D0703] px-15 py-10 border-4 border-[#5D0703] rounded-xl'>
              <div className='flex flex-col gap-5 mb-5'>
                <label className='text-xl font-rose' htmlFor='name'>Full Name</label>
                <input
                  className='outline-none border rounded-lg border-[#5D0703] py-2 px-3'
                  type='text'
                  name='name'
                  id='name'
                  required
                  placeholder='Enter your full name'
                />
              </div>
              <div className='flex flex-col gap-5 mb-5'>
                <label className='text-xl font-rose' htmlFor='email'>Email Address</label>
                <input
                  className='outline-none border rounded-lg border-[#5D0703] py-2 px-3'
                  type='email'
                  name='email'
                  id='email'
                  required
                  placeholder='Enter your email address'
                />
              </div>
              

              <div className='flex flex-col gap-5 mb-5'>
                <p className='text-xl font-rose'>Select a role</p>
                <div className='flex gap-7 mt-3 bg-[#5D0703] w-fit px-5 py-3 rounded-full font-rose'>
                  <button 
                    type='button' 
                    className={`cursor-pointer transition-all ease-in duration-100 delay-150 
                    ${applicantToggle ? "bg-[#EEDCC8] text-[#5D0703] px-5 rounded-full py-2" : "text-[#EEDCC8] px-5 py-2"}`} 
                    onClick={applicantClickHandler}
                  >
                    Applicant
                  </button>
                  <button 
                    type='button' 
                    className={`cursor-pointer transition-all ease-in duration-100 delay-150
                    ${employerToggle ? "bg-[#EEDCC8] text-[#5D0703] px-5 rounded-full py-2" : "text-[#EEDCC8] px-5 py-2"}`} 
                    onClick={employerClickHandler}>Employer</button>
                </div>
              </div>
              
              <label className='text-xl font-rose' htmlFor='password'>Password</label>
              <div className='flex items-center'>
                <input
                  type={hide ? 'password': 'text'}
                  name='password'
                  id='password'
                  required
                  placeholder='Create a password'
                  className='outline-none border rounded-lg border-[#5D0703] py-2 px-3 mt-3 w-[35%]'
                />
                {hide ? (
                  <HiMiniEye size={20} onClick={() => setHide(false)} className='relative top-2 -left-10 cursor-pointer'/>
                ) : (
                  <BiSolidHide size={20} onClick={() => setHide(true)} className='relative top-2 -left-10 cursor-pointer'/>
                )}
              </div>

              <div className='w-fit mx-auto'>
                <button 
                  type='submit' 
                  className='cursor-pointer bg-[#5D0703] text-[#EEDCC8] mt-10 px-5 py-2 rounded-lg font-rose w-75 hover:opacity-80'
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup