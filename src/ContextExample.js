import React from 'react'
import ContextExampleCopy from './ContextExampleCopy'


export const OrangeContext = React.createContext()
export const PineappleContext = React.createContext()

const ContextExample = () => {
  return (
    <div>
    <OrangeContext.Provider value={'knife'}>
    <PineappleContext.Provider value={'cup'}>
    <ContextExampleCopy/>
    </PineappleContext.Provider>
      </OrangeContext.Provider>
      
    </div>
  )
}

export default ContextExample
