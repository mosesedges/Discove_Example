import React,{useReducer} from 'react'


const initialState = {
  morning:[],
  afternoon:[],
  evening:[]
}

const reducer = (state, action ) => {

  switch(action.type ){

    case 'BREAKFAST':
      return {...state, afternoon:[{first:'Scrambled Eggs' , second:'Pap & Beancake', third:'Tea and Bread', fourth:'Moi-Moi', fifth: 'salad'}]}

case 'LUNCH':
      return {...state, evening:['Rice' , 'Beans', 'Moi-Moi', 'Swallow', 'Yam', 'protean']}

default: 
      return state

      
  }

}

const ReducerHook = () => {

  const [meals, dispatch] = useReducer(reducer, initialState)



  return (
    <div>
    <ul>
    <li>
      {meals.morning}
      <br/>
      {meals.afternoon.map((item)=>{
        return(
          <section key = {item.first}>
<h3>{item.first}</h3>
<h3>{item.second}</h3>
<h3>{item.third}</h3>
<h3>{item.fourth}</h3>
<h3>{item.fifth}</h3>
</section>
        ) 
      })}
      <br/>
      {meals.evening.map((item)=>{
        return <h1 >{item}</h1>
      })}

      </li>
    </ul>

    <h2 onClick={() => dispatch({type:'LUNCH'})}>MEALS </h2>

    </div>
  )
}

export default ReducerHook
