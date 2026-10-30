import { useState } from 'react'
import { useForm } from 'react-hook-form'
import logo from '../assets/logo.png'
import { BiSolidHide } from "react-icons/bi"
import { HiMiniEye } from "react-icons/hi2"
import { useDispatch } from 'react-redux'
import { data, useNavigate } from 'react-router-dom'
import { login } from '../redux/operations/authAPI'
import { toast } from 'react-toastify'

const Login = () => {
    const [hide, setHide] = useState(true);
    const { register, handleSubmit } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        dispatch(
            login({
                email: data.email,
                password: data.password,
            })
        )
        .unwrap()
        .then((result) => {
            toast.success("Logged in successfully");
            const role = result.user.role
            console.log(role)
            if(role === "applicant") {
                navigate("/applicant/dashboard");
            }
            if(role === "employer") {
                navigate("/employer/dashboard");
            }
        })
        .catch((error) => {
            toast.error(`Error while logging in:${error}`);
            console.log("Login failed", error);
        });
    };

  return (
    <div className='min-h-screen flex flex-col bg-[#EEDCC8]'>
        {/* Navigation Header */}
        <header className='bg-[#5D0703] shadow-md'>
            <div className='max-w-7xl mx-auto flex justify-between px-4 sm:px-10 py-4 items-center'>
                <a href='/' className='cursor-pointer group'>
                    <img 
                        src={logo} 
                        alt='HireLens logo'
                        className='w-28 sm:w-36 transition-transform duration-300 group-hover:scale-105' 
                    />
                </a>
                <div className='flex items-center gap-3 sm:gap-5'>
                    <p className='text-[#EEDCC8] font-bebas text-base sm:text-xl hidden xs:inline tracking-wide'> 
                        Don't have an account?
                    </p>
                    <a 
                        href='/signup' 
                        className='bg-[#EEDCC8] font-rose text-[#5D0703] font-semibold rounded-lg px-3 sm:px-4 py-1 sm:py-1.5 hover:bg-transparent border border-transparent hover:border-[#EEDCC8] hover:text-[#EEDCC8] cursor-pointer active:scale-95 transition-all duration-200'
                    >
                        Signup
                    </a>
                </div>
            </div>
        </header>

        {/* Login Form Body */}
        <main className='flex-1 flex flex-col justify-center py-10 sm:py-16 px-4 sm:px-6'>
            <div className='max-w-md w-full mx-auto space-y-6'>
                {/* Heading */}
                <div className='flex flex-col items-center text-center gap-2 animate-fade-in-down'>
                    <h1 className='text-4xl sm:text-5xl font-bebas tracking-wide text-[#5D0703]'>
                        WELCOME BACK
                    </h1>
                    <p className='text-lg sm:text-2xl font-rose text-[#5D0703]/90'>
                        Log in to continue to HireLens.
                    </p>
                </div>

                {/* Form Card */}
                <div className='bg-white/40 border-4 border-[#5D0703] rounded-2xl p-6 sm:p-10 shadow-xl backdrop-blur-sm animate-scale-in'>
                    <form onSubmit={handleSubmit(onSubmit)} className='text-[#5D0703] space-y-6'>
                        {/* Email Field */}
                        <div className='flex flex-col gap-2'>
                            <label className='text-lg sm:text-xl font-rose font-semibold' htmlFor='email'>
                                Email
                            </label>
                            <input 
                                {...register("email", { required: true })}
                                className='w-full outline-none border border-[#5D0703] rounded-lg py-2.5 px-3 bg-white/70 text-[#5D0703] focus:ring-2 focus:ring-[#5D0703]/30 focus:border-[#5D0703] transition-all duration-200 font-rose'
                                type='email' 
                                name='email' 
                                id='email'
                                required
                                placeholder='Enter your email address'
                            />
                        </div>
                    
                        {/* Password Field */}
                        <div className='flex flex-col gap-2'>
                            <label className='text-lg sm:text-xl font-rose font-semibold' htmlFor='password'>
                                Password
                            </label>
                            <div className='relative w-full'>
                                <input 
                                    {...register("password", { required: true })}
                                    type={hide ? 'password': 'text'} 
                                    name='password' 
                                    id='password'
                                    required
                                    placeholder='Enter your password'
                                    className='w-full outline-none border border-[#5D0703] rounded-lg py-2.5 pl-3 pr-10 bg-white/70 text-[#5D0703] focus:ring-2 focus:ring-[#5D0703]/30 focus:border-[#5D0703] transition-all duration-200 font-rose'
                                />
                                <button
                                    type='button'
                                    onClick={() => setHide(!hide)} 
                                    className='absolute right-3 top-1/2 -translate-y-1/2 text-[#5D0703] hover:opacity-75 cursor-pointer p-1 transition-opacity'
                                    aria-label={hide ? "Show password" : "Hide password"}
                                >
                                    {hide ? <HiMiniEye size={20}/> : <BiSolidHide size={20}/>}
                                </button>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className='pt-4'>
                            <button 
                                type='submit' 
                                className='w-full cursor-pointer bg-[#5D0703] text-[#EEDCC8] py-2.5 px-4 rounded-xl font-rose font-bold text-lg hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-md'
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div>
  )
}

export default Login