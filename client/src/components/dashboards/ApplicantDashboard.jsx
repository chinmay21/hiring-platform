import { useParams } from 'react-router-dom'
import Navbar from '../Navbar'
import JobCard from '../cards/JobCard'
import { useDispatch, useSelector } from 'react-redux'
import { getFilteredJobs } from '../../redux/operations/jobAPI'
import { useEffect} from 'react'
import { toast } from 'react-toastify'

const ApplicantDashboard = () => {
    const { industry } = useParams();
    console.log(industry.toLowerCase().split("-").join(" "));
    const dispatch = useDispatch();
    const { filteredJobs, loading } = useSelector((state) => state.job)

    useEffect(() => {
      dispatch(getFilteredJobs())
      .unwrap()
      .catch((error) => {
        toast.error(`Unable to fetch preferred jobs: ${error}`);
        console.error("Request failed:", error)
      })
    }, [dispatch])
  return (
    <div>
      <Navbar/>
      <div className='bg-[#EEDCC8] space-y-10'>
        {/* ApplicantDashboard */}
        <div>
          {
            loading ? (
              <p>Loading preferred jobs...</p>
            ) : filteredJobs.length > 0 ? (
              <JobCard jobs={filteredJobs}/>
            ) : (
              <p>No jobs available for your preferred industry</p>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default ApplicantDashboard