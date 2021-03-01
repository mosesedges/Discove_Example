import React from 'react'
import ContextChild from './ContextChild'

 export const familyContext = React.createContext()

const ContextParent = () => {

  

  return (
    <familyContext.Provider value={[{
      name:'OBi Martins',
      occupation:'Hit man',
      networth:2000000000,


  },
{
  name:'Shena Jenkins',
  occupation:'Slayer',
  networth:200000000,    

}]}>

      < ContextChild />

    </familyContext.Provider>
  )
}

export default ContextParent
