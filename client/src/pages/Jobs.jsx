import React from 'react'
import JobCard from '../components/cards/JobCard'
import { useSelector, useDispatch } from 'react-redux'
import { getAllJobs } from '../redux/operations/jobAPI'
import { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Jobs = () => {
    const {jobs, loading, error} = useSelector(state => state.job);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getAllJobs());
    }, [dispatch]);

    if(loading) {
        return <div>Loading jobs...</div>
    }

    if(error) {
        return <div>{error}</div>
    }
  return (
    <div className='bg-[#EEDCC8]'>
        <Navbar/>
        <JobCard jobs={jobs}/>
        <Footer/>
    </div>
  )
}

export default Jobs