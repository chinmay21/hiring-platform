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
            <div>
                <p>JOBS</p>
                <span>/</span>
                <p>{job?.industry}</p>
                <span>/</span>
                <p>Job Details</p>
                <span>/</span>
            </div>
        </div>
    </div>
  )
}

export default JobApplication