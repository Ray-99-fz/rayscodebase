import { section } from 'framer-motion/client'
import React from 'react'
import Form from './Form'

const Enrollfeild = () => {
  return (
    <section className='w-full bg-gradient-to-br from-[#F3F8FF] to-white  p-2 md:p-6'>
        <div className="h-full mt-25 w-[90%] lg:w-[80%] m-auto">
            <div className="w-full min-h-[500px]  rounded-3xl my-10 shadow-xl flex flex-col md:flex-row">

                {/* Right Side */}
                <div className="
                    bg-gradient-to-br from-[#5650FB] to-[#7C3EFB] 
                    rounded-tl-3xl rounded-tr-3xl
                    md:rounded-tr-none md:rounded-bl-3xl
                    basis-[35%] md:basis-[50%] p-6
                    flex md:pt-15 justify-center text-left lg:text-center
                    ">
                    <div className="flex flex-col  justify-center w-full">
                        <h2 className="text-white text-xl md:text-3xl lg:text-5xl leading-[105%] font-semibold">
                        Ray's Codebase
                        </h2>
                        <p className="text-black text-lg lg:text-xl mt-1">
                        reach out to our team for any assistance or questions
                        </p>
                    </div>
                </div>



                {/* Left Side */}

                <div className="p-6">
                    <Form />
                    <small className='text-[#a4a0a0] text-center m-auto block'>By submitting this form, you agree to receive feedback from Ray's Codebase.</small>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Enrollfeild