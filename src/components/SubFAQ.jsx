import React from 'react'
import { BiChevronDown } from 'react-icons/bi'

const SubFAQ = ({title, content, isExpanded, onToggle}) => {
  return (
    <div className={`bg-white shadow-lg border-[2px] border-gray-400/25  px-6 py-4 rounded-2xl overflow-hidden
    transition-all duration-300 ${
        isExpanded ? "max-h-75" : "max-h-18"
    }`}>
        <div className="flex justify-between my-auto items-center cursor-pointer" onClick={onToggle}>
            <div className="font-bold"> {title} </div>
            <BiChevronDown 
                size={25}
                className={`transition-all duration-300 ${
                    isExpanded ? "rotate-180" : ""
                }`}
            />
        </div>

        <div className={`text-[#a4a0a0] py-5 overflow-hidden transition-all duration-300 ${
            isExpanded ? "opacity-100" : "opacity-0"
        }`} >
            {content}
        </div>
    </div>
  )
}

export default SubFAQ