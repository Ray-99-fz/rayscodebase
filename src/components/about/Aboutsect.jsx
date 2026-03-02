import React from 'react'

const Aboutsect = () => {
  return (
    <div className='w-full bg-gradient-to-br from-[#F3F8FF] to-white  p-2 md:p-6'>
        <div className="mt-25 w-[90%] lg:w-[80%] m-auto flex flex-col gap-7 pt-10 pb-25">
            <h2 className='font-bold text-xl md:text-2xl lg:text-3xl'>About Us</h2>
            <p className='text-[#a4a0a0] md:text-lg'>
                We are a team of dedicated professional skilled web developers and experienced project managers united by a shared mission: to pass on knowledge and empower the next generation.
            </p>
            <p className='text-[#a4a0a0] md:text-lg'>
                Our focus is on equipping you with practical knowledge, skills and insights that will help you thrive, whether as an independent freelancer or as part of a collaborative team. No matter your path, you’ll gain the confidence to grow within a supportive community of developers.
            </p>
            <p className='text-[#a4a0a0] md:text-lg'>
                Here, you’ll find not only technical guidance but also a safe space to ask questions, share challenges, and learn without judgment. Together, we’re building a culture of growth, inclusivity, and innovation.
            </p>
        </div>
    </div>
  )
}

export default Aboutsect
