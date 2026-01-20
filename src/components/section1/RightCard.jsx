import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const RightCard = (props) => {
  return (
    <div className='h-full w-2/5 overflow-hidden relative rounded-4xl shrink-0'>
      <img className='h-fit w-full object-cover rounded-4xl' src={props.img} alt="" />
      <div className='h-full w-full top-0 absolute p-10 flex flex-col justify-between'>
        <h2 className='bg-white rounded-full h-10 w-10 flex justify-center text-xl items-center'>{props.id +1}</h2>
        <div>
          <p className='text-white text-lg'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex repellat est recusandae facere unde, sunt dignissimos?</p>
          <div className='mt-10 flex justify-between'>
            <button className='bg-blue-600 text-white rounded-3xl px-8 py-2 text-lg font-medium h-12'>{props.tag}</button>
            <button className='bg-blue-600 text-white rounded-3xl py-4 px-4 font-medium text-lg h-12'><FaArrowRight /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RightCard
