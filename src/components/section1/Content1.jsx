import React from 'react'
import Leftcontent1 from './Leftcontent1'
import Rightcontent1 from './Rightcontent1'

const Content1 = (props) => {
  return (
    <div className='bg-gray-200 px-11 py-4 flex gap-10 flex-1 overflow-hidden h-3/6'>
      <Leftcontent1 />
      <Rightcontent1 user={props.user}/>
    </div>
  )
}

export default Content1
