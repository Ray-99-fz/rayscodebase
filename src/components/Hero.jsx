import React from 'react'
import { HiCode } from 'react-icons/hi'
import heroImg from '../assets/hero.jpeg'
import { IoIosArrowRoundForward } from 'react-icons/io'

const Hero = () => {
  return (
    <div className='w-full bg-gradient-to-br from-[#F3F8FF] to-white  p-2 md:p-6'>
        <div className="mt-25 w-[90%] lg:w-[80%] m-auto flex flex-col gap-7 pt-10 pb-25 items-center">
            {/* Left Side */}
            <div className="w-full">
                <p className='inline-flex items-center mb-9 gap-2 text-[#1E5BFF] bg-[#EAF2FF] px-4 py-2 rounded-full'>
                    <HiCode size={20} color={'#000'} />
                    3-Month Intensive Program
                </p>
                <h1 className='text-xl leading-[105%] md:text-5xl lg:text-7xl font-semibold mb-9'>Master Front-End Development <br /> with <span className='bg-gradient-to-r from-[#2F5BFF] to-[#7A4CFF] bg-clip-text text-transparent'>
                        Ray's Codebase
                    </span>
                </h1>
                <p className=' text-[17px] md:text-xl lg:text-3xl text-[#a4a0a0]'>
                Learn HTML, CSS, JavaScript, and professional web development <br /> workflows 
                through hands-on projects.Join our comprehensive 3- <br /> month online program and
                build real-world skills.</p>
                <div className="flex flex-col gap-3 md:flex-row my-14">
                    <button className='flex flex-row items-center justify-center gap-4 bg-[#1E5BFF] py-2 px-6 text-white lg:text-lg rounded-lg hover:bg-[#184AE0] transition-colors font-semibold'>
                        Enroll Now
                        <IoIosArrowRoundForward 
                            size={25}
                        />
                    </button>
                    <button className='bg-transparent py-2 px-6 rounded-lg  border border-[#D1D5DB] lg:text-lg text-black hover:bg-[#EEF0F2] transition-colors font-semibold'>
                        View Curicullum
                    </button>
                </div>
                <div className="flex flex-row items-center mb-12 md:mb-20">
                    <div className="flex flex-col">
                        <p className='md:text-2xl lg:text-4xl leading-[100%] font-medium text-black'>500+</p>
                        <p className='md:text-lg font-light text-[#a4a0a0]'>Graduates</p>
                    </div>

                    <div className="block h-12 w-px mx-6 bg-gray-300"></div>

                    <div className="flex flex-col text-center">
                        <p className='md:text-2xl lg:text-4xl leading-[100%] font-medium text-black'>4.9/5</p>
                        <p className='md:text-lg font-light text-[#a4a0a0]'>Student Rating</p>
                    </div>

                    <div className="block h-12 w-px mx-6 bg-gray-300"></div>

                    <div className="flex flex-col text-center">
                        <p className='md:text-2xl lg:text-4xl leading-[100%] font-medium text-black'>85%</p>
                        <p className='md:text-lg font-light text-[#a4a0a0]'>Job Placement</p>
                    </div>
                </div>
            </div>

            {/* Right Side  */}
            <div className="w-full rounded-3xl">
                <img 
                    className='
                    w-full rounded-3xl
                    shadow-[
                    -20px_20px_40px_rgba(59,130,246,0.25),
                    20px_25px_50px_rgba(0,0,0,0.25),
                    20px_-20px_40px_rgba(168,85,247,0.25)
                    ]'
                    src={heroImg} 
                    alt="heroImg" 
                />
            </div>

        </div>
    </div>
  )
}

export default Hero