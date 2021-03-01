import React,{useReducer} from 'react'
import GlobalReducer from './GlobalReducer'

export const CountContext = React.createContext()

const initialState = 5;

const reducer = (state, action) => {

  switch(action){
    case 'increment':
      return state + 5
    case 'decrement':
      return state - 5 
    case 'reset':
      return initialState
    default:
      return state         
  }
}



const UseReducerContext = () => {

  const [count, dispatcher] = useReducer(reducer, initialState);


  return (
    <CountContext.Provider value={{counter:count, dispatch:dispatcher}}>
    <div>
      <h1>{count}</h1>
    <GlobalReducer/>
      </div>
    </CountContext.Provider>

  )
}

export default UseReducerContext

