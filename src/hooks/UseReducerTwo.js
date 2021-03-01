import React, {useReducer} from 'react'

const timer = {
  firstTimer: 0,
  secondTimer : 2
}

const counter = (state, action) => {
switch(action.type){

  case 'increment':
    return {...state, firstTimer:state.firstTimer + action.value}

  case 'decrement':
    return {...state, firstTimer:state.firstTimer - action.value}

  case 'increment2':
    return {...state, secondTimer:state.secondTimer + action.value}

  case 'decrement2':
    return {...state, secondTimer:state.secondTimer - action.value}

  case 'reset':
    return timer

  default:
    return state



}

}


const UseReducerTwo = () => {

const[count, dispatcher] = useReducer(counter, timer)



  return (
    <div>

    <h1>FIRST-TIMER {count.firstTimer}</h1>
    <h1>SECOND-TIMER {count.secondTimer}</h1>

      <button onClick = {()=> dispatcher({type:'increment' ,value: 1 })}>increment</button>

      <button onClick = {()=> dispatcher({type:'decrement' ,value: 1 })}>decrement</button>

      <button onClick = {()=> dispatcher({type:'increment2' ,value: 2 })}>increment2</button>

      <button onClick = {()=> dispatcher({type:'decrement2' ,value: 2 })}>decrement2</button>

      <button onClick = {()=> dispatcher({type:'reset'})}>reset</button>
    </div>
  )
}

export default UseReducerTwo
