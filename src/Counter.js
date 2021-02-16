import React,{useState} from 'react'

const Counter = () => {

  const[count, setCount] = useState(0);

  const handleClick= () => {
    setTimeout(() => { 
    setCount((prevState) => {
      return prevState + 1;
    })

    }, 2000);
  }
  return (
  <div>
    <h1>Advance counter</h1> 
    <h1>{count}</h1>
    <br/>
    <button onClick={()=>handleClick()}>Increase count</button>
  </div>
  )
}

export default Counter
