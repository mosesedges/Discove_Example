import React from 'react'

const Hoses = (props) => {
  
    return (
      <div>
        <h1> this is a functional props
        {props.time} 
        {props.date}
        {props.networth}
        {props.office}
        {props.ladies}
        {props.children}
  
        </h1>
      </div>
    )

}

export default Hoses
