import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import JobCard from '../cards/JobCard'

const ApplicantDashboard = () => {
    const { industry } = useParams();
    console.log(industry.toLowerCase().split("-").join(" "));
  return (
    <div>
      <Navbar/>
      <p>ApplicantDashboard</p>
      <JobCard/>
    </div>
  )
}

export default ApplicantDashboard