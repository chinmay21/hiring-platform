import React from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'

const ApplicantDashboard = () => {
    const { industry } = useParams();
    console.log(industry.toLowerCase().split("-").join(" "));
  return (
    <div>
      <Navbar/>
      <p>ApplicantDashboard</p>
    </div>
  )
}

export default ApplicantDashboard