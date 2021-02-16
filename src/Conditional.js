import React, {useState} from 'react'

const Conditional = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(true)

  const message = new Date().toLocaleString();
    
  
  const men = [ 'Mike', 'John', 'Mark']
  // if(isLoggedIn){
  //   message = <h1>Welcome back</h1>
  // }
  // else {
  //   message = <h1>Please Log in</h1>
  // }
  return (
    <>
    {isLoggedIn && <h1>{message}</h1> ||
    
      men.map((man)=> <h2>{man}</h2>)
    }
       <button onClick={()=>setIsLoggedIn(!isLoggedIn)}>changes</button>
</>
 
  )

 
}

export default Conditional
