import React from 'react'
import { AiOutlineClockCircle, AiOutlineLaptop, AiOutlinePaperClip, AiOutlineTeam } from 'react-icons/ai'
import { BsBook, BsCode } from 'react-icons/bs'
import { IoIosRibbon } from 'react-icons/io'

const KPI = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] lg:w-[80%] m-auto py-25">
            <h2 className='text-2xl lg:text-4xl text-center leading-[120%]'>Why Choose Our Program?</h2>
            <p className='text-lg lg:text-xl md:w-[800px] md:m-auto text-center my-3 text-[#a4a0a0]'>
                Everything you need to become a professional front-end developer in one comprehensive program.
            </p>

            <div className="grid md:grid-cols-2 grid-rows-3 gap-16 mt-25">
                <div className='border border-px border-gray-300 p-8 rounded-3xl hover:border-[#1E5BFF] hover:shadow-2xl'>
                    <div className="flex flex-col">
                        <div className="bg-[#EAF2FF] rounded-xl h-12 w-12 flex items-center justify-center">
                            <BsCode size={30} color='#1E5BFF' />
                        </div>
                        <h3 className='text-2xl my-4 font-semibold'>Hands-On Projects</h3>
                        <p className='text-xl text-[#a4a0a0]'>Build real-world projects including team collaborations to strengthen your portfolio and practical skills.</p>
                    </div>
                </div>
                <div className='border border-px border-gray-300 p-8 rounded-3xl hover:border-[#1E5BFF] hover:shadow-2xl'>
                    <div className="flex flex-col">
                        <div className="bg-[#EAF2FF] rounded-xl h-12 w-12 flex items-center justify-center">
                            <AiOutlineTeam size={30} color='#1E5BFF' />
                        </div>
                        <h3 className='text-2xl my-4 font-semibold'>Expert Instruction</h3>
                        <p className='text-xl text-[#a4a0a0]'>Learn from Ray and experienced developers who bring industry best practices directly to you.</p>
                    </div>
                </div>

                <div className='border border-px border-gray-300 p-8 rounded-3xl hover:border-[#1E5BFF] hover:shadow-2xl'>
                    <div className="flex flex-col">
                        <div className="bg-[#EAF2FF] rounded-xl h-12 w-12 flex items-center justify-center">
                            <AiOutlineClockCircle size={30} color='#1E5BFF' />
                        </div>
                        <h3 className='text-2xl my-4 font-semibold'>100% Online & Flexible</h3>
                        <p className='text-xl text-[#a4a0a0]'>Study from anywhere with recorded sessions, live support, and a learning pace that fits your schedule.</p>
                    </div>
                </div>
                <div className='border border-px border-gray-300 p-8 rounded-3xl hover:border-[#1E5BFF] hover:shadow-2xl'>
                    <div className="flex flex-col">
                        <div className="bg-[#EAF2FF] rounded-xl h-12 w-12 flex items-center justify-center">
                            <BsBook size={30} color='#1E5BFF' />
                        </div>
                        <h3 className='text-2xl my-4 font-semibold'>Comprehensive Curriculum</h3>
                        <p className='text-xl text-[#a4a0a0]'>From HTML/CSS fundamentals to JavaScript, Git, project management, and professional workflows.</p>
                    </div>
                </div>

                <div className='border border-px border-gray-300 p-8 rounded-3xl hover:border-[#1E5BFF] hover:shadow-2xl'>
                    <div className="flex flex-col">
                        <div className="bg-[#EAF2FF] rounded-xl h-12 w-12 flex items-center justify-center">
                            <AiOutlineLaptop size={30} color='#1E5BFF' />
                        </div>
                        <h3 className='text-2xl my-4 font-semibold'>Browser Developer Tools</h3>
                        <p className='text-xl text-[#a4a0a0]'>Master browser console, DevTools, storage APIs, and debugging techniques used by professionals.</p>
                    </div>
                </div>
                <div className='border border-px border-gray-300 p-8 rounded-3xl hover:border-[#1E5BFF] hover:shadow-2xl'>
                    <div className="flex flex-col">
                        <div className="bg-[#EAF2FF] rounded-xl h-12 w-12 flex items-center justify-center">
                            <IoIosRibbon size={30} color='#1E5BFF' />
                        </div>
                        <h3 className='text-2xl my-4 font-semibold'>Industry Best Practices</h3>
                        <p className='text-xl text-[#a4a0a0]'>Learn SCRUM, Kanban, Git workflows, and professional development methodologies from day one.</p>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default KPI