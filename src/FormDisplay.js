import React, {useState} from 'react';
import './index.css'

const FormDisplay = () => {
  const[firstName, setFirstName] = useState('')
  const[email, setEmail] = useState('')
  const[people, setPeople] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault();
    if(firstName && email){
      const person = {firstName , email}

      setPeople((prev) =>{
      return  [...prev, person]
      })
      setFirstName('')
      setEmail('')
    }
  }


  return (
      <div>
    <form onSubmit ={handleSubmit}>
      <div className='users'>

      <label htmlFor="firstName">Name:</label>
     
      <input type="text"
      minLength = "6"
      id="firstName" 
      name="firstName"
      value={firstName}
      onChange={(e) => setFirstName(e.target.value)}
      />
      <br/>
      <br/>
      
      <label htmlFor="email">Email:</label>
      <input type="email"
      id="email" 
      name="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}

      />
      <br/>
      <br/>
      <button>Add person</button>
      </div>
    </form>

    {people.map((person) => {
      const{id, firstName, email}= person
      return(
        < div key={id}>
        <h3>{firstName}</h3>
        <h3>{email}</h3>
        </div>
      )
    })}
    </div>
  )

}

export default FormDisplay
