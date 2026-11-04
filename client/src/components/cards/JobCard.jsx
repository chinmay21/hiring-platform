import React from 'react'

const JobCard = (props) => {
  return (
    <div>
      {
        props.jobs.map((job) => (
          <div className='bg-[#EEDCC8] space-y-15 py-10' key={job._id}>
              <div className='flex flex-col mx-auto w-screen font-rose bg-[#5D0703] text-[#EEDCC8]'>
                <p className='text-xl font-bold'>{job.jobTitle}</p>
                <p className='text-lg font-semibold'>{job.jobDescription}</p>
                <p>Salary: {job.salary} LPA</p>
                <div>
                  <p>Required Skills: {job.requiredSkills}</p>
                </div>
                <p>Opening: {job.openings}</p>
                <div>
                  <button className='font-bebas'>Apply</button>
                </div>
              </div>

          </div>
        ))
      }
    </div>
  )
}

export default JobCard