import React, {useEffect, useRef, useState} from 'react'

const UserefOne = () => {

  const [seconds, setSeconds] = useState(0);
 

  const inputRef = useRef();

  

 
useEffect(()=>{

  inputRef.current = setInterval(() => {
    setSeconds(prev => prev + 1)
  },1000);

return()=>{
  clearInterval(inputRef.current)

}
  

},[])




  return (
    <div>
      
    
  
    <h1>{seconds}</h1>
  
    <button  onClick = {()=>clearInterval(inputRef.current)} type="button"> stop Now</button>

    </div>
  )
}

export default UserefOne
