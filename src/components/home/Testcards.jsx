import React from 'react'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'


const Testcards = ({rating, text, name, initials, career}) => {
  return (
                    <div className="bg-[#F3F8FF] rounded-3xl p-8 cursor-pointer flex-shrink-0 w-[350px]">
  <div className="flex gap-1.5">
    {Array.from({ length: 5 }).map((_, index) =>
      index < rating ? (
        <AiFillStar key={index} size={20} className="text-yellow-400" />
      ) : (
        <AiOutlineStar key={index} size={20} className="text-yellow-400" />
      )
    )}
  </div>

  <p className="text-lg italic my-7">{text}</p>

  <div className="flex items-center gap-5">
  <div className="flex-none h-12 w-12 flex items-center justify-center bg-gradient-to-br from-[#5650FB] to-[#7C3EFB] text-lg text-white rounded-full">
    {initials}
  </div>

  <div>
    <h4 className="text-xl font-bold">{name}</h4>
    <p className="text-lg text-[#a4a0a0]">{career}</p>
  </div>
</div>
</div>
    
  )
}

export default Testcards
