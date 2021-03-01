import React,{useContext} from 'react'
import {MealsContext} from './ReducerContext' 

const ReducerContextGlobal = () => {


  const Meal = useContext(MealsContext)


  return (
    <div>
      <button onClick={() => Meal.dispatch('SWALLOW')}>SWALLOW</button>
      <button onClick={() => Meal.dispatch('DRINKS')}>DRINKS</button>
      <button onClick={() => Meal.dispatch('RICE')}>RICE</button>
    </div>
  )
}

export default ReducerContextGlobal
