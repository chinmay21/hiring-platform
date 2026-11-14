import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getJobById } from '../redux/operations/jobAPI'
import { toast } from 'react-toastify'

const JobApplication = () => {
    const { jobId } = useParams();
    const dispatch = useDispatch();
    const { job, loading } = useSelector((state) => state.job);
    const user = JSON.parse(localStorage.getItem("user"));
    useEffect(() => {
        dispatch(getJobById(jobId))
        .unwrap()
        .catch((error) => {
            toast.error(`Unable to fetch Job: ${error}`);
            console.error("Request failed:", error);
        })
    }, [dispatch, jobId])
  return (
    <div>
        <Navbar/>
        <div>
            <div className='flex gap-5 mt-5 px-5 font-bebas text-lg'>
                <div className='flex gap-1'>
                    <p>JOBS</p>
                    <span>/</span>
                </div>
                <div className='flex gap-1'>
                    <p>{user.industry.toUpperCase()}</p>
                    <span>/</span>
                </div>
                <div className='flex gap-1'>
                    <p>Job Details</p>
                    <span>/</span>
                </div>
            </div>
            {/* Job card */}
            <div>
                <p>{job.jobTitle}</p>
                <div>
                    <p>{job.company}</p>
                    <p>{job.industry}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default JobApplication