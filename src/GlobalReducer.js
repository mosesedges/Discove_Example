import React, {useContext} from 'react'
import {CountContext} from './UseReducerContext'

const GlobalReducer = () => {

  const count = useContext(CountContext)

  return (
    <div>
      <button onClick={()=>count.dispatch('increment')}>Increment</button>
      <button onClick={()=>count.dispatch('decrement')}>Decrement</button>
      <button onClick={()=>count.dispatch('reset')}>Reset</button>
    </div>
  )
}

export default GlobalReducer
