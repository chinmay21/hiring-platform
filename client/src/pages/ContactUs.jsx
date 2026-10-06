import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const ContactUs = () => {
  return (
    <>
      <Navbar/>
      <div>
          <div className='bg-[#EEDCC8] text-[#5D0703] flex flex-col items-center gap-10 py-10 px-5'>
            <h2 className='text-7xl font-bebas'>Get in Touch</h2>
            <p className='text-5xl font-bebas'>We'd love to hear from you.</p>
            <p className='text-2xl font-rose pl-5'>
              Have a question about HireLens, found something that could be improved, or simply want to get in touch?
              Send us a message and we'll do our best to get back to you.
            </p>
          </div>
          <div className='flex bg-[#EEDCC8] py-5 px-5 gap-5'>
            <div className='bg-[#EEDCC8] text-[#5D0703] w-[50%] border-[#5D0703] border-8 rounded-xl px-10 py-10'>
              <div className='space-y-3 pb-10'>
                <h3 className='font-bebas text-5xl'>Let's Talk</h3>
                <p className='font-rose text-2xl'>
                  Whether you have a question, feedback, suggestion, or want to discuss an opportunity to collaborate,
                  we'd be happy to hear from you.
                </p>
              </div>
              <div className='space-y-3 pb-10'>
                <h3 className='font-bebas text-5xl'>Have a Question?</h3>
                <p className='font-rose text-2xl'>
                  Need help understanding how HireLens works or have a question about the platform? Let us know.
                </p>
              </div>
              <div className='space-y-3 pb-10'>
                <h3 className='font-bebas text-5xl'>Have Feedback?</h3>
                <p className='font-rose text-2xl'>
                  Your feedback can help us improve HireLens and make the experience better for both job seekers and recruiters.
                </p>
              </div>
              <div className='space-y-3 pb-10'>
                <h3 className='font-bebas text-5xl'>Want to Collaborate?</h3>
                <p className='font-rose text-2xl'>
                  Interested in working with us or contributing to the project? We'd love to hear what you have in mind.
                </p>
              </div>
            </div>
            <div className='bg-[#5D0703] text-[#EEDCC8] w-[50%] rounded-xl px-10 py-10 space-y-5'>
              <p className='font-bebas text-5xl w-fit mx-auto'>Send Us a Message</p>
              <form id='contactUsForm' className='space-y-5'>
                <div className='flex flex-col gap-5'>
                  <label 
                    className='text-3xl font-bebas'
                    htmlFor='name'
                  >
                    Name
                  </label>
                  <input 
                    className='border border-[#EEDCC8] rounded-xl px-5 py-3 outline-0 font-rose'
                    type='text' name='name' id='name' placeholder='Enter your name' required pattern='[A-Za-z]+'
                    title='Name can only contain letters'
                    />
                </div>
                <div className='flex flex-col gap-5'>
                  <label 
                    className='text-3xl font-bebas'
                    htmlFor='name'
                  >
                    Email
                  </label>
                  <input 
                    className='border border-[#EEDCC8] rounded-xl px-5 py-3 outline-0 font-rose'
                    type='email' name='email' id='email' placeholder='Enter your email address' required
                    />
                </div>
                <div className='flex flex-col gap-5'>
                  <label 
                    className='text-3xl font-bebas' 
                    htmlFor='subject'
                  >
                    Subject
                  </label>
                  <input 
                    className='border border-[#EEDCC8] rounded-xl px-5 py-3 outline-0 font-rose'
                    type='text' name='subject' id='subject' placeholder='What is your message about?' required
                  />
                </div>
                <div className='flex flex-col gap-5'>
                  <label 
                    className='text-3xl font-bebas' 
                    htmlFor='message'
                  >
                    Message
                  </label>
                  <textarea
                    className='border border-[#EEDCC8] rounded-xl px-5 py-3 outline-0 font-rose'
                    name='message'
                    id='message'
                    placeholder='Tell us how we can help...'
                    required
                    rows="5"
                  />
                </div>
                <div className='w-fit mx-auto'>
                  <button
                    className='text-[#5D0703] bg-[#EEDCC8] px-5 py-2 w-55 text-2xl font-bebas rounded-2xl relative z-20 group
                    hover:text-[#EEDCC8] hover:ring-[#EEDCC8] hover:ring-3 hover:shadow-[#EEDCC8] hover:shadow-lg
                    cursor-pointer transition-all'
                    type='submit'
                  >
                    <span 
                      className='absolute bg-[#5D0703] h-12 top-0 w-55 left-0 scale-x-0 -z-10 group-hover:scale-x-100
                      origin-left rounded-2xl transition-all ease-in delay-100 duration-200'
                    >
                    </span>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className='bg-[#EEDCC8] text-[#5D0703] py-15 text-center space-y-10'>
            <h3 className='text-5xl font-bebas'>Help Us Improve HireLens</h3>
            <p className='text-3xl font-rose'>
              HireLens is an evolving project, and every question, suggestion, and piece of feedback helps us make it better.
            </p>
            <p className='text-3xl font-rose'>Have something to share? We'd love to hear it.</p>
            <a 
              href='#contactUsForm' 
              className='bg-[#5D0703] text-[#EEDCC8] px-10 w-55 py-3 rounded-lg font-bebas text-2xl hover:opacity-90
              cursor-pointer'
              >
              Send Your Feedback
            </a>
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default ContactUs