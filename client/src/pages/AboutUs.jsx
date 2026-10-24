
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollAnimation'

const AboutUs = () => {
  const navigate = useNavigate();
  const [whyRef, whyInView] = useScrollReveal();
  const [howRef, howInView] = useScrollReveal();
  const [devRef, devInView] = useScrollReveal();
  const [learnRef, learnInView] = useScrollReveal();

  return (
    <div className='min-h-screen flex flex-col bg-[#EEDCC8]'>
      <Navbar/>
      
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='bg-[#EEDCC8] text-[#5D0703] py-16 sm:py-24 px-4 sm:px-8 md:px-12'>
          <div className='max-w-5xl mx-auto flex flex-col gap-6 items-center text-center'>
            <h1 className='font-bebas text-4xl sm:text-6xl md:text-7xl tracking-wide animate-fade-in-down'>
              About HireLens
            </h1>
            <div className='font-rose text-2xl sm:text-3xl font-semibold animate-fade-in-up'>
              Connecting the right people with the right opportunities.
            </div>
            <p className='font-rose text-base sm:text-xl md:text-2xl max-w-4xl text-left sm:text-center leading-relaxed opacity-90 animate-fade-in-up stagger-2'>
              HireLens is a hiring platform designed to make the recruitment process more organized and efficient for both job seekers
              and recruiters. The platform brings job listings, candidate profiles, resumes, skills, and applications together in one
              place, creating a structured experience for discovering opportunities and finding relevant talent.
            </p>
          </div>
        </section>

        {/* Why HireLens */}
        <section 
          ref={whyRef}
          className={`bg-[#5D0703] text-[#EEDCC8] py-16 sm:py-24 px-4 sm:px-8 md:px-12 transition-all duration-1000 ${
            whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className='max-w-5xl mx-auto flex flex-col gap-6 items-center text-center'>
            <h2 className='font-bebas text-4xl sm:text-6xl tracking-wide'>Why HireLens?</h2>
            <div className='font-rose text-2xl sm:text-3xl font-semibold max-w-3xl'>
              Hiring shouldn't be about searching through endless resumes.
            </div>
            <p className='font-rose text-base sm:text-xl md:text-2xl text-left leading-relaxed text-[#EEDCC8]/90 max-w-4xl'>
              Recruiters can receive hundreds or even thousands of applications for a single position, making it difficult and
              time-consuming to review every candidate manually. HireLens is built around the idea of making this process more
              focused. By combining structured candidate information with job requirements and intelligent candidate analysis, the
              platform aims to help recruiters spend less time searching and more time evaluating relevant candidates. For job
              seekers, HireLens provides a place to build their profile, showcase their skills and experience, discover
              opportunities, and apply for positions that match their background.
            </p>
          </div>
        </section>

        {/* How HireLens Works (3 Cards) */}
        <section 
          ref={howRef}
          className={`bg-[#EEDCC8] text-[#5D0703] py-16 sm:py-24 px-4 sm:px-8 md:px-12 transition-all duration-1000 ${
            howInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className='max-w-6xl mx-auto'>
            <h2 className='font-bebas text-4xl sm:text-6xl tracking-wide text-center mb-12 sm:mb-16'>
              How HireLens Works
            </h2>
            
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {/* For Job Seekers */}
              <div className='bg-white/40 p-6 sm:p-8 rounded-2xl border border-[#5D0703]/20 flex flex-col items-center text-center space-y-4 interactive-card hover:bg-white/70 hover:shadow-lg'>
                <div className='font-rose text-2xl sm:text-3xl font-bold'>For Job Seekers</div>
                <div className='w-12 h-1 bg-[#5D0703]/40 rounded-full'></div>
                <p className='font-rose text-base sm:text-xl leading-relaxed opacity-90'>
                  Create your profile, upload your resume, explore available jobs, and apply to opportunities that match your skills
                  and experience.
                </p>
              </div>

              {/* For Recruiters */}
              <div className='bg-white/40 p-6 sm:p-8 rounded-2xl border border-[#5D0703]/20 flex flex-col items-center text-center space-y-4 interactive-card hover:bg-white/70 hover:shadow-lg'>
                <div className='font-rose text-2xl sm:text-3xl font-bold'>For Recruiters</div>
                <div className='w-12 h-1 bg-[#5D0703]/40 rounded-full'></div>
                <p className='font-rose text-base sm:text-xl leading-relaxed opacity-90'>
                  Create job listings, define the skills and qualifications required for a position, and manage applications through an
                  organized hiring workflow.
                </p>
              </div>

              {/* Intelligent Candidate Analysis */}
              <div className='bg-white/40 p-6 sm:p-8 rounded-2xl border border-[#5D0703]/20 flex flex-col items-center text-center space-y-4 interactive-card hover:bg-white/70 hover:shadow-lg'>
                <div className='font-rose text-2xl sm:text-3xl font-bold'>Intelligent Analysis</div>
                <div className='w-12 h-1 bg-[#5D0703]/40 rounded-full'></div>
                <p className='font-rose text-base sm:text-xl leading-relaxed opacity-90'>
                  The planned AI/ML component of HireLens analyzes candidate resumes, extracts relevant information, evaluates candidate
                  profiles, and helps rank candidates based on their suitability for a particular job role.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Meet the Developers */}
        <section 
          ref={devRef}
          className={`bg-[#5D0703] text-[#EEDCC8] py-16 sm:py-24 px-4 sm:px-8 md:px-12 transition-all duration-1000 ${
            devInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className='max-w-7xl mx-auto'>
            <div className='text-center space-y-3 mb-12 sm:mb-16'>
              <h2 className='font-bebas text-4xl sm:text-6xl tracking-wide'>Meet the Developers</h2>
              <p className='font-rose text-lg sm:text-2xl text-[#EEDCC8]/90 max-w-2xl mx-auto'>
                HireLens is being built by two developers, each working on a different part of the platform.
              </p>
            </div>

            {/* Dev Cards Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5D0703]'>
              {/* Chinmay Dhaundiyal */}
              <div className='bg-[#EEDCC8] rounded-2xl p-6 sm:p-10 space-y-6 interactive-card hover:shadow-2xl hover:shadow-black/40 border border-[#EEDCC8]/60 flex flex-col justify-between'>
                <div className='space-y-4'>
                  <div className='border-b border-[#5D0703]/20 pb-4'>
                    <h3 className='font-bebas text-3xl sm:text-5xl leading-tight'>Chinmay Dhaundiyal</h3>
                    <p className='font-bebas text-xl sm:text-2xl text-[#5D0703]/80'>Full-Stack Web Developer</p>
                  </div>
                  <p className='font-rose text-sm sm:text-base leading-relaxed opacity-90'>
                    I'm Chinmay Dhaundiyal, a full-stack web developer focused on building modern web applications and continuously
                    improving my software development skills. My primary stack is MERN, and I also work with Next.js, TypeScript, Python,
                    PostgreSQL, and Prisma. I built the web application and core platform behind HireLens as I was working toward my first
                    opportunity in software development. Instead of simply building another small demonstration project, I wanted to create
                    something that would challenge me to work through a complete application—from designing the product and building the
                    backend to developing the frontend and connecting the different parts of the system.
                  </p>
                </div>

                <div className='space-y-3 pt-4 border-t border-[#5D0703]/20'>
                  <p className='font-rose text-xl font-bold'>My Role</p>
                  <ul className='list-disc list-inside font-rose text-sm sm:text-base space-y-1.5 opacity-90'>
                    <li>Full-stack web application development</li>
                    <li>Frontend architecture and UI development</li>
                    <li>Backend and API development</li>
                    <li>Authentication and authorization</li>
                    <li>Database design and integration</li>
                    <li>Job and application management</li>
                    <li>Integration of the platform with the AI/ML system</li>
                  </ul>
                </div>
              </div>

              {/* Vivek Chauhan */}
              <div className='bg-[#EEDCC8] rounded-2xl p-6 sm:p-10 space-y-6 interactive-card hover:shadow-2xl hover:shadow-black/40 border border-[#EEDCC8]/60 flex flex-col justify-between'>
                <div className='space-y-4'>
                  <div className='border-b border-[#5D0703]/20 pb-4'>
                    <h3 className='font-bebas text-3xl sm:text-5xl leading-tight'>Vivek Chauhan</h3>
                    <p className='font-bebas text-xl sm:text-2xl text-[#5D0703]/80'>Machine Learning Engineer</p>
                  </div>
                  <p className='font-rose text-sm sm:text-base leading-relaxed opacity-90'>
                    I'm Vivek Chauhan, a Machine Learning Engineer passionate about building practical AI solutions that
                    solve real-world problems. I work on the AI/ML engine behind HireLens, designed to make the recruitment
                    process faster and more efficient. The system is designed to analyze candidate resumes, extract relevant
                    information, evaluate candidate profiles, and rank candidates based on their suitability for a particular
                    job role. When an employer receives hundreds or even thousands of resumes, manually reviewing every
                    application can be time-consuming.
                  </p>
                </div>

                <div className='space-y-3 pt-4 border-t border-[#5D0703]/20'>
                  <p className='font-rose text-xl font-bold'>My Role</p>
                  <ul className='list-disc list-inside font-rose text-sm sm:text-base space-y-1.5 opacity-90'>
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
          </div>
        </section>

        {/* Built by Two Developers Summary */}
        <section className='bg-[#EEDCC8] text-[#5D0703] py-14 sm:py-20 px-4 sm:px-8 md:px-12'>
          <div className='max-w-4xl mx-auto space-y-6 text-center'>
            <h2 className='font-bebas text-3xl sm:text-5xl tracking-wide'>Built by Two Developers</h2>
            <p className='font-rose text-base sm:text-xl md:text-2xl leading-relaxed opacity-90'>
              HireLens brings together two different areas of software development: full-stack engineering and machine
              learning. The web platform provides the infrastructure for candidates and recruiters to interact, while
              the AI/ML component is designed to analyze candidate information and help identify relevant matches. Together,
              these components form the foundation of HireLens.
            </p>
          </div>
        </section>

        {/* Built to Learn. Built to Solve. */}
        <section 
          ref={learnRef}
          className={`bg-[#5D0703] text-[#EEDCC8] py-14 sm:py-20 px-4 sm:px-8 md:px-12 transition-all duration-1000 ${
            learnInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className='max-w-4xl mx-auto space-y-6 text-center'>
            <h2 className='font-bebas text-3xl sm:text-5xl tracking-wide'>Built to Learn. Built to Solve.</h2>
            <p className='font-rose text-base sm:text-xl md:text-2xl leading-relaxed text-[#EEDCC8]/90'>
              HireLens started as a practical project and has grown into an opportunity to explore how modern web development and
              machine learning can work together to solve a real-world problem.
            </p>
            <p className='font-rose text-base sm:text-xl md:text-2xl leading-relaxed text-[#EEDCC8]/90'>
              The goal isn't simply to build another hiring platform. It's to understand how real applications are designed,
              developed, integrated, and improved—and to keep building better software along the way.
            </p>
          </div>
        </section>

        {/* Ready to Get Started? */}
        <section className='bg-[#EEDCC8] text-[#5D0703] py-16 sm:py-24 px-4 sm:px-8 text-center'>
          <div className='max-w-3xl mx-auto space-y-8'>
            <h2 className='font-bebas text-4xl sm:text-6xl tracking-wide'>Ready to Get Started?</h2>
            <p className='font-rose text-lg sm:text-2xl opacity-90 leading-relaxed'>
              Whether you're looking for your next opportunity or searching for your next hire, HireLens is here to help you take the
              next step.
            </p>
            <div className='flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-4'>
              <button
                onClick={() => navigate('/jobs')}
                className='w-full sm:w-auto text-[#EEDCC8] bg-[#5D0703] px-8 py-2.5 font-bebas text-xl sm:text-2xl tracking-wider cursor-pointer rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-md border border-transparent hover:border-[#5D0703] hover:bg-transparent hover:text-[#5D0703]'
              >
                Explore Jobs
              </button>
              <button
                onClick={() => navigate('/signup')}
                className='w-full sm:w-auto text-[#EEDCC8] bg-[#5D0703] px-8 py-2.5 font-bebas text-xl sm:text-2xl tracking-wider cursor-pointer rounded-xl hover:scale-105 active:scale-95 transition-all duration-300 shadow-md border border-transparent hover:border-[#5D0703] hover:bg-transparent hover:text-[#5D0703]'
              >
                Get Started
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default AboutUs