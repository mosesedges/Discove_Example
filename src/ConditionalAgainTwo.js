import React, {useState, useEffect} from 'react'




const url = 'https://api.github.com/users/QuincyLarson'

const ConditionalAgainTwo = () => {
  
  const [isLodding, setIsLodding] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('empty');

  const getUser = async () => {

    const res = await fetch(url);

    if(res.status >= 200 && res.status <= 299) {
      
      const user = await res.json()

      const {login} = user

      setUser(login)
      setIsLodding(false)

    }else{
      setIsLodding(false)
      setIsError(true)
      
    }

  }


  useEffect(() => {
    getUser()
    
  }, [])

  if(isLodding){
    return <h1> loading...</h1>
  }

  if(isError && !isLodding){
    return <h1> Aha Error o ...</h1>
  }
  return (
    <h2>
      {user}
    </h2>
  )
}

export default ConditionalAgainTwo
