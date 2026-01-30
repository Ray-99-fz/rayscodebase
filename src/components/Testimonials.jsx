import React from 'react'
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div className='w-full'>
        <div className="w-[90%] lg:w-[80%] m-auto py-25">
            <h2 className='text-2xl lg:text-4xl text-center leading-[120%]'>Success Stories</h2>
            <p className='text-lg lg:text-xl md:w-[800px] md:m-auto text-center my-3 text-[#a4a0a0]'>
                Join hundreds of graduates who've transformed their careers.
            </p>

            {/* Grids */}
            <div className="grid md:grid-cols-3 gap-6 my-20">

                <div className="bg-[#F3F8FF] rounded-3xl p-8">
                    <div className="flex gap-1.5">
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                    </div>
                    <p className='text-lg italic my-7'>"Ray's Codebase gave me the practical skills I needed. 
                    The focus on browser DevTools and real project workflows 
                    made the transition to my first dev job so much smoother!"
                    </p>
                    <div className="flex items-center gap-5">
                        <div className="flex items-center justify-center bg-gradient-to-br from-[#5650FB] to-[#7C3EFB] p-3 h-12 w-12 text-lg text-white rounded-t-full rounded-b-full">HG</div>
                        <div className="">
                            <h4 className='text-xl font-bold'>Harry Gama</h4>
                            <p className='text-lg text-[#a4a0a0]'>Front-End Developer at TechCorp</p>
                        </div>
                    </div>
                </div>

                                <div className="bg-[#F3F8FF] rounded-3xl p-8">
                    <div className="flex gap-1.5">
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                    </div>
                    <p className='text-lg italic my-7'>"Learning SCRUM and Git from the start was game-changing. 
                        Ray teaches you how developers actually work in teams, not just how to code. The online 
                        format was perfect for my schedule."
                    </p>
                    <div className="flex gap-5 items-center">
                        <div className="flex items-center justify-center bg-gradient-to-br from-[#5650FB] to-[#7C3EFB] p-3 h-12 w-12 text-lg text-white rounded-t-full rounded-b-full">
                            IS
                        </div>
                        <div className="">
                            <h4 className='text-xl font-bold'>Ishmael Smart</h4>
                            <p className='text-lg text-[#a4a0a0]'>UI Developer at StartupHub</p>
                        </div>
                    </div>
                </div>

                <div className="bg-[#F3F8FF] rounded-3xl p-8">
                    <div className="flex gap-1.5">
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                        <AiFillStar size={25} className='text-[#FFC107] shrink-0'/>
                    </div>
                    <p className='text-lg italic my-7'>"The team projects were invaluable. 
                        I learned Figma, modern CSS, and JavaScript while building real 
                        portfolio pieces. Now I'm confidently taking on client projects!"
                    </p>
                    <div className="flex gap-5 items-center">
                        <div className="flex items-center justify-center  bg-gradient-to-br from-[#5650FB] to-[#7C3EFB] p-3 h-12 w-12 text-lg text-white rounded-t-full rounded-b-full">
                            NM
                        </div>
                        <div className="">
                            <h4 className='text-xl font-bold'>Najman Mtiko</h4>
                            <p className='text-lg text-[#a4a0a0]'>Freelance Web Developer</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    </div>
  )
}

export default Testimonials