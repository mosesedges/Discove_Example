import React,{useContext} from 'react'
import {familyContext} from './ContextParent'

const ContextChild = () => {

  const family = useContext(familyContext)
  return (
    <h1>
      {family.map((item)=>{
return(
<ol>
<li>{item.name}</li>
<li>{item.occupation}</li>
<li>{item.networth}</li>
</ol>
) 
      })}
    </h1>
  )
}

export default ContextChild
