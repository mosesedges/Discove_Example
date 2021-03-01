import React from 'react'

const Child = (props) => {


const handleClick = () =>{

  const newPeople = props.people.filter(person => person !== props.name )

 props.upDate(newPeople)
}


  return (
    <div>
      
<h2>person : {props.name} {props.upDate}<button onClick={handleClick}>remove me</button></h2>

    </div>
  )
}

export default Child
