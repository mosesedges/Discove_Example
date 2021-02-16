import React, {useState} from 'react'


const FormDisplayOne = () => {
  const[person, setPerson] = useState({firstName:'', lastName:'', email:'', age:''});
  const[people, setPeople] = useState([]);

  const handleChange = (e) => {

    const name = e.target.name;
    const value = e.target.value;

  setPerson( {...person, [name]:value})

  }


  const HandleSubmit = (e) => {
    e.preventDefault()

    if(person.firstName && person.email && person.lastName && person.age){

      const newPerson = {...person,  time:new Date().toLocaleString()};


        setPeople([...people, newPerson])
    
    }

  
    setPerson({firstName:'', lastName:'', email:'', age:''})
    
  }


  return (
    <div className= 'users'>
    <form onSubmit={ HandleSubmit}>

    <label htmlFor="firstName">Firstname:</label>
    <input type="text" 
    id='firstName' 
    name='firstName'
    max='10'
    value= {person.firstName}
    onChange= {handleChange}/>
    <br/>
    <br/>


    <label htmlFor="lastName">Lastname:</label>
    <input type="lastName" 
    id='lastName' 
    name='lastName'
    minLength='10'
    value= {person.lastName}
    onChange= {handleChange}/>
    <br/>
    <br/>


    <label htmlFor="email">Email:</label>
    <input type="email" 
    id='email' 
    name='email'
    min='25'
    value= {person.email}
    onChange= {handleChange}/>
    <br/>
    <br/>

    <label htmlFor="age">Age:</label>
    <input type="number" 
    id='age' 
    size='6'
    name='age'
    min= '18'
    max= '40'
    value= {person.age}
    onChange= {handleChange}/>

    <br/>
    <br/>
    <button>Add Person</button>
    
    </form>


    {people.map((person)=>{
      const{firstName, lastName, email, age, time} = person
      return(
        <div>
        <h1>{firstName}</h1>
        <h1>{lastName}</h1>
        <email>{email}</email>
        <p>{age} years old</p>

        <pre> Time created: {time}</pre>
        
        </div>
      )
    })}
    </div>
  )
}

export default FormDisplayOne
