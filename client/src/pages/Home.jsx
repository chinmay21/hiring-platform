
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { FaArrowRight } from "react-icons/fa"
import { useNavigate } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollAnimation'

const Home = () => {
  const navigate = useNavigate();
  const [introRef, introInView] = useScrollReveal();
  const [howRef, howInView] = useScrollReveal();
  const [dualRef, dualInView] = useScrollReveal();
  const [whyRef, whyInView] = useScrollReveal();

  return (
    <div className='min-h-screen flex flex-col bg-[#EEDCC8]'>
      <Navbar/>
      
      {/* Main Content */}
      <main className='flex-1'>
        {/* Hero Section */}
        <section className='py-12 sm:py-16 md:py-24 bg-[#EEDCC8] text-[#5D0703] overflow-hidden'>
          <div className='max-w-6xl mx-auto px-4 sm:px-8 md:px-12 space-y-8 md:space-y-12 text-center'>
            {/* Tagline */}
            <div className='inline-block animate-fade-in-down'>
              <p className='font-rose font-bold text-lg sm:text-2xl md:text-3xl tracking-widest uppercase bg-[#5D0703]/10 px-5 py-1.5 rounded-full border border-[#5D0703]/20'>
                SMARTER HIRING. BETTER MATCHES.
              </p>
            </div>

            {/* Main Headline */}
            <h1 className='font-rose font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight max-w-4xl mx-auto animate-fade-in-up'>
              Find the right talent. <span className='italic font-normal block sm:inline'>Without the endless search.</span>
            </h1>

            {/* Description */}
            <p className='font-rose font-semibold text-base sm:text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed opacity-90 animate-fade-in-up stagger-2'>
              HireLens helps recruiters discover relevant candidates by analyzing resumes and matching their skills, experience,
              and qualifications with job requirements.
            </p>
          </div>

          {/* Hero CTA Action Bar */}
          <div className='bg-[#5D0703] font-bebas mt-12 sm:mt-16 md:mt-20 py-4 sm:py-5 px-4 shadow-xl'>
            <div className='max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-12 md:gap-20'>
              <button
                onClick={() => navigate('/signup')}
                className='w-full sm:w-auto flex items-center justify-center text-lg sm:text-xl tracking-wider gap-2 bg-[#EEDCC8] text-[#5D0703] px-6 py-2 rounded-xl cursor-pointer hover:scale-105 active:scale-95 group hover:bg-transparent hover:text-[#EEDCC8] hover:ring-2 hover:ring-[#EEDCC8] transition-all duration-300 shadow-md font-rose font-semibold'
              >
                <span>Find Talent</span>
                <FaArrowRight className='group-hover:translate-x-1 group-hover:rotate-[-45deg] transition-transform duration-300 text-sm'/> 
              </button>
              <button 
                onClick={() => navigate('/aboutUs')}
                className='w-full sm:w-auto flex items-center justify-center text-lg sm:text-xl tracking-wider gap-2 bg-[#EEDCC8] text-[#5D0703] px-6 py-2 rounded-xl cursor-pointer hover:scale-105 active:scale-95 group hover:bg-transparent hover:text-[#EEDCC8] hover:ring-2 hover:ring-[#EEDCC8] transition-all duration-300 shadow-md font-rose font-semibold'
              >
                <span>Find Jobs</span>
                <FaArrowRight className='group-hover:translate-x-1 group-hover:rotate-[-45deg] transition-transform duration-300 text-sm'/> 
              </button>
            </div>
          </div>
        </section>

        {/* Product Introduction Section */}
        <section 
          ref={introRef}
          className={`py-16 sm:py-24 md:py-32 px-6 sm:px-10 md:px-16 bg-[#5D0703] text-[#EEDCC8] transition-all duration-1000 ${
            introInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className='max-w-5xl mx-auto space-y-8 md:space-y-14 text-center'>
            <h2 className='font-bebas font-bold text-3xl sm:text-5xl md:text-6xl tracking-wide leading-tight'>
              Hiring shouldn't feel like searching for a needle in a haystack.
            </h2>
            <div className='w-24 h-1 bg-[#EEDCC8]/40 mx-auto rounded-full'></div>
            <p className='font-rose font-semibold text-lg sm:text-2xl md:text-3xl leading-relaxed text-[#EEDCC8]/90 max-w-4xl mx-auto'>
              Recruiters shouldn't have to spend hours going through resumes one by one. HireLens brings candidate information and job
              requirements together to help you identify relevant matches faster.
            </p>
          </div>
        </section>

        {/* How It Works Section */}
        <section 
          id='how-it-works' 
          ref={howRef}
          className={`py-16 sm:py-20 md:py-28 bg-[#EEDCC8] text-[#5D0703] transition-all duration-1000 ${
            howInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className='max-w-5xl mx-auto px-4 sm:px-8 md:px-12'>
            <div className='text-center space-y-4 mb-12 md:mb-16'>
              <h2 className='font-rose font-bold text-3xl sm:text-5xl md:text-6xl'>How HireLens Works</h2>
              <p className='font-rose font-semibold text-lg sm:text-2xl md:text-3xl max-w-3xl mx-auto opacity-90'>
                From resume to relevant opportunity, HireLens keeps the process simple.
              </p>
            </div>

            {/* Steps Timeline */}
            <div className='space-y-6 md:space-y-8 font-rose'>
              {/* Step 1 */}
              <div className='bg-white/40 p-6 sm:p-8 rounded-2xl border border-[#5D0703]/15 shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300'>
                <div className='flex items-start gap-4 sm:gap-6'>
                  <span className='font-bebas text-3xl sm:text-4xl bg-[#5D0703] text-[#EEDCC8] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow'>
                    01
                  </span>
                  <div className='space-y-2'>
                    <h3 className='text-2xl sm:text-3xl font-bold'>Upload Your Resume</h3>
                    <p className='text-base sm:text-xl font-medium opacity-85 leading-relaxed'>
                      Candidates can upload their resume and build a profile containing their skills, experience, and qualifications.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className='bg-white/40 p-6 sm:p-8 rounded-2xl border border-[#5D0703]/15 shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300'>
                <div className='flex items-start gap-4 sm:gap-6'>
                  <span className='font-bebas text-3xl sm:text-4xl bg-[#5D0703] text-[#EEDCC8] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow'>
                    02
                  </span>
                  <div className='space-y-2'>
                    <h3 className='text-2xl sm:text-3xl font-bold'>Define Your Requirements</h3>
                    <p className='text-base sm:text-xl font-medium opacity-85 leading-relaxed'>
                      Recruiters create job listings and specify the skills, experience, and qualifications they're looking for.
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className='bg-white/40 p-6 sm:p-8 rounded-2xl border border-[#5D0703]/15 shadow-sm hover:shadow-md hover:bg-white/60 transition-all duration-300'>
                <div className='flex items-start gap-4 sm:gap-6'>
                  <span className='font-bebas text-3xl sm:text-4xl bg-[#5D0703] text-[#EEDCC8] w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow'>
                    03
                  </span>
                  <div className='space-y-2'>
                    <h3 className='text-2xl sm:text-3xl font-bold'>Discover Relevant Matches</h3>
                    <p className='text-base sm:text-xl font-medium opacity-85 leading-relaxed'>
                      HireLens analyzes candidate information against job requirements to help recruiters find relevant candidates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* For Job Seekers / Recruiters Section */}
        <section 
          id='job-seekers'
          ref={dualRef}
          className={`py-16 sm:py-24 bg-[#5D0703] text-[#EEDCC8] transition-all duration-1000 ${
            dualInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className='max-w-6xl mx-auto px-4 sm:px-8 lg:px-12'>
            <div className='text-center space-y-4 mb-12 sm:mb-16'>
              <h2 className='font-rose font-bold text-3xl sm:text-5xl md:text-6xl'>
                Built for both sides of the hiring process.
              </h2>
              <p className='font-rose font-semibold text-lg sm:text-2xl md:text-3xl max-w-3xl mx-auto opacity-90'>
                Whether you're looking for your next opportunity or your next hire, HireLens gives you the tools to make the process more
                organized.
              </p>
            </div>

            {/* Cards Grid */}
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 text-[#5D0703]'>
              {/* Job Seeker Card */}
              <div className='flex flex-col justify-between bg-[#EEDCC8] rounded-2xl p-6 sm:p-10 space-y-8 interactive-card hover:shadow-2xl hover:shadow-black/40 border border-[#EEDCC8]/60'>
                <div className='space-y-4'>
                  <h3 className='font-rose font-bold text-2xl sm:text-3xl'>Find opportunities that fit you.</h3>
                  <p className='font-rose font-medium text-lg sm:text-xl leading-relaxed opacity-90'>
                    Create your profile, upload your resume, explore available jobs, and apply to opportunities that match your skills and
                    experience.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => navigate('/aboutUs')}
                    className='w-full sm:w-auto inline-flex items-center justify-center font-bebas text-xl tracking-wider gap-2 bg-[#5D0703] text-[#EEDCC8] px-6 py-2.5 rounded-xl cursor-pointer hover:scale-105 active:scale-95 group hover:bg-transparent hover:text-[#5D0703] hover:ring-2 hover:ring-[#5D0703] transition-all duration-300 shadow font-semibold'
                  >
                    <span>Explore Jobs</span>
                    <FaArrowRight className='group-hover:translate-x-1 group-hover:rotate-[-45deg] transition-transform duration-300 text-sm'/> 
                  </button>
                </div>
              </div>

              {/* Recruiter Card */}
              <div id='recruiters' className='flex flex-col justify-between bg-[#EEDCC8] rounded-2xl p-6 sm:p-10 space-y-8 interactive-card hover:shadow-2xl hover:shadow-black/40 border border-[#EEDCC8]/60'>
                <div className='space-y-4'>
                  <h3 className='font-rose font-bold text-2xl sm:text-3xl'>Find candidates that fit your requirements.</h3>
                  <p className='font-rose font-medium text-lg sm:text-xl leading-relaxed opacity-90'>
                    Create job listings, define what you're looking for, and discover candidates based on the skills and experience in their resumes.
                  </p>
                </div>
                <div>
                  <button
                    onClick={() => navigate('/signup')}
                    className='w-full sm:w-auto inline-flex items-center justify-center font-bebas text-xl tracking-wider gap-2 bg-[#5D0703] text-[#EEDCC8] px-6 py-2.5 rounded-xl cursor-pointer hover:scale-105 active:scale-95 group hover:bg-transparent hover:text-[#5D0703] hover:ring-2 hover:ring-[#5D0703] transition-all duration-300 shadow font-semibold'
                  >
                    <span>Find Candidates</span>
                    <FaArrowRight className='group-hover:translate-x-1 group-hover:rotate-[-45deg] transition-transform duration-300 text-sm'/> 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why HireLens Section */}
        <section 
          ref={whyRef}
          className={`py-16 sm:py-24 bg-[#EEDCC8] text-[#5D0703] transition-all duration-1000 ${
            whyInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className='max-w-7xl mx-auto px-4 sm:px-8 lg:px-12'>
            <div className='text-center space-y-4 mb-12 sm:mb-16'>
              <h2 className='font-rose font-bold text-3xl sm:text-5xl md:text-6xl'>Less searching. More hiring.</h2>
              <p className='font-rose font-semibold text-lg sm:text-2xl md:text-3xl max-w-3xl mx-auto opacity-90'>
                HireLens is designed to bring the most relevant candidate information closer to the recruiter, making it easier to review
                applications and focus on the people who fit the role.
              </p>
            </div>

            {/* 4 Cards Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
              {/* Card 1 */}
              <div 
                className='bg-[#5D0703] text-[#EEDCC8] p-6 space-y-4 rounded-xl interactive-card hover:shadow-xl hover:shadow-[#5D0703]/30 group transition-all duration-300 flex flex-col justify-between'
              >
                <div className='space-y-3'>
                  <h3 className='font-bebas text-2xl sm:text-3xl tracking-wide'>
                    Resume-Based Profiles
                    <span className='bg-[#EEDCC8] scale-x-0 h-1 w-3/4 block group-hover:scale-x-100 origin-left transition-transform duration-300 mt-1'></span>
                  </h3>
                  <p className='font-rose text-base sm:text-lg opacity-85 leading-relaxed'>
                    Keep candidate information organized around the experience, skills, and qualifications provided in their resumes.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div
                className='bg-[#5D0703] text-[#EEDCC8] p-6 space-y-4 rounded-xl interactive-card hover:shadow-xl hover:shadow-[#5D0703]/30 group transition-all duration-300 flex flex-col justify-between'
              >
                <div className='space-y-3'>
                  <h3 className='font-bebas text-2xl sm:text-3xl tracking-wide'>
                    Requirement-Focused
                    <span className='bg-[#EEDCC8] scale-x-0 h-1 w-3/4 block group-hover:scale-x-100 origin-left transition-transform duration-300 mt-1'></span>
                  </h3>
                  <p className='font-rose text-base sm:text-lg opacity-85 leading-relaxed'>
                    Define the skills and qualifications that matter for each job you're hiring for.
                  </p>
                </div>
              </div>

              {/* Card 3 */}
              <div
                className='bg-[#5D0703] text-[#EEDCC8] p-6 space-y-4 rounded-xl interactive-card hover:shadow-xl hover:shadow-[#5D0703]/30 group transition-all duration-300 flex flex-col justify-between'
              >
                <div className='space-y-3'>
                  <h3 className='font-bebas text-2xl sm:text-3xl tracking-wide'>
                    Organized Applications
                    <span className='bg-[#EEDCC8] scale-x-0 h-1 w-3/4 block group-hover:scale-x-100 origin-left transition-transform duration-300 mt-1'></span>
                  </h3>
                  <p className='font-rose text-base sm:text-lg opacity-85 leading-relaxed'>
                    Keep jobs, applications, and candidate information structured in one place.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div
                className='bg-[#5D0703] text-[#EEDCC8] p-6 space-y-4 rounded-xl interactive-card hover:shadow-xl hover:shadow-[#5D0703]/30 group transition-all duration-300 flex flex-col justify-between'
              >
                <div className='space-y-3'>
                  <h3 className='font-bebas text-2xl sm:text-3xl tracking-wide'>
                    Relevant Matches
                    <span className='bg-[#EEDCC8] scale-x-0 h-1 w-3/4 block group-hover:scale-x-100 origin-left transition-transform duration-300 mt-1'></span>
                  </h3>
                  <p className='font-rose text-base sm:text-lg opacity-85 leading-relaxed'>
                    Make it easier to identify candidates whose profiles align with your job requirements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default Home