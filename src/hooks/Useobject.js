import React,{useState} from 'react'

const Useobject = () => {
  const[cars, setCars] = useState({ id:1,
    name:'Toyota Hilux',
    model:2021,
    location:'Tokyo',
    export: 'Nigeria',
    price: ' $2,000,000'
  }
 )

  const handleChange = () => {
    setCars({ ...cars, name:'Benz', model:'1985'})
  }
 const {name,location, model, price} = cars
  

  return(
    <div>
    <h1>{name} </h1> 
    <h4>{location}</h4>
    <h4>{model}</h4>
    <h4>{price}</h4>
   
     
      <button  onClick={() => handleChange()}>change location</button>
    </div>
  )
}

export default Useobject
 