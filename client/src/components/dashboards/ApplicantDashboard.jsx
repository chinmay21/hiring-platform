import React from 'react'
import { useParams } from 'react-router-dom'

const ApplicantDashboard = () => {
    const { industry } = useParams();
    console.log(industry.toLowerCase().split("-").join(" "));
  return (
    <div>ApplicantDashboard</div>
  )
}

export default ApplicantDashboard