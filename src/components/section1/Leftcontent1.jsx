import React from 'react'
import { MdArrowOutward } from "react-icons/md";

const Leftcontent1 = () => {
  return (
    <div className=' flex-1 bg-gray-200 flex flex-col justify-between'>
        <div>
            <h1 className='text-6xl py-3.5'><b>Prospective customer segmentation</b></h1>
            <span className=''>Depending on customer satisfaction and access to banking products, potential target audience can be divided into 3 groups</span>
        </div>
        <div><MdArrowOutward size={70}/></div>
    </div>
  )
}

export default Leftcontent1
