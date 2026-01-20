import React from 'react'
import Navbar from './Navbar'
import Content1 from "./Content1"

const section1 = (props) => {
  return (
    <div className='bg-gray-200 h-screen flex flex-col'>
      <Navbar />
      <Content1 user={props.user}/>
    </div>
  )
}

export default section1
