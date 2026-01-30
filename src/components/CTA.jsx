import React from 'react'
import { HiOutlineCheck } from 'react-icons/hi'
import { IoIosArrowRoundForward } from 'react-icons/io'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const CTA = () => {
  return (
    <div className='w-full bg-gradient-to-br from-[#5650FB] to-[#7C3EFB] py-20'>
        <h2 className='text-2xl lg:text-4xl text-center text-white leading-[120%]'>Ready to Start Your Journey?</h2>
        <p className='text-lg lg:text-xl md:w-[800px] md:m-auto text-center my-3 text-white/90'>
            Limited seats available for the next cohort starting February 15, 2026
        </p>
        <div className="w-[90%] lg:w-[80%] m-auto bg-white my-15 rounded-3xl p-5 md:p-10 lg:p-15 flex flex-col items-center">
            <p className='inline-flex items-center mb-9 gap-2 text-[#1E5BFF] bg-[#EAF2FF] px-4 py-2 rounded-full'>
                Early Bird Discount
            </p>
            <div className="flex gap-2.5 items-baseline text-black text-4xl lg:text-7xl">
                <span className='line-through text-[#a4a0a0] text-2xl lg:text-3xl'>MWK97800</span>
                <p>MWK57800</p>
            </div>
            <p className='text-center md:text-lg text-[#a4a0a0]'>One-time payment or flexible installments available</p>
            <div className="flex flex-col my-6 md:flex-row items-center justify-between md:gap-16">
                <div className="">
                    <div className="flex items-start my-3 gap-3 text-black md:text-lg leading-relaxed">
                        <HiOutlineCheck
                            className="text-green-500 mt-1 shrink-0"
                            size={27}
                        />
                        <span>12 weeks of live instruction</span>
                    </div>
                    <div className="flex items-start my-3 gap-3 text-black md:text-lg leading-relaxed">
                        <HiOutlineCheck
                            className="text-green-500 mt-1 shrink-0"
                            size={27}
                        />
                        <span>All course materials & resources</span>
                    </div>
                    <div className="flex items-start my-3 gap-3 text-black md:text-lg leading-relaxed">
                        <HiOutlineCheck
                            className="text-green-500 mt-1 shrink-0"
                            size={27}
                        />
                        <span>10+ hands-on projects</span>
                    </div>
                    <div className="flex items-start my-3 gap-3 text-black md:text-lg leading-relaxed">
                        <HiOutlineCheck
                            className="text-green-500 mt-1 shrink-0"
                            size={27}
                        />
                        <span>Certificate of completion</span>
                    </div>
                    
                </div>

                <div className="">
                    <div className="flex items-start my-3 gap-3 text-black md:text-lg leading-relaxed">
                        <HiOutlineCheck
                            className="text-green-500 mt-1 shrink-0"
                            size={27}
                        />
                        <span>Career coaching & support</span>
                    </div>
                    <div className="flex items-start my-3 gap-3 text-black md:text-lg leading-relaxed">
                        <HiOutlineCheck
                            className="text-green-500 mt-1 shrink-0"
                            size={27}
                        />
                        <span>Lifetime community access</span>
                    </div>
                    <div className="flex items-start my-3 gap-3 text-black md:text-lg leading-relaxed">
                        <HiOutlineCheck
                            className="text-green-500 mt-1 shrink-0"
                            size={27}
                        />
                        <span>Resume & portfolio review</span>
                    </div>
                    <div className="flex items-start my-3 gap-3 text-black md:text-lg leading-relaxed">
                        <HiOutlineCheck
                            className="text-green-500 mt-1 shrink-0"
                            size={27}
                        />
                        <span>Job placement assistance</span>
                    </div>
                    
                </div>

            </div>
            <button className='flex flex-row w-full my-5 items-center justify-center gap-4 bg-[#1E5BFF] py-2 px-6 text-white lg:text-lg rounded-lg hover:bg-[#184AE0] transition-colors font-semibold'>
                Secure Your Spot Now
                <IoIosArrowRoundForward 
                    size={25}
                />
            </button>
            <small className='text-[#a4a0a0] md:text-[14px]'>30-day money-back guarantee • Only 5 seats left</small>
        </div>
    </div>
  )
}

export default CTA