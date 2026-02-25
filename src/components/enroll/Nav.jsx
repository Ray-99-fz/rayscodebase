import React, { useState } from 'react'
import { FiMenu } from 'react-icons/fi'
import { HiCode } from 'react-icons/hi'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { IoIosArrowRoundBack } from "react-icons/io";
import { FaWhatsapp } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";

const Nav = ({onCarriculumClick, onTestimonialsClick, onKPIClick, onFAQClick, onLogoClick}) => {
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

            <div className="">
                <button
                    className='cursor-pointer bg-transparent border border-[#e0dcdc] p-2 px-4 text-center rounded-lg text-lg text-black hover:bg-[#e0dcdc]'
                >
                    <Link
                        to='/'
                        className='flex items-center gap-1'
                    >
                        <IoIosArrowRoundBack size={20} />
                        Return
                    </Link>
                </button>
            </div>


                        {/* Side CTA Call & Whatsapp */}
            
                        <div className="bg-blue-600/70 w-[80px] h-[120px] p-3 items-center justify-between 
                        text-white/70 fixed top-[45%] right-0 z-50 
                        rounded-tl-3xl rounded-bl-3xl 
                        flex flex-col gap-5">
            
                            {/* WhatsApp */}
                            <a 
                                href="https://wa.me/265984368805" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="hover:text-white transition-colors cursor-pointer"
                            >
                                <FaWhatsapp size={30} />
                            </a>
            
                            {/* Phone Call */}
                            <a 
                                href="tel:+265984368805"
                                className="hover:text-white transition-colors cursor-pointer"
                            >
                                <BsTelephone size={30} />
                            </a>
            
                        </div>
            

            
        </div>
    </div>
  )
}

export default Nav