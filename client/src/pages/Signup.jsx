import React from 'react'
import logo from '../assets/logo.png'
import { BiSolidHide } from "react-icons/bi";
import { HiMiniEye } from "react-icons/hi2";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/operations/authAPI'; 

const Signup = () => {

  const {register, handleSubmit, setValue, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const [role, setRole] = useState("");
  const [applicantToggle, setApplicantToggle] = useState(true);
  const [employerToggle, setEmployerToggle] = useState(false);

  const onSubmit = (data) => {
    dispatch(
      signup({
        name: data.name,
        email: data.email,
        role: data.role,
        industry: data.industry,
        password: data.password
      })
    )
    .unwrap()
    .then(() => {
      toast.success("Signed up successfully");
      navigate('/login');
    })
    .catch((error) => {
      toast.error(`Error while signing up:${error}`);
      console.log("Sign up failed:", error);

    })
    console.log("Form Data:", data)
  }

  const applicantClickHandler = () => {
    setRole("Applicant")
    setValue("role", "applicant", { shouldValidate: true })
    setApplicantToggle(true)
    setEmployerToggle(false)
  }

  const employerClickHandler = () => {
    setRole("Employer")
    setValue("role", "employer", { shouldValidate: true })
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
            <form onSubmit={handleSubmit(onSubmit)} className='text-[#5D0703] px-15 py-10 border-4 border-[#5D0703] rounded-xl'>
              <div className='flex flex-col gap-5 mb-5'>
                <label className='text-xl font-rose' htmlFor='name'>Full Name</label>
                <input
                  className='outline-none border rounded-lg border-[#5D0703] py-2 px-3'
                  {...register("name", { required: true })}
                  type='text'
                  id='name'
                  placeholder='Enter your full name'
                />
              </div>
              <div className='flex flex-col gap-5 mb-5'>
                <label className='text-xl font-rose' htmlFor='email'>Email Address</label>
                <input
                  className='outline-none border rounded-lg border-[#5D0703] py-2 px-3'
                  {...register("email", { required: true })}
                  type='email'
                  id='email'
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

              <div className='flex flex-col gap-5 mb-5'>
                <label className='text-xl font-rose' htmlFor='industry'>Industry</label>
                <select
                  {...register("industry", { required: true })}
                  id='industry'
                  placeholder='Select your industry'
                  className='outline-none border font-rose focus:ring-[#5D0703] rounded-lg border-[#5D0703] py-2 px-5 bg-[#EEDCC8]'
                >
                  <option value="">Select your industry</option>
                  <option value="Software Engineering">Software Engineering</option>
                  <option value="FinTech & Banking">FinTech & Banking</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="E-Commerce & Retail">E-Commerce & Retail</option>
                  <option value="Education & EdTech">Education & EdTech</option>
                  <option value="Marketing & Advertising">Marketing & Advertising</option>
                  <option value="Media & Entertainment">Media & Entertainment</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Consulting">Consulting</option>
                  <option value="Manufacturing">Manufacturing</option>
                  <option value="Automotive">Automotive</option>
                  <option value="Telecommunications">Telecommunications</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Travel & Hospitality">Travel & Hospitality</option>
                  <option value="Logistics & Transportation">Logistics & Transportation</option>
                </select>
              </div>
              
              <label className='text-xl font-rose' htmlFor='password'>Password</label>
              <div className='flex items-center'>
                <input
                  {...register("password", { required:true })}
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