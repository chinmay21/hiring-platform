import React from 'react'
import logo from '../assets/logo.png'
import { useState } from 'react';
import { BiSolidHide } from "react-icons/bi";
import { HiMiniEye } from "react-icons/hi2"; 

const Login = () => {
    const [hide, setHide] = useState(true);

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        console.log([...formData.entries()]);

        e.target.reset();
    }
  return (
    <>
        <div>
            <div className='bg-[#5D0703] flex justify-between px-10 py-5 items-center'>
                <a href='/' className='cursor-pointer'>
                <img src={logo} width={150} height={150}/>
                </a>
                <div className='flex px-10 justify-evenly items-center gap-5'>
                <p className='text-[#EEDCC8] font-bebas text-xl'> Don't have an account?</p>
                <a href='/signup' 
                    className='bg-[#EEDCC8] font-rose text-[#5D0703] rounded-lg px-3 py-1 hover:bg-transparent cursor-pointer
                    hover:text-[#EEDCC8] transition-all ease-in'>
                    Signup
                </a>
                </div>
            </div>
            <div className='bg-[#EEDCC8] text-[#5D0703]'>
                <div className='flex flex-col items-center py-10 gap-5'>
                    <h2 className='text-5xl font-bebas'>WELCOME BACK</h2>
                    <p className='text-2xl font-rose'>Log in to continue to HireLens.</p>
                </div>
                <div className='px-10 py-10'>
                    <form onSubmit={onSubmitHandler} className='text-[#5D0703] px-15 py-10 border-4 border-[#5D0703] rounded-xl'>
                        <div className='flex flex-col items-center w-full'>
                            <div className='flex flex-col gap-5 mb-5'>
                                <label className='text-xl font-rose' htmlFor='email'>Email</label>
                                <input 
                                    className='outline-none border rounded-lg border-[#5D0703] py-2 px-3 w-75'
                                    type='email' 
                                    name='email' 
                                    id='email'
                                    required
                                    placeholder='Enter your email address'
                                />
                            </div>
                        
                            <div className='flex flex-col gap-1 mb-5'>
                                <label className='text-xl font-rose' htmlFor='password'>Password</label>
                                <input 
                                    type={hide ? 'password': 'text'} 
                                    name='password' 
                                    id='password'
                                    required
                                    placeholder='Enter your password'
                                    className='outline-none border rounded-lg border-[#5D0703] py-2 px-3 mt-3 w-75'
                                />
                                {hide ? (
                                    <HiMiniEye size={20} onClick={() => setHide(false)} className='relative -top-8 -right-65 cursor-pointer'/>
                                ) : (
                                    <BiSolidHide size={20} onClick={() => setHide(true)} className='relative -top-8 -right-65 cursor-pointer'/>
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
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default Login