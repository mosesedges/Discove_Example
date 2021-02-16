import React,{useState} from 'react';
import './index.css';
import data from './Cars';

function App() {

  const[cars, setCars] = useState(data)

  const removeCar = (id) => {
    setTimeout(() => {
let newCars = cars.splice ((car) => car.id !== id)
setCars([{...newCars, name:'Benz'}])
    },2000)
  }

  
  return (
    <>
     <h1>Cars Availible</h1>
     {cars.map((car) => {
      const{name, model, id} = car

      return(
        <div key={id}>
        <h3>{name}</h3>
        <h4>{model}</h4>
        <button onClick={() => removeCar(id)}>remove car</button>
        </div>
      )
     })}
    </>
  );
}

export default App;
