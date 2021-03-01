import React, {useState} from 'react'
import Child from './Child'
import PropTypes from 'prop-types';


const data = ['Mike Dane', 'Sarah Shaw', 'Megan Hansel']

const members = [{
  name:'Lucy',
  age: '32',
  occupation:'pharmacist',
  active: true
},
{
  name:'Megan',
  age: '28',
  occupation:'Teacher',
  active: false
}]

const Parent = () => {
  const [people, setPeople] = useState(data)





  return (
    <div>
    {people.map((person)=>{
      return <div>
      <Child name = {person} upDate = {setPeople} people = {people}/>
      </div>
    })}
      
    </div>
  )
}



members.PropTypes = {
  name:PropTypes.String,
  age: PropTypes.number,
  Active: PropTypes.bool

}

export default Parent
