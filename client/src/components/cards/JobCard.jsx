import React from 'react'
import { useNavigate } from 'react-router-dom'

const JobCard = (props) => {
  const navigate = useNavigate();
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pl-10 py-15'>
      {
        props.jobs.map((job) => (
          <div className='bg-[#EEDCC8] py-7 px-5 w-[90%]' key={job._id}>
              <div className='flex flex-col gap-5 text-center max-h-[95%] py-15 px-3 font-rose rounded-xl bg-[#5D0703] text-[#EEDCC8]'>
                <div className='text-xl font-bold'>{job.jobTitle}</div>
                <div className='text-lg font-semibold'>{job.jobDescription}</div>
                <div className='space-x-3'>
                  <span>
                    Salary:
                  </span>  
                  <span>{job.salary} LPA</span>
                </div>
                <div className='flex flex-wrap items-center justify-center gap-3 px-1'>
                  <span>Required Skills:</span>
                  {
                    job.requiredSkills.map((requiredSkill, index) => (
                      <span 
                        className='bg-[#EEDCC8] text-[#5D0703] px-5 py-1 rounded-full hover:bg-transparent hover:text-[#EEDCC8] transition-all
                        ease cursor-pointer' 
                        key={index}>
                        {requiredSkill}
                      </span>
                    ))
                  }
                </div>
                <div className='space-x-3'>
                  <span>
                    Opening: 
                  </span>
                  <span>{job.openings}</span>
                </div>
                <div>
                  <button 
                    className='font-bebas py-1 rounded-lg cursor-pointer text-xl text-[#5D0703] bg-[#EEDCC8] w-[30%] hover:opacity-90
                    hover:scale-107 transition-all ease-in'
                    onClick={() => navigate(`/applicant/${job.industry.toLowerCase().trim().replace(/\s+/g, "-")}/apply/${job._id}`)}
                  >
                    Apply
                  </button>
                </div>
              </div>
          </div>
        ))
      }
    </div>
  )
}

export default JobCard