import React,{useState} from 'react'
import FuntionalMouse from './FuntionalMouse'

const DisplayMouse = () => {

  const[display, setDisplay] = useState(true)


  return (
    <div>
      <button onClick={() => setDisplay(!display)}>click here</button>
    {display && <FuntionalMouse/>}
  
    </div>
  )
}

export default DisplayMouse
