import React from 'react'
import RightCard from "./RightCard"

const Rightcontent1 = (props) => {
  return (
    <div id='scrollBar' className='p-2.5 flex flex-nowrap gap-4 overflow-x-auto'>
      {props.user.map(function(elem , idx){
        return <RightCard key={idx} id={idx} img={elem.img} tag={elem.tag} intro={elem.intro}/>
      })}
    </div>
  )
}

export default Rightcontent1
