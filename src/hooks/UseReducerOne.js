import React,{useReducer} from 'react'

const initialState = {
  firstCount : 0,
  secondCount : 0
};

const reducer = (state, action) => {
switch(action.type){
  case 'increment' :
    return {...state, firstCount: state.firstCount + action.value}

  case 'decrement' :
    return {...state, firstCount: state.firstCount - action.value}

    case 'increment2' :
    return {...state, secondCount: state.secondCount + action.value}
  case 'decrement2' :
    return {...state, secondCount: state.secondCount - action.value}
  case 'reset' :
    return initialState ;
  default : 
    return state
}

}


const UseReducerOne = () => {

const [count, dispatcher] = useReducer(reducer,initialState)



  return (
    <div>

    <h1>count {count.firstCount}</h1>
    <h1>count {count.secondCount}</h1>
    <button onClick={()=>dispatcher({type:'increment', value: 1})}>Increase</button> 

    <button onClick={()=> dispatcher({type:'decrement', value: 1 })}>Decrease</button> 
    
    <button onClick={()=>{dispatcher({type:'reset'})}}>Reset</button> 

    <button onClick={()=> dispatcher({type:'increment2', value: 5})}>increment2</button> 
    <button onClick={()=> dispatcher({type:'decrement2', value: 5})}>decrement2</button> 
    </div>
  )
}

export default UseReducerOne
