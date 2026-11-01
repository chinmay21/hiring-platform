import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import logo from '../assets/logo.png'
import { useNavigate, useLocation } from 'react-router-dom'
import { HiMenuAlt3, HiX } from "react-icons/hi"

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { token, user } = useSelector((state) => state.auth);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPath, setPrevPath] = useState(location.pathname);

  // Close mobile menu on route change without triggering useEffect setState warnings
  if (location.pathname !== prevPath) {
    setPrevPath(location.pathname);
    setMobileMenuOpen(false);
  }

  // Track scroll position for subtle elevation
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'About', href: '/aboutUs' },
    { name: 'Contact', href: '/contactUs' },
  ];

  return (
    <header className={`sticky top-0 z-50 bg-[#5D0703] text-[#EEDCC8] transition-all duration-300 ${scrolled ? 'shadow-lg shadow-black/20 bg-[#5D0703]/98 backdrop-blur-md py-1' : ''}`}>
      {/* Container Div */}
      <div className='flex h-20 md:h-24 items-center justify-between px-4 sm:px-8 lg:px-12 max-w-7xl mx-auto'>
        {/* Logo */}
        <a href='/' className='inline-flex items-center group' aria-label='HireLens Home'>
          <img 
            className='cursor-pointer w-36 sm:w-44 md:w-48 transition-transform duration-300 group-hover:scale-105' 
            src={logo} 
            alt='HireLens logo' 
            loading='lazy' 
          />
        </a>

        {/* Desktop Navigation Links */}
        <nav className='hidden md:flex font-bebas items-center space-x-8 lg:space-x-12 text-xl tracking-wider'>
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`nav-link-hover cursor-pointer transition-colors duration-200 py-1 ${
                  isActive ? 'text-white border-b-2 border-[#EEDCC8]' : 'text-[#EEDCC8] hover:text-white'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Desktop Buttons */}
        {
          token && user ? (
            <div className='hidden md:flex font-rose items-center gap-x-4 lg:gap-x-6'>
                <button 
                  onClick={() => navigate("/my-jobs")}
                  className='bg-[#EEDCC8] text-[#5D0703] font-semibold rounded-lg px-4 py-1.5 border border-transparent 
                  hover:bg-transparent hover:border-[#EEDCC8] hover:text-[#EEDCC8] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 
                  cursor-pointer transition-all duration-300'
                >
                  My Jobs
                </button>
            </div>
          ) : (
            <div className='hidden md:flex font-rose items-center gap-x-4 lg:gap-x-6'>
                <button 
                  onClick={() => navigate("/signup")}
                  className='bg-[#EEDCC8] text-[#5D0703] font-semibold rounded-lg px-4 py-1.5 border border-transparent 
                  hover:bg-transparent hover:border-[#EEDCC8] hover:text-[#EEDCC8] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 
                  cursor-pointer transition-all duration-300'
                >
                  Signup
                </button>
                <button
                  onClick={() => navigate("/login")} 
                  className='bg-[#EEDCC8] text-[#5D0703] font-semibold rounded-lg px-4 py-1.5 border border-transparent 
                  hover:bg-transparent hover:border-[#EEDCC8] hover:text-[#EEDCC8] hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 
                  cursor-pointer transition-all duration-300'
                >
                  Login
                </button>
            </div>
          )
        }

        {/* Mobile Hamburger Button */}
        <button
          type='button'
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className='md:hidden p-2 rounded-lg text-[#EEDCC8] hover:bg-[#EEDCC8]/10 focus:outline-none focus:ring-2 focus:ring-[#EEDCC8]/40 transition-colors'
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <HiX className='w-8 h-8 transition-transform duration-300 rotate-90 animate-spin-once' />
          ) : (
            <HiMenuAlt3 className='w-8 h-8 transition-transform duration-300 hover:scale-110' />
          )}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-t border-[#EEDCC8]/15 bg-[#5D0703] ${
          mobileMenuOpen ? 'max-h-96 opacity-100 py-6 px-6 shadow-xl' : 'max-h-0 opacity-0 py-0 px-6'
        }`}
      >
        <div className='flex flex-col space-y-4 font-bebas text-2xl tracking-wider'>
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.href;
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 px-3 rounded-md transition-all duration-200 flex items-center justify-between ${
                  isActive 
                    ? 'bg-[#EEDCC8]/15 text-white pl-5 font-bold' 
                    : 'text-[#EEDCC8] hover:bg-[#EEDCC8]/10 hover:pl-5'
                }`}
                style={{ transitionDelay: `${idx * 40}ms` }}
              >
                <span>{link.name}</span>
                <span className='text-xs opacity-60'>→</span>
              </a>
            );
          })}
        </div>

        {/* Mobile Buttons */}
        <div className='font-rose grid grid-cols-2 gap-4 mt-6 pt-5 border-t border-[#EEDCC8]/20'>
          <button 
            onClick={() => { setMobileMenuOpen(false); navigate("/signup"); }}
            className='bg-[#EEDCC8] text-[#5D0703] font-semibold text-center rounded-lg py-2.5 
            hover:bg-transparent hover:ring-1 hover:ring-[#EEDCC8] hover:text-[#EEDCC8] active:scale-95 transition-all'
          >
            Signup
          </button>
          <button
            onClick={() => { setMobileMenuOpen(false); navigate("/login"); }} 
            className='bg-transparent border border-[#EEDCC8] text-[#EEDCC8] font-semibold text-center rounded-lg py-2.5 
            hover:bg-[#EEDCC8] hover:text-[#5D0703] active:scale-95 transition-all'
          >
            Login
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar