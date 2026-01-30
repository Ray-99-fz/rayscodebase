import React, { useState } from 'react'
import SubFAQ from './SubFAQ'
import { faqData } from './Data'

const FAQ = () => {
    const [expendedId, setExpendedId] = useState(null)

    const toggleExpansion = (id) => {
        setExpendedId(expendedId === id ? null : id)
    }

  return (
    <div className='w-full bg-[#F3F8FF]'>
        <div className="w-[90%] lg:w-[80%] m-auto py-25">
            <h2 className='text-2xl lg:text-4xl text-center leading-[120%]'>Frequently Asked Questions</h2>
            <p className='text-lg lg:text-xl md:w-[800px] md:m-auto text-center my-3 text-[#a4a0a0]'>
                Got questions? We've got answers.
            </p>

            <div className="flex flex-col gap-6 w-full my-10">
                {faqData.map((item) => (
                    <SubFAQ 
                        key={item.id}
                        {...item}
                        isExpanded={expendedId === item.id}
                        onToggle={() => toggleExpansion(item.id)}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default FAQ