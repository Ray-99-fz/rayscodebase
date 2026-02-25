import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { HiCode } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Navbar = ({onCarriculumClick, onTestimonialsClick, onKPIClick, onFAQClick, onLogoClick}) => {
    const [nav, setNav] = useState(false)

  return (
    <div className='w-full min-h-14 bg-white p-6 border-b-[1px] border-[#cc4c] shadow-2xl top-0 left-0 fixed z-30'>
        <div className=' w-[90%] lg:w-[80%] m-auto flex items-center justify-between'>
            {/* Left */}
            <div className='flex items-center'>
                <div className='border-0 outline-0 mr-3 rounded-lg w-8 h-8 lg:w-11 lg:h-11 flex items-center justify-center bg-gradient-to-br from-[#5650FB] to-[#7C3EFB]
                    shadow-lg shadow-purple-500/30'
                >
                    <HiCode 
                        size={30}
                        color={'#FFFFFF'}
                    />
                </div>
                <p className='lg:text-xl font-semibold cursor-pointer' onClick={onLogoClick}>
                    Ray's Codebase
                </p>
            </div>

            {/* Right */}
            <div className='flex items-center gap-6'>
                <nav className='hidden md:flex'>
                    <ul className='group flex gap-10 lg:gap-15 items-center cursor-pointer text-[#a4a0a0] lg:text-xl'>
                        <li className='hover:text-[#828080]' onClick={onKPIClick}>
                            Features
                        </li>
                        <li className='hover:text-[#828080]' onClick={onCarriculumClick}>
                            Carriculum
                        </li>
                        <li className='hover:text-[#828080]' onClick={onTestimonialsClick}>
                            Testimonials
                        </li>
                        <li className='hover:text-[#828080]' onClick={onFAQClick}>
                            FAQ
                        </li>
                        <li>
                            <Link 
                                to="/enroll"
                                className='bg-[#1E5BFF] py-2 px-6 text-white rounded-lg hover:bg-[#184AE0] transition-colors font-semibold'
                            >
                                Enroll Now
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div onClick={() => setNav(!nav)}  className='cursor-pointer md:hidden'>
                    <FiMenu
                        size={30}
                    />
                </div>
            </div>

            {/* toggle menu bar */}
            <div className={nav ? 'bg-white w-[300px] h-full fixed top-0 right-0 z-50 duration-500' : 'bg-white w-[300px] h-full fixed top-0 right-[-100%] z-50 duration-500'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)} 
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <nav>
                    <ul className='flex flex-col pt-15 p-6 text-[#a4a0a0]'>
                        <li className='text-xl py-6' onClick={() => {onKPIClick() ; setNav(false); } }>Features</li>
                        <li className='text-xl py-6' onClick={() => {onCarriculumClick() ; setNav(false); } }>Curriculum</li>
                        <li className='text-xl py-6' onClick={() => {onTestimonialsClick() ; setNav(false); } }>Testimonials</li>
                        <li className='text-xl py-6' onClick={() => {onFAQClick() ; setNav(false); } }>FAQ</li>
                        <li className='text-xl my-6'>
                            <Link
                                to="/enroll"
                                className='block bg-[#1E5BFF] py-2 px-6 text-center text-white rounded-lg'
                                onClick={() => setNav(false)} // closes menu after click
                            >
                                Enroll
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
            
        </div>
    </div>
  )
}

export default Navbar