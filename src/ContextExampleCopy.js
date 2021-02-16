import React,{useContext} from 'react'
import {OrangeContext, PineappleContext} from './ContextExample'

const ContextExampleCopy = () => {
  
const orange = useContext(OrangeContext)
const pineapple = useContext(PineappleContext)


  return (
    <div>
    
  <pre>
  You can have this gifts dear child 
  {orange} and
  <br/>
  {pineapple}
  </pre>  

    </div>
  )
}

export default ContextExampleCopy
