import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import emailjs from 'emailjs-com'

const Form = () => {

    const [userCredentials, SetUserCredentials] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: "",
        level: ""
    })

    function handleChange(e) {
        const {name, value} = e.target

        SetUserCredentials(prevState => ({
            ...prevState,
            [name] : value
        }))
    }

    const sendEmail = (e) => {
            e.preventDefault();
            console.log(userCredentials)

            emailjs
            .send('service_774qpp6', 'template_q694zb9',{
                firstname: userCredentials.firstname,
                lastname: userCredentials.lastname,
                email: userCredentials.email,
                phone: userCredentials.phone,
                level: userCredentials.level,
                message: userCredentials.message
            } , 'SccjDeQuu94HhbmFo')
            .then(
                () => {
                console.log('SUCCESS!');
                alert("Your request has been submitted successfully.")
                SetUserCredentials({
                    firstname:"",
                    lastname:"",
                    email:"",
                    phone:"",
                    message:"",
                    level: ""
                })
                },
                (error) => {
                console.log('FAILED...', error.text);
                alert("Error submitting your request.")
                },
            );
        };

  return (
    <form className='flex flex-col gap-4 my-5' onSubmit={sendEmail}>
        <div className="flex flex-col lg:flex-row gap-4 ">
            <input 
                type="text" 
                name='firstname'
                id='firstname'
                value={userCredentials.firstname}
                onChange={handleChange}
                required
                placeholder='John'
                className='w-full bg-[#EAF2FF] rounded-lg text-lg border-[#a4a0a0] p-2 focus:outline-[#5650FB]'
            />

            <input 
                type="text" 
                name='lastname'
                id='lastname'
                value={userCredentials.lastname}
                onChange={handleChange}
                required
                placeholder='Doe'
                className='w-full bg-[#EAF2FF] rounded-lg text-lg border-[#a4a0a0] p-2 focus:outline-[#5650FB]'
            />
        </div>

        <input 
            type="email"
            name='email'
            id='email'
            value={userCredentials.email}
            onChange={handleChange}
            required
            placeholder='john@example.com'
            className='w-full bg-[#EAF2FF] rounded-lg text-lg border-[#a4a0a0] p-2 focus:outline-[#5650FB]' 
        />

        <input 
            type="tel"
            name='phone'
            id='phone'
            value={userCredentials.phone}
            onChange={handleChange}
            required
            placeholder='+265123456789'
            className='w-full bg-[#EAF2FF] rounded-lg text-lg border-[#a4a0a0] p-2 focus:outline-[#5650FB]' 
        />

        <select 
            name="level" 
            id="level"
            value={userCredentials.level}
            onChange={handleChange}
            required
            class="w-full max-w-full bg-[#EAF2FF] rounded-lg md:text-[14px] text-lg border-[#a4a0a0] p-2 focus:outline-[#5650FB]"
        >
            <option value="">Select your level</option>
            <option>Complete Beginner - No coding experience</option>
            <option>Some HTML/CSS - Built a simple webpage</option>
            <option>Basic JavaScript - Know variables and functions</option>
            <option>Intermediate - Built small projects</option>
            <option>Career Change - Have experience in other fields</option>
        </select>


        <textarea 
            name="message" 
            id="message"
            value={userCredentials.message}
            onChange={handleChange} 
            rows="5"
            placeholder='What do you hope to achieve with this course? Any specific questions?'
            className='w-full bg-[#EAF2FF] rounded-lg text-lg border-[#a4a0a0] p-2 focus:outline-[#5650FB]'
        >

        </textarea>

        <hr 
            className='w-full m-auto border border-[#e0dcdc] my-4'
        />

        <div className="flex flex-col lg:flex-row gap-4">
            <button 
                className='cursor-pointer bg-gradient-to-br from-[#5650FB] to-[#7C3EFB] rounded-lg text-lg font-semibold text-white p-2 text-center w-full '
            >
                Submit Application
            </button>
            {/* <button
                className='cursor-pointer bg-transparent border border-[#e0dcdc] p-2 text-center rounded-lg text-lg text-black w-full lg:w-[20%] hover:bg-[#e0dcdc]'
            >
                <Link
                    to='/'
                >
                    Cancel
                </Link>
            </button> */}
        </div>

    </form>
  )
}

export default Form