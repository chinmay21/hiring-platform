import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <Navbar/>
      {/* Parent Div */}
      <div>
        {/* Hero Section */}
        <div className='min-h-150 py-15 bg-[#EEDCC8] text-[#5D0703]'>
          <div className='px-15 space-y-10'>
          <p className='font-rose font-semibold text-3xl w-fit mx-auto'>SMARTER HIRING. BETTER MATCHES.</p>
          <p className='font-rose font-bold text-5xl w-fit mx-auto'>Find the right talent. Without the endless search.</p>
          <p className='font-rose font-bold text-2xl mt-25'>
            HireLens helps recruiters discover relevant candidates by analyzing resumes and matching their skills, experience,
            and qualifications with job requirements.
          </p>
          </div>
          {/* Button Div */}
          <div className='bg-[#5D0703] font-bebas mt-15 h-20 flex items-center justify-evenly'>
            <button
            className='flex items-center text-lg gap-1 bg-[#EEDCC8] text-[#5D0703] px-5 py-1 rounded-xl cursor-pointer hover:scale-150 group
            hover:bg-transparent hover:text-[#EEDCC8] transition-all ease-in'
            >
              Find Talent
              <FaArrowRight className='group-hover:rotate-270 transition-all ease duration-300 pb-1'/> 
            </button>
            <button 
            className='flex items-center text-lg gap-1 bg-[#EEDCC8] text-[#5D0703] px-5 py-1 rounded-xl cursor-pointer hover:scale-150 group
            hover:bg-transparent hover:text-[#EEDCC8] transition-all ease-in'>
              Find Jobs
              <FaArrowRight className='group-hover:rotate-270 transition-all ease duration-300 pb-1'/> 
            </button>
          </div>
        </div>
        {/* Product Introduction Section */}
        <div className='min-h-150 py-25 px-15 space-y-30 bg-[#5D0703] text-[#EEDCC8]'>
          <p className='font-bebas font-bold text-5xl w-fit mx-auto'>Hiring shouldn't feel like searching for a needle in a haystack.</p>
          <p className='font-rose font-bold text-3xl'>
            Recruiters shouldn't have to spend hours going through resumes one by one. HireLens brings candidate information and job
            requirements together to help you identify relevant matches faster.
          </p>
        </div>
        {/* How It Works Section */}
        <div id='how-it-works' className='min-h-150 py-15 bg-[#EEDCC8] text-[#5D0703]'>
          <div>
            <p className='font-rose font-bold text-5xl w-fit mx-auto'>How HireLens Works</p>
            <p className='font-rose font-bold text-3xl mt-15 w-fit mx-auto'>From resume to relevant opportunity, HireLens keeps the process simple.</p>

            <ul className='list-disc px-10 font-rose text-2xl space-y-5 py-15 font-semibold'>
              <li className='space-y-5'>
                <p className='text-3xl'>Upload Your Resume</p>
                <p>Candidates can upload their resume and build a profile containing their skills, experience, and qualifications.</p>
              </li>
              <div className='bg-[#5D0703] h-1'></div>
              <li className='space-y-5'>
                <p className='text-3xl'>Define Your Requirements</p>
                <p>Recruiters create job listings and specify the skills, experience, and qualifications they're looking for.</p>
              </li>
              <div className='bg-[#5D0703] h-1'></div>
              <li className='space-y-5'>
                <p className='text-3xl'>Discover Relevant Matches</p>
                <p>HireLens analyzes candidate information against job requirements to help recruiters find relevant candidates.</p>
              </li>
              <div className='bg-[#5D0703] h-1'></div>
            </ul>
          </div>
        </div>
        {/* For Job Seekers / Recruiters Section */}
        <div className='py-15 bg-[#5D0703] text-[#EEDCC8]'>
          <div className='px-15 space-y-10'>
            <p className='font-rose font-bold text-5xl w-fit mx-auto'>Built for both sides of the hiring process.</p>
            <p className='font-rose font-bold text-3xl mt-15 w-fit mx-auto'>
              Whether you're looking for your next opportunity or your next hire, HireLens gives you the tools to make the process more
              organized.
            </p>
          </div>
          {/* Cards Div */}
          <div className='flex px-10 gap-10 text-[#5D0703] mt-20'>
            <div className='flex flex-col bg-[#EEDCC8] items-center rounded-2xl px-10 py-10 space-y-10'>
              <p className='font-rose font-bold text-3xl'>Find opportunities that fit you.</p>
              <p className='font-rose font-bold text-2xl'>
                Create your profile, upload your resume, explore available jobs, and apply to opportunities that match your skills and
                experience.
              </p>
              <button
              className='flex items-center font-bebas text-lg gap-1 bg-[#5D0703] text-[#EEDCC8] px-5 py-1 rounded-xl cursor-pointer hover:scale-150 group
              hover:bg-transparent hover:text-[#5D0703] transition-all ease-in'
              >
                Explore Jobs
                <FaArrowRight className='group-hover:rotate-270 transition-all ease duration-300 pb-1'/> 
              </button>
            </div>
            <div className='flex flex-col bg-[#EEDCC8] items-center rounded-2xl px-10 py-10 space-y-10'>
              <p className='font-rose font-bold text-3xl'>Find candidates that fit your requirements.</p>
              <p className='font-rose font-bold text-2xl'>
                Create job listings, define what you're looking for, and discover candidates based on the skills and experience in their resumes.
              </p>
              <button
              className='flex items-center font-bebas text-lg gap-1 bg-[#5D0703] text-[#EEDCC8] px-5 py-1 rounded-xl cursor-pointer hover:scale-150 group
              hover:bg-transparent hover:text-[#5D0703] transition-all ease-in'
              >
                Find Candidates
                <FaArrowRight className='group-hover:rotate-270 transition-all ease duration-300 pb-1'/> 
              </button>
            </div>
          </div>
        </div>
        {/* Why HireLens Sections */}
        <div className='min-h-150 py-15 bg-[#EEDCC8] text-[#5D0703]'>
          <p className='font-rose font-bold text-5xl w-fit mx-auto'>Less searching. More hiring.</p>
          <p className='font-rose font-bold text-3xl mt-15 pl-20'>
            HireLens is designed to bring the most relevant candidate information closer to the recruiter, making it easier to review
            applications and focus on the people who fit the role.
          </p>
          <div className='grid grid-cols-4 px-10 mt-20 gap-5'>
            <div 
              className='bg-[#5D0703] text-[#EEDCC8] px-5 py-7 space-y-5 rounded-lg hover:shadow-[#5D0703]
              hover:shadow-lg hover:scale-105 group transition-all ease duration-300'
            >
              <p className='font-bebas text-3xl'>
                Resume-Based Profiles
                <span className='bg-[#EEDCC8] scale-x-0 h-1 w-[75%] block group-hover:scale-x-100 origin-left transition-all ease-in duration-150'></span>
              </p>
              <p className='font-rose text-xl'>Keep candidate information organized around the experience, skills, and qualifications provided in their resumes.</p>
            </div>
            <div
              className='bg-[#5D0703] text-[#EEDCC8] px-5 py-7 space-y-5 rounded-lg hover:shadow-[#5D0703]
              hover:shadow-lg hover:scale-105 group transition-all ease duration-300'
            >
              <p className='font-bebas text-3xl'>
                Requirement-Focused
                <span className='bg-[#EEDCC8] scale-x-0 h-1 w-[75%] block group-hover:scale-x-100 origin-left transition-all ease-in duration-150'></span>
              </p>
              <p className='font-rose text-xl'>Define the skills and qualifications that matter for each job you're hiring for.</p>
            </div>
            <div
              className='bg-[#5D0703] text-[#EEDCC8] px-5 py-7 space-y-5 rounded-lg hover:shadow-[#5D0703]
              hover:shadow-lg hover:scale-105 group transition-all ease duration-300'
            >
              <p className='font-bebas text-3xl'>
                Organized Applications
                <span className='bg-[#EEDCC8] scale-x-0 h-1 w-[75%] block group-hover:scale-x-100 origin-left transition-all ease-in duration-150'></span>
              </p>
              <p className='font-rose text-xl'>Keep jobs, applications, and candidate information structured in one place.</p>
            </div>
            <div
              className='bg-[#5D0703] text-[#EEDCC8] px-5 py-7 space-y-5 rounded-lg hover:shadow-[#5D0703]
              hover:shadow-lg hover:scale-105 group transition-all ease duration-300'
            >
              <p className='font-bebas text-3xl'>
                Relevant Matches
                <span className='bg-[#EEDCC8] scale-x-0 h-1 w-[75%] block group-hover:scale-x-100 origin-left transition-all ease-in duration-150'></span>
              </p>
              <p className='font-rose text-xl'>Make it easier to identify candidates whose profiles align with your job requirements.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home