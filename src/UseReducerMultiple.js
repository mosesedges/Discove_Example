import React, {useReducer} from 'react'

const initialState = 0

const reducer = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1 
    case 'decrement':
      return state - 1 
    case 'reset': 
      return initialState
    default :
      return state 
  }
}



const UseReducerMultiple = () => {

const [count, dispatcher] = useReducer(reducer,initialState);
const [count2, dispatcher2] = useReducer(reducer,initialState);

  return (
    <div>
  <h1 style={{color:'navy', padding:'50px'}}>{count}   {count2}</h1>
      <button onClick = {() => dispatcher('increment')}>increment</button>
      <button onClick = {() => dispatcher('decrement')}>decrement</button>
      <button  onClick = {() => dispatcher('reset')}>reset</button>

      <button onClick = {() => dispatcher2('increment')}>increment</button>
      <button onClick = {() => dispatcher2('decrement')}>decrement</button>
      <button  onClick = {() => dispatcher2('reset')}>reset</button>
    </div>
  )
}

export default UseReducerMultiple
