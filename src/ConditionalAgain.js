import React, {useState, useEffect} from 'react'


const url = 'https://api.github.com/users/QuincyLarson'



const ConditionalAgain = () => {
  const[isLodding, setIsLodding] = useState(true);
  const[isError, setIsError] = useState(false);
  const[user, setUser] = useState('talk');

const getUser = async () => {
const res = await fetch(url);
if(res.status >= 200 && res.status <= 299 ){
    const user = await res.json();   
const {login} = user
setUser(login)
setIsLodding(false)

}else {
  setIsLodding(false);
  setIsError(true)

}


}
  useEffect(() => {
    getUser()


    
  }, [])

  if(isLodding){
    return(
      <h1>Lodding...</h1>
    )
  }

  if(isError && !isLodding){
    return(
    <img src='./error.jpg' alt="Error picture" width='400px'/>
    )
  }
  return (
    <h1>
  {user}
    </h1>
  )
}

export default ConditionalAgain
