import React,{useReducer} from 'react';
import ReducerContextGlobal from './ReducerContextGlobal'



export const MealsContext = React.createContext()


const initialState = {
  Swallow:[],
  Rice:'oya na',
  Drinks:[]
}

const reducer = (state, action) => {
 switch(action){

  case 'SWALLOW':
    return{...state, Swallow:['Eba & Egusi', 'Semovita & okro', 'poundo & ora']}

    case 'RICE':
    return 'Rice & Plantain'

    case 'DRINKS':
    return{...state, Drinks:['Smoothie', 'Wine', 'Beer']}

    default:
      return initialState

}

}



const ReducerContext = () => {

  const [Meal, dispatch]  = useReducer(reducer, initialState)


  return ( 
    <div>
    
    <MealsContext.Provider value={{Meal, dispatch}}>
<h1>mistake to correct.... tobe continued make i no faint for nothing</h1>
    <section>
    {Meal.Swallow.map((item) =>{
      return <h1>{item}</h1>
      
    })}
    </section>

    <section>
    {Meal.Rice}
    </section>

    <ReducerContextGlobal/>
      
    </MealsContext.Provider>

    </div>
  )
}

export default ReducerContext
