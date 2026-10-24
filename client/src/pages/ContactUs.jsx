
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useScrollReveal } from '../hooks/useScrollAnimation'

const ContactUs = () => {
  const [formSectionRef, formSectionInView] = useScrollReveal();
  const [bottomRef, bottomInView] = useScrollReveal();

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Default form submission or feedback
  };

  return (
    <div className='min-h-screen flex flex-col bg-[#EEDCC8]'>
      <Navbar/>
      
      <main className='flex-1'>
        {/* Header Hero */}
        <section className='bg-[#EEDCC8] text-[#5D0703] py-12 sm:py-20 px-4 sm:px-8 text-center'>
          <div className='max-w-4xl mx-auto space-y-4 md:space-y-6'>
            <h1 className='text-4xl sm:text-6xl md:text-7xl font-bebas tracking-wide animate-fade-in-down'>
              Get in Touch
            </h1>
            <p className='text-2xl sm:text-4xl md:text-5xl font-bebas text-[#5D0703]/90 tracking-wider animate-fade-in-up'>
              We'd love to hear from you.
            </p>
            <p className='text-base sm:text-xl md:text-2xl font-rose opacity-90 max-w-2xl mx-auto leading-relaxed animate-fade-in-up stagger-2'>
              Have a question about HireLens, found something that could be improved, or simply want to get in touch?
              Send us a message and we'll do our best to get back to you.
            </p>
          </div>
        </section>

        {/* Contact Content & Form Grid */}
        <section 
          ref={formSectionRef}
          className={`py-8 sm:py-12 px-4 sm:px-8 lg:px-12 transition-all duration-1000 ${
            formSectionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12'>
            {/* Left Column: Let's Talk */}
            <div className='bg-[#EEDCC8] text-[#5D0703] w-full lg:w-1/2 border-4 sm:border-8 border-[#5D0703] rounded-2xl p-6 sm:p-10 space-y-8 flex flex-col justify-between shadow-md'>
              <div className='space-y-3 pb-6 border-b border-[#5D0703]/20'>
                <h3 className='font-bebas text-3xl sm:text-4xl tracking-wide'>Let's Talk</h3>
                <p className='font-rose text-base sm:text-xl leading-relaxed opacity-90'>
                  Whether you have a question, feedback, suggestion, or want to discuss an opportunity to collaborate,
                  we'd be happy to hear from you.
                </p>
              </div>

              <div className='space-y-3 pb-6 border-b border-[#5D0703]/20'>
                <h3 className='font-bebas text-3xl sm:text-4xl tracking-wide'>Have a Question?</h3>
                <p className='font-rose text-base sm:text-xl leading-relaxed opacity-90'>
                  Need help understanding how HireLens works or have a question about the platform? Let us know.
                </p>
              </div>

              <div className='space-y-3 pb-6 border-b border-[#5D0703]/20'>
                <h3 className='font-bebas text-3xl sm:text-4xl tracking-wide'>Have Feedback?</h3>
                <p className='font-rose text-base sm:text-xl leading-relaxed opacity-90'>
                  Your feedback can help us improve HireLens and make the experience better for both job seekers and recruiters.
                </p>
              </div>

              <div className='space-y-3'>
                <h3 className='font-bebas text-3xl sm:text-4xl tracking-wide'>Want to Collaborate?</h3>
                <p className='font-rose text-base sm:text-xl leading-relaxed opacity-90'>
                  Interested in working with us or contributing to the project? We'd love to hear what you have in mind.
                </p>
              </div>
            </div>

            {/* Right Column: Send Us a Message Form */}
            <div className='bg-[#5D0703] text-[#EEDCC8] w-full lg:w-1/2 rounded-2xl p-6 sm:p-10 space-y-6 shadow-2xl'>
              <h2 className='font-bebas text-3xl sm:text-5xl text-center tracking-wide'>Send Us a Message</h2>
              <form id='contactUsForm' onSubmit={handleFormSubmit} className='space-y-5'>
                {/* Name */}
                <div className='flex flex-col gap-2'>
                  <label 
                    className='text-xl sm:text-2xl font-bebas tracking-wide'
                    htmlFor='name'
                  >
                    Name
                  </label>
                  <input 
                    className='border border-[#EEDCC8]/60 bg-[#5D0703] text-[#EEDCC8] rounded-xl px-4 py-3 outline-none font-rose text-base sm:text-lg focus:border-[#EEDCC8] focus:ring-2 focus:ring-[#EEDCC8]/30 transition-all duration-200'
                    type='text' 
                    name='name' 
                    id='name' 
                    placeholder='Enter your name' 
                    required 
                    pattern='[A-Za-z ]+'
                    title='Name can only contain letters'
                  />
                </div>

                {/* Email */}
                <div className='flex flex-col gap-2'>
                  <label 
                    className='text-xl sm:text-2xl font-bebas tracking-wide'
                    htmlFor='email'
                  >
                    Email
                  </label>
                  <input 
                    className='border border-[#EEDCC8]/60 bg-[#5D0703] text-[#EEDCC8] rounded-xl px-4 py-3 outline-none font-rose text-base sm:text-lg focus:border-[#EEDCC8] focus:ring-2 focus:ring-[#EEDCC8]/30 transition-all duration-200'
                    type='email' 
                    name='email' 
                    id='email' 
                    placeholder='Enter your email address' 
                    required
                  />
                </div>

                {/* Subject */}
                <div className='flex flex-col gap-2'>
                  <label 
                    className='text-xl sm:text-2xl font-bebas tracking-wide' 
                    htmlFor='subject'
                  >
                    Subject
                  </label>
                  <input 
                    className='border border-[#EEDCC8]/60 bg-[#5D0703] text-[#EEDCC8] rounded-xl px-4 py-3 outline-none font-rose text-base sm:text-lg focus:border-[#EEDCC8] focus:ring-2 focus:ring-[#EEDCC8]/30 transition-all duration-200'
                    type='text' 
                    name='subject' 
                    id='subject' 
                    placeholder='What is your message about?' 
                    required
                  />
                </div>

                {/* Message */}
                <div className='flex flex-col gap-2'>
                  <label 
                    className='text-xl sm:text-2xl font-bebas tracking-wide' 
                    htmlFor='message'
                  >
                    Message
                  </label>
                  <textarea
                    className='border border-[#EEDCC8]/60 bg-[#5D0703] text-[#EEDCC8] rounded-xl px-4 py-3 outline-none font-rose text-base sm:text-lg focus:border-[#EEDCC8] focus:ring-2 focus:ring-[#EEDCC8]/30 transition-all duration-200 resize-y'
                    name='message'
                    id='message'
                    placeholder='Tell us how we can help...'
                    required
                    rows="4"
                  />
                </div>

                {/* Submit Button */}
                <div className='pt-2 flex justify-center'>
                  <button
                    className='text-[#5D0703] bg-[#EEDCC8] px-6 py-2.5 w-full sm:w-56 text-xl sm:text-2xl font-bebas tracking-wider rounded-2xl relative z-10 overflow-hidden group hover:text-[#EEDCC8] hover:ring-2 hover:ring-[#EEDCC8] hover:shadow-lg hover:shadow-black/20 cursor-pointer active:scale-95 transition-all duration-300'
                    type='submit'
                  >
                    <span 
                      className='absolute inset-0 bg-[#3d0502] scale-x-0 -z-10 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out'
                    ></span>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>

        {/* Bottom Feedback Callout */}
        <section 
          ref={bottomRef}
          className={`bg-[#EEDCC8] text-[#5D0703] py-16 sm:py-24 text-center px-4 sm:px-8 space-y-6 sm:space-y-8 transition-all duration-1000 ${
            bottomInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className='max-w-4xl mx-auto space-y-4'>
            <h3 className='text-3xl sm:text-5xl font-bebas tracking-wide'>Help Us Improve HireLens</h3>
            <p className='text-lg sm:text-2xl font-rose leading-relaxed opacity-90'>
              HireLens is an evolving project, and every question, suggestion, and piece of feedback helps us make it better.
            </p>
            <p className='text-lg sm:text-2xl font-rose font-semibold'>Have something to share? We'd love to hear it.</p>
          </div>
          <div>
            <a 
              href='#contactUsForm' 
              className='inline-block bg-[#5D0703] text-[#EEDCC8] px-8 py-3 rounded-xl font-bebas text-xl sm:text-2xl tracking-wider hover:opacity-90 hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer'
            >
              Send Your Feedback
            </a>
          </div>
        </section>
      </main>

      <Footer/>
    </div>
  )
}

export default ContactUs