import React, {useState, useEffect} from 'react'

const FuntionalMouse = () => {
const[x,setX] = useState(0)
const[y,setY] = useState(0)

const mousePosition = e => {
  setX(e.clientX)
  setY(e.clientY)
  console.log('calculating things')
}
 useEffect(() => {
   window.addEventListener('mousemove', mousePosition)

   return () => {
   window.removeEventListener('mousemove', mousePosition)  
   }
 },[])


  return (
    <div>
     x-{x}
     y-{y} 
    </div>
  )
}

export default FuntionalMouse
