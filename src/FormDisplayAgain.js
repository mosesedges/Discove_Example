import React, {useState} from 'react'

const FormDisplayAgain = () => {

  const[firstName, setFirstName] = useState('');
  const[email, setEmail] = useState('');
  const[people, setPeople] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email){

      const person = {id:new Date().getTime().toString(), firstName, email};

      setPeople((prevPeople) =>{
        return [...prevPeople, person]
      })
      setFirstName('');
      setEmail('')

    }
  }




  return (
<div className="users">

    <form onSubmit={handleSubmit}>
      
    <label htmlFor="firstName" >Name:</label>
    <input 
    type="text"
    id="firstName"
    name="firstName"
    value={firstName}
    onChange={(e)=>setFirstName(e.target.value)}/>

    <br/>
    <br/>
    <hr/>

    <label htmlFor="email" >Email:</label>
    <input 
    type="text"
    id="email"
    name="email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}/>

    <br/>
    <br/>

    <button>Add person</button>

    </form>


    {people.map((person) => {
      const {id, firstName, email} = person 

      return(
        <div  key={id}className="users">
        <h1>{firstName}</h1>
        <h3>{email}</h3>
        <hr/>
        </div>
      )
    })}
    </div>
  )
}

export default FormDisplayAgain