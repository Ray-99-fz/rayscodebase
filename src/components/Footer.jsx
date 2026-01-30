import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { FiFacebook } from 'react-icons/fi'
import { ImYoutube } from 'react-icons/im'
import { IoLogoTiktok } from 'react-icons/io5'

const Footer = () => {
  return (
    <div className='bg-[#0B1220] w-full pb-8'>
        <div className="w-[90%] lg:w-[80%] m-auto pt-15 pb-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            
            <div className="flex flex-col gap-3">
                <h4 className='text-white text-lg lg:text-xl font-bold'>Ray's Codebase</h4>
                <p className=' text-[#94A3B8]'>Empowering the next generation of web developers with practical skills, 
                industry best practices, and real-world experience.</p>
            </div>

            <div className="flex flex-col gap-3">
                <h4 className='text-white text-lg lg:text-xl font-bold'>Quick Links</h4>
                <ul className='flex flex-col text-[#94A3B8] gap-3 cursor-pointer'>
                    <li>About Us</li>
                    <li>Caricullum</li>
                    <li>Success Stories</li>
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <h4 className='text-white text-lg lg:text-xl font-bold'>Support</h4>
                <ul className='flex flex-col text-[#94A3B8] gap-3 cursor-pointer'>
                    <li>FAQ</li>
                    <li>Contact Us</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="flex flex-col gap-3">
                <h4 className='text-white text-lg lg:text-xl font-bold'>Connect With Us</h4>
                <ul className='flex flex-row text-[#94A3B8] gap-4 cursor-pointer'>
                    <li> <FiFacebook size={22} /> </li>
                    <li> <IoLogoTiktok size={22} /> </li>
                    <li> <AiOutlineInstagram size={22} /> </li>
                    <li> <ImYoutube size={22} /> </li>
                </ul>
                <p className='text-[#94A3B8] cursor-pointer'>rayscodebase@gmail.com</p>
            </div>

            
        </div>
            <br />
            <hr 
                className='mt-px border-[#94A3B8] w-[90%] lg:w-[80%] m-auto block'
            />
            <br />
            <small className='text-[#94A3B8] block text-center text-lg'>© 2026 Ray's Codebase. All rights reserved.</small>
    </div>
  )
}

export default Footer