import React,{useState, useEffect} from 'react';
import './index.css';


const url = 'https://api.github.com/users'

const GithubUsers = () => {

  const[users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json()
    console.log(users);
    setUsers(users)

  }

  useEffect(() => {
    getUsers();
    
  }, [])


  return (
    <>
    <h1  className='title'>Github Users</h1>
    {users.map((user) => {
      const{id, login, avatar_url, html_url } = user

    return(
<div className='users'>
      <ul>
      <li key={id}>
      <img  className='image' src={avatar_url} alt={login}/>
      <h4 className='name'>{login}</h4>
      <a href={html_url}>profile</a>
      </li>
      </ul>
      </div>
    )
    })}
      
    </>
  )
}

export default GithubUsers

