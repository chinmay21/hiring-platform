import React from 'react'
import Navbar from '../components/Navbar'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getJobById } from '../redux/operations/jobAPI'
import { toast } from 'react-toastify'
import { FaWallet } from "react-icons/fa";
import { BsFillPeopleFill } from "react-icons/bs";

const JobApplication = () => {
    const { jobId } = useParams();
    const dispatch = useDispatch();
    const { job, loading } = useSelector((state) => state.job);
    const user = JSON.parse(localStorage.getItem("user"));
    const [resume, setResume] = useState(null);
    const [error, setError] = useState("");
    const applicationRef = useRef(null);
    useEffect(() => {
        dispatch(getJobById(jobId))
        .unwrap()
        .catch((error) => {
            toast.error(`Unable to fetch Job: ${error}`);
            console.error("Request failed:", error);
        })
    }, [dispatch, jobId]);

    const handleApplyClick = () => {
        applicationRef.current?.scrollIntoView({
            behavior: "smooth",
            block: "center"
        });
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];

        if (!file) return;

        if (file.type !== "application/pdf") {
            setError("Please upload a PDF file.");
            setResume(null);
            event.target.value = "";
            return;
        }

        setError("");
        setResume(file);
    };
  return (
    <div className='bg-[#EEDCC8]'>
        <Navbar/>
        <div>
            <div className='flex gap-5 mt-5 px-5 font-bebas text-lg text-[#5D0703]'>
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
                {
                    loading ? (
                        <p>Loading job details....</p>
                    ) : job ? (
                        <div className='px-5 py-10'>
                            <div className='bg-[#5D0703] rounded-xl py-5 text-[#EEDCC8] px-5'>
                                <p className='font-rose text-xl py-5'>{job?.jobTitle}</p>
                                <div className='font-rose text-lg flex gap-3'>
                                    <p>{job?.company}</p>
                                    <span>.</span>
                                    <p className='uppercase'>{job?.industry}</p>
                                </div>
                                <div className='flex gap-3 mt-5'>
                                    <div className='flex items-center font-rose gap-1'>
                                        <FaWallet className='text-sm pb-0.5'/>
                                        <p>{job.salary}</p>
                                        
                                    </div>
                                    <div className='font-rose pb-0.5'>
                                        {
                                            job.openings >= 1 ? (
                                                <div className='flex items-center gap-1'>
                                                    <BsFillPeopleFill/>
                                                    <p>{job.openings} openings</p>
                                                </div>
                                                
                                            ) : 
                                            (
                                                <div>
                                                    <BsFillPeopleFill/>
                                                    <p>{job.openings} opening</p>
                                                </div>
                                                
                                            )
                                        }
                                    </div>
                                </div>
                                <button 
                                    onClick={handleApplyClick}
                                    className='w-full bg-[#EEDCC8] text-[#5D0703] rounded-xl py-1 font-rose mt-5
                                    cursor-pointer hover:opacity-90 transition-all ease-in'
                                >
                                    Apply Now
                                </button>
                            </div>

                            <div className='flex mt-15 px-15'>
                                <div>
                                    <div className='bg-[#f8eee3] font-rose px-5 py-5 rounded-xl min-h-62.5 w-[75%]'>
                                        <div className='text-[#5D0703] text-lg'>
                                            <p className='pb-3'>Job Description</p>
                                            <p>{job.jobDescription}</p>
                                        </div>
                                        <p className='pt-3 text-[#5D0703] text-lg'>Required Skills</p>
                                        <div className='text-[#EEDCC8] w-fit mt-5 flex gap-3'>
                                            {
                                                job.requiredSkills.map((skill, index) => (
                                                    <div key={index}>
                                                        <p className='bg-[#5D0703] rounded-xl px-3'>{skill}</p>
                                                    </div>
                                                ))
                                            }
                                        </div>
                                    </div>
                                </div>
                                <div
                                    ref={applicationRef}
                                    className='bg-[#f8eee3] font-rose px-5 py-5 rounded-xl w-[50%]'
                                >
                                    <p className='text-[#5D0703] text-lg'>
                                        Apply for this job
                                    </p>

                                    <p className='text-[#5D0703] text-md pt-5'>
                                        Upload your resume to complete your application
                                    </p>

                                    <label
                                        htmlFor="resume"
                                        className='mt-5 flex flex-col items-center justify-center
                                        border-2 border-dashed border-[#5D0703] rounded-xl
                                        p-8 cursor-pointer hover:bg-[#5D0703]/10 transition-all'
                                    >
                                        <p className='text-[#5D0703] font-semibold'>
                                            Click to upload your resume
                                        </p>

                                        <p className='text-[#5D0703]/70 text-sm mt-2'>
                                            PDF files only
                                        </p>

                                        <input
                                            type="file"
                                            id="resume"
                                            accept=".pdf,application/pdf"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>

                                    {resume && (
                                        <div className='flex justify-between items-center mt-4'>
                                            <p className='text-[#5D0703] text-sm'>
                                                {resume.name}
                                            </p>

                                            <button
                                                type="button"
                                                onClick={() => {
                                                    setResume(null);
                                                    document.getElementById("resume").value = "";
                                                }}
                                                className='text-red-700 cursor-pointer'
                                            >
                                                Remove
                                            </button>
                                        </div>
                                    )}

                                    {error && (
                                        <p className='text-red-700 text-sm mt-3'>
                                            {error}
                                        </p>
                                    )}

                                    <button
                                        type="button"
                                        disabled={!resume}
                                        className='w-full bg-[#5D0703] text-[#EEDCC8] rounded-xl
                                        py-2 mt-5 cursor-pointer disabled:opacity-50'
                                    >
                                        Submit Application
                                    </button>
                                </div>
                            </div>
                        </div>
                    ) : (
                         <p>Job not found.</p>
                    )
                }
            </div>
        </div>
    </div>
  )
}

export default JobApplication