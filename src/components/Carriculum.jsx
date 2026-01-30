import React from 'react'
import { IoMdCheckmarkCircleOutline } from 'react-icons/io'

const Carriculum = () => {
  return (
    <div className='w-full bg-[#F3F8FF]'>
        <div className="w-[90%] lg:w-[80%] m-auto py-25">
            <h2 className='text-2xl lg:text-4xl text-center leading-[120%]'>Course Curriculum</h2>
            <p className='text-lg lg:text-xl md:w-[800px] md:m-auto text-center my-3 text-[#a4a0a0]'>
                A structured 12-week journey covering everything from fundamentals to professional development practices.
            </p>

            <div className="grid md:grid-cols-3 gap-6 my-20">

                {/* Grid 1 */}
                <div className="bg-white p-12 rounded-3xl hover:shadow-2xl">
                    <p className='inline-flex items-center gap-2 text-[#FFFFFF] bg-[#1E5BFF] px-4 py-2 rounded-full'>
                        Month 1
                    </p>
                    <h3 className='text-2xl lg:text-4xl my-8 font-semibold'>Foundations & Design</h3>
                    
                    {/* Items */}
                    <div className="flex items-start my-8 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Approaches to web dev & thought behind it</span>
                    </div>
                    <div className="flex items-start my-8 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Present tech available for web development</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>HTML elements & web page structure</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>CSS properties & modern styling</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Flexbox & Grid layouts</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Mobile responsiveness</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Google Fonts & Font Awesome</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Figma design tools</span>
                    </div>
                </div>

                {/* Grid 2 */}
                <div className="bg-white p-12 rounded-3xl hover:shadow-2xl">
                    <p className='inline-flex items-center gap-2 text-[#FFFFFF] bg-[#1E5BFF] px-4 py-2 rounded-full'>
                        Month 2
                    </p>
                    <h3 className='text-2xl lg:text-4xl my-8 font-semibold'>JavaScript & Browser APIs</h3>
                    
                    {/* Items */}
                    <div className="flex items-start my-8 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>JavaScript basics & syntax</span>
                    </div>
                    <div className="flex items-start my-8 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Functions & DOM manipulation</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Arrays, Objects & conditional statements</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Loops & forEach methods</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>ES6 modules</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Browser localStorage & indexedDB</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Browser console & DevTools</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>HTTP requests, responses, routes & queries (theory)</span>
                    </div>
                </div>

                                {/* Grid 3 */}
                <div className="bg-white p-12 rounded-3xl hover:shadow-2xl">
                    <p className='inline-flex items-center gap-2 text-[#FFFFFF] bg-[#1E5BFF] px-4 py-2 rounded-full'>
                        Month 3
                    </p>
                    <h3 className='text-2xl lg:text-4xl my-8 font-semibold'>Professional Workflows</h3>
                    
                    {/* Items */}
                    <div className="flex items-start my-8 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Git & GitHub version control</span>
                    </div>
                    <div className="flex items-start my-8 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>SCRUM & Kanban project management</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Team collaboration projects</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Industry best practices</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Final portfolio project</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Code review & debugging techniques</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Deployment strategies</span>
                    </div>
                    <div className="flex items-start my-6 gap-3 text-[#9CA3AF] md:text-lg lg:text-xl leading-relaxed">
                        <IoMdCheckmarkCircleOutline
                            className="text-green-500 mt-1 shrink-0"
                            size={22}
                        />
                        <span>Career preparation & next steps</span>
                    </div>
                </div>


            </div>
        </div>
    </div>
  )
}

export default Carriculum