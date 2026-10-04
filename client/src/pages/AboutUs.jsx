import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import 'animate.css'

const AboutUs = () => {
  return (
    <>
        <Navbar/>
        {/* Parent Div */}
        <div>
            <div className='bg-[#EEDCC8] text-[#5D0703] flex flex-col gap-5 py-20 items-center'>
                    <h1 className='font-bebas text-5xl'>About HireLens</h1>
                    <div className='font-rose text-3xl'>Connecting the right people with the right opportunities.</div>
                    <p className='font-rose text-2xl pl-5'>
                        HireLens is a hiring platform designed to make the recruitment process more organized and efficient for both job seekers
                        and recruiters. The platform brings job listings, candidate profiles, resumes, skills, and applications together in one
                        place, creating a structured experience for discovering opportunities and finding relevant talent
                    </p>
            </div>
            <div className='bg-[#5D0703] text-[#EEDCC8] flex flex-col gap-5 py-20 items-center'>
                    <h2 className='font-bebas text-5xl'>Why HireLens?</h2>
                    <div className='font-rose text-3xl'>Hiring shouldn't be about searching through endless resumes.</div>
                    <p className='font-rose text-2xl pl-5'>
                        Recruiters can receive hundreds or even thousands of applications for a single position, making it difficult and
                        time-consuming to review every candidate manually. HireLens is built around the idea of making this process more
                        focused. By combining structured candidate information with job requirements and intelligent candidate analysis, the
                        platform aims to help recruiters spend less time searching and more time evaluating relevant candidates. For job
                        seekers, HireLens provides a place to build their profile, showcase their skills and experience, discover
                        opportunities, and apply for positions that match their background.
                    </p>
            </div>
            <div className='bg-[#EEDCC8] text-[#5D0703] flex flex-col gap-5 py-20 items-center'>
                <h2 className='font-bebas text-5xl'>How HireLens Works</h2>
                <div className='flex px-10 mt-15'>
                    <div className='flex flex-col items-center'>
                        <div className='font-rose text-3xl'>For Job Seekers</div>
                        <p className='font-rose text-2xl pl-5'>
                            Create your profile, upload your resume, explore available jobs, and apply to opportunities that match your skills
                            and experience.
                        </p>
                    </div>

                    <div className='flex flex-col items-center'>
                        <div className='font-rose text-3xl'>For Recruiters</div>
                        <p className='font-rose text-2xl pl-5'>
                            Create job listings, define the skills and qualifications required for a position, and manage applications through an
                            organized hiring workflow.
                        </p>
                    </div>
                    <div className='flex flex-col items-center w-[85%]'>
                        <div className='font-rose text-3xl pl-5'>Intelligent Candidate Analysis</div>
                        <p className='font-rose text-2xl'>
                            The planned AI/ML component of HireLens analyzes candidate resumes, extracts relevant information, evaluates candidate
                            profiles, and helps rank candidates based on their suitability for a particular job role. Together, the web platform and
                            AI engine are designed to create a more structured path from job requirements to relevant candidates.
                        </p>
                    </div>
                </div>
            </div>
            <div className='bg-[#5D0703] text-[#EEDCC8] flex flex-col py-20 items-center'>
                <div>
                    <h2 className='font-bebas text-5xl w-fit mx-auto'>Meet the Developers</h2>
                    <p className='font-rose text-2xl pl-5 mt-10'>
                        HireLens is being built by two developers, each working on a different part of the platform.
                    </p>
                </div>

                {/* Dev Cards */}
                <div className='flex px-5 gap-5 mt-10'>
                    <div className='bg-[#EEDCC8] text-[#5D0703] py-5 px-10 rounded-xl'>
                        <h2 className='font-bebas text-5xl'>Chinmay Dhaundiyal</h2>
                        <p className='font-bebas text-3xl'>Full-Stack Web Developer</p>
                        <p className='font-rose text-xl'>
                            I'm Chinmay Dhaundiyal, a full-stack web developer focused on building modern web applications and continuously
                            improving my software development skills. My primary stack is MERN, and I also work with Next.js, TypeScript, Python,
                            PostgreSQL, and Prisma. I built the web application and core platform behind HireLens as I was working toward my first
                            opportunity in software development. Instead of simply building another small demonstration project, I wanted to create
                            something that would challenge me to work through a complete application—from designing the product and building the
                            backend to developing the frontend and connecting the different parts of the system. The project also gave me an
                            opportunity to return to the MERN stack and rebuild my confidence with technologies I had worked with previously,
                            while continuing to explore other areas of development such as Next.js and Python. For me, HireLens is more than just a
                            project. It's an opportunity to apply what I've learned, strengthen my problem-solving skills, and gain experience
                            building software that resembles a real-world application.
                        </p>
                        <p className='font-rose text-2xl'>My Role</p>
                        <ul className='list-disc font-rose text-xl'>
                            <li>Full-stack web application development</li>
                            <li>Frontend architecture and UI development</li>
                            <li>Backend and API development</li>
                            <li>Authentication and authorization</li>
                            <li>Database design and integration</li>
                            <li>Job and application management</li>
                            <li>Integration of the platform with the AI/ML system</li>
                        </ul>
                    </div>
                    <div className='bg-[#EEDCC8] text-[#5D0703] py-5 px-15 rounded-xl'>
                        <h2 className='font-bebas text-5xl'>Vivek Chauhan</h2>
                        <p className='font-bebas text-3xl'>Machine Learning Engineer</p>
                        <p className='font-rose text-xl'>
                            I'm Vivek Chauhan, a Machine Learning Engineer passionate about building practical AI solutions that
                            solve real-world problems. I work on the AI/ML engine behind HireLens, designed to make the recruitment
                            process faster and more efficient. The system is designed to analyze candidate resumes, extract relevant
                            information, evaluate candidate profiles, and rank candidates based on their suitability for a particular
                            job role. When an employer receives hundreds or even thousands of resumes, manually reviewing every
                            application can be time-consuming. The AI system aims to reduce that workload by identifying and ranking
                            the most relevant candidates, allowing recruiters to focus their attention on the strongest profiles instead
                            of manually reviewing every resume. My focus is on applying Machine Learning, Natural Language Processing,
                            and automation to build useful systems that can transform large amounts of data into meaningful insights.
                        </p>
                        <p className='font-rose text-2xl'>My Role</p>
                        <ul className='list-disc font-rose text-xl'>
                            <li>Machine Learning development</li>
                            <li>Natural Language Processing</li>
                            <li>Resume analysis and information extraction</li>
                            <li>Candidate profile evaluation</li>
                            <li>Candidate-job matching</li>
                            <li>Candidate ranking</li>
                            <li>AI/ML system development and integration</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='bg-[#EEDCC8] text-[#5D0703] py-10 px-10 space-y-10'>
                <h2 className='font-bebas text-5xl w-fit mx-auto'>Built by Two Developers</h2>
                <p className='list-disc font-rose text-2xl'>
                    HireLens brings together two different areas of software development: full-stack engineering and machine
                    learning. The web platform provides the infrastructure for candidates and recruiters to interact, while
                    the AI/ML component is designed to analyze candidate information and help identify relevant matches. Together,
                    these components form the foundation of HireLens.
                </p>
            </div>
            <div className='bg-[#5D0703] text-[#EEDCC8] py-10'>
                <h2 className='font-bebas text-5xl w-fit mx-auto'>Built to Learn. Built to Solve.</h2>
                <p className='font-rose text-2xl pl-5 mt-10'>
                    HireLens started as a practical project and has grown into an opportunity to explore how modern web development and
                    machine learning can work together to solve a real-world problem.
                </p>
                <p className='font-rose text-2xl pl-5 mt-10'>
                    The goal isn't simply to build another hiring platform. It's to understand how real applications are designed,
                    developed, integrated, and improved—and to keep building better software along the way.
                </p>
            </div>
            <div className='bg-[#EEDCC8] text-[#5D0703] py-10'>
                <h2 className='font-bebas text-5xl w-fit mx-auto'>Ready to Get Started?</h2>
                <p className='font-rose text-2xl pl-5 mt-10'>
                    Whether you're looking for your next opportunity or searching for your next hire, HireLens is here to help you take the
                    next step.
                </p>
                <div className='flex justify-evenly w-[50%] mx-auto mt-15'>
                    <button
                        className='text-[#EEDCC8] bg-[#5D0703] px-5 py-1 font-bebas text-2xl cursor-pointer rounded-xl hover:scale-110
                        transition-all'
                    >
                        Explore Jobs
                    </button>
                    <button
                        className='text-[#EEDCC8] bg-[#5D0703] px-5 py-1 font-bebas text-2xl cursor-pointer rounded-xl hover:scale-110
                        transition-all'
                    >
                        Get Started
                    </button>
                </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default AboutUs