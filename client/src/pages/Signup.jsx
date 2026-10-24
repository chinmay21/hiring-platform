import { useState } from 'react'
import logo from '../assets/logo.png'
import { BiSolidHide } from "react-icons/bi"
import { HiMiniEye } from "react-icons/hi2"
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { signup } from '../redux/operations/authAPI'

const Signup = () => {
  const { register, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hide, setHide] = useState(true);
  const [role, setRole] = useState("Applicant");
  const [applicantToggle, setApplicantToggle] = useState(true);
  const [employerToggle, setEmployerToggle] = useState(false);

  console.log("Current role:", role);

  const onSubmit = (data) => {
    dispatch(
      signup({
        name: data.name,
        email: data.email,
        role: data.role || (applicantToggle ? "applicant" : "employer"),
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
    });
  };

  const applicantClickHandler = () => {
    setRole("Applicant");
    setValue("role", "applicant", { shouldValidate: true });
    setApplicantToggle(true);
    setEmployerToggle(false);
  };

  const employerClickHandler = () => {
    setRole("Employer");
    setValue("role", "employer", { shouldValidate: true });
    setApplicantToggle(false);
    setEmployerToggle(true);
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
              Already have an account?
            </p>
            <a 
              href='/login' 
              className='bg-[#EEDCC8] font-rose text-[#5D0703] font-semibold rounded-lg px-3 sm:px-4 py-1 sm:py-1.5 hover:bg-transparent border border-transparent hover:border-[#EEDCC8] hover:text-[#EEDCC8] cursor-pointer active:scale-95 transition-all duration-200'
            >
              Login
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className='flex-1 flex flex-col justify-center py-10 sm:py-16 px-4 sm:px-6'>
        <div className='max-w-xl w-full mx-auto space-y-6'>
          {/* Header Texts */}
          <div className='flex flex-col items-center text-center gap-2 animate-fade-in-down'>
            <h1 className='text-4xl sm:text-5xl font-bebas tracking-wide text-[#5D0703]'>
              Create your account
            </h1>
            <p className='text-base sm:text-xl font-rose text-[#5D0703]/90 max-w-md'>
              Join HireLens and take the next step toward finding the right opportunity or the right talent.
            </p>
          </div>

          {/* Form Card */}
          <div className='bg-white/40 border-4 border-[#5D0703] rounded-2xl p-6 sm:p-10 shadow-xl backdrop-blur-sm animate-scale-in'>
            <form onSubmit={handleSubmit(onSubmit)} className='text-[#5D0703] space-y-5'>
              {/* Full Name */}
              <div className='flex flex-col gap-2'>
                <label className='text-lg sm:text-xl font-rose font-semibold' htmlFor='name'>
                  Full Name
                </label>
                <input
                  className='w-full outline-none border border-[#5D0703] rounded-lg py-2.5 px-3 bg-white/70 text-[#5D0703] focus:ring-2 focus:ring-[#5D0703]/30 focus:border-[#5D0703] transition-all duration-200 font-rose'
                  {...register("name", { required: true })}
                  type='text'
                  id='name'
                  placeholder='Enter your full name'
                />
              </div>

              {/* Email Address */}
              <div className='flex flex-col gap-2'>
                <label className='text-lg sm:text-xl font-rose font-semibold' htmlFor='email'>
                  Email Address
                </label>
                <input
                  className='w-full outline-none border border-[#5D0703] rounded-lg py-2.5 px-3 bg-white/70 text-[#5D0703] focus:ring-2 focus:ring-[#5D0703]/30 focus:border-[#5D0703] transition-all duration-200 font-rose'
                  {...register("email", { required: true })}
                  type='email'
                  id='email'
                  placeholder='Enter your email address'
                />
              </div>

              {/* Role Selection */}
              <div className='flex flex-col gap-2'>
                <p className='text-lg sm:text-xl font-rose font-semibold'>Select a role</p>
                <div className='flex gap-2 sm:gap-4 bg-[#5D0703] w-full sm:w-fit p-1.5 rounded-full font-rose shadow-inner'>
                  <button 
                    type='button' 
                    className={`flex-1 sm:flex-initial cursor-pointer font-semibold rounded-full px-5 py-2 transition-all duration-300 text-sm sm:text-base ${
                      applicantToggle 
                        ? "bg-[#EEDCC8] text-[#5D0703] shadow-md scale-100" 
                        : "text-[#EEDCC8] hover:text-white"
                    }`} 
                    onClick={applicantClickHandler}
                  >
                    Applicant
                  </button>
                  <button 
                    type='button' 
                    className={`flex-1 sm:flex-initial cursor-pointer font-semibold rounded-full px-5 py-2 transition-all duration-300 text-sm sm:text-base ${
                      employerToggle 
                        ? "bg-[#EEDCC8] text-[#5D0703] shadow-md scale-100" 
                        : "text-[#EEDCC8] hover:text-white"
                    }`} 
                    onClick={employerClickHandler}
                  >
                    Employer
                  </button>
                </div>
              </div>

              {/* Industry Select */}
              <div className='flex flex-col gap-2'>
                <label className='text-lg sm:text-xl font-rose font-semibold' htmlFor='industry'>
                  Industry
                </label>
                <select
                  {...register("industry", { required: true })}
                  id='industry'
                  className='w-full outline-none border border-[#5D0703] rounded-lg py-2.5 px-3 bg-white/70 text-[#5D0703] font-rose focus:ring-2 focus:ring-[#5D0703]/30 focus:border-[#5D0703] transition-all duration-200'
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
              
              {/* Password */}
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
                    placeholder='Create a password'
                    className='w-full outline-none border border-[#5D0703] rounded-lg py-2.5 pl-3 pr-10 bg-white/70 text-[#5D0703] font-rose focus:ring-2 focus:ring-[#5D0703]/30 focus:border-[#5D0703] transition-all duration-200'
                  />
                  <button
                    type='button'
                    onClick={() => setHide(!hide)}
                    className='absolute right-3 top-1/2 -translate-y-1/2 text-[#5D0703] hover:opacity-75 cursor-pointer p-1 transition-opacity'
                    aria-label={hide ? "Show password" : "Hide password"}
                  >
                    {hide ? <HiMiniEye size={20} /> : <BiSolidHide size={20} />}
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div className='pt-4 flex justify-center'>
                <button 
                  type='submit' 
                  className='w-full sm:w-72 cursor-pointer bg-[#5D0703] text-[#EEDCC8] py-2.5 px-4 rounded-xl font-rose font-bold text-lg hover:opacity-90 hover:scale-[1.02] active:scale-95 transition-all duration-200 shadow-md'
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

export default Signup