import React from 'react'
import logo from '../assets/logo.png'
import { BiSolidHide } from "react-icons/bi";
import { HiMiniEye } from "react-icons/hi2";
import { useState } from 'react';

const Signup = () => {
  const [hide, setHide] = useState(true);
  const [role, setRole] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const formdata = new FormData(e.target);
    formdata.append("role", role);
    console.log([...formdata.entries()]);

    e.target.reset();
    setRole("");
  }
  console.log(role);

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
        <div>
          <div>
            <h2>Create your account</h2>
            <p>Join HireLens and take the next step toward finding the right opportunity or the right talent.</p>
          </div>
          <div>
            <form onSubmit={onSubmitHandler}>
              <label htmlFor='name'>Full Name</label>
              <input
                type='text'
                name='name'
                id='name'
                required
                placeholder='Enter your full name'
              />
              <label htmlFor='email'>Email Address</label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter your email address'
              />

              <div>
                <p>Select a role</p>
                <div>
                  <button type='button' className='cursor-pointer' onClick={() => setRole("Applicant")}>Applicant</button>
                  <button type='button' className='cursor-pointer' onClick={() => setRole("Employer")}>Employer</button>
                </div>
              </div>
              
              <label htmlFor='password'>Password</label>
              <div className='relative'>
                <input
                  type={hide ? 'password': 'text'}
                  name='password'
                  id='password'
                  required
                  placeholder='Create a password'
                  className='px-3 py-1'
                />
                {hide ? (
                  <HiMiniEye onClick={() => setHide(false)} className='absolute top-2 left-45 cursor-pointer'/>
                ) : (
                  <BiSolidHide onClick={() => setHide(true)} className='absolute top-2 left-45 cursor-pointer'/>
                )}
              </div>

              <button type='submit' className='cursor-pointer'>Submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup