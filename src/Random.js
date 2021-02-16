import React, {useState, useEffect, useRef} from 'react'

const Random = () => {

  const [randomPerson, setRandomPerson] = useState([])
  const [pageNumber, setPageNumber] = useState(2)
  const [isLoading, setIsLoading] = useState(true)


const pageRef = useRef();

const getData = async () => {
 const res = await fetch(`https://randomuser.me/api?page=${pageNumber}`)
 const data = await res.json()
 console.log(data)

   const newPage = [  ...randomPerson, ...data.results];
  setIsLoading(false)
  setRandomPerson(newPage);
  setPageNumber(data.info.page + 1)
}


// const handleClick= (data) => {
//   const newPage = [  ...randomPerson, ...data.results];

//   setRandomPerson(newPage);
//   setPageNumber(data.info.page + 1)
// }
useEffect(() => {

getData()
},[])



  return (
    <div>
{isLoading? <h1>Loading... </h1>: ''}

      {randomPerson.map((person) => {
        const{name, id, picture} = person

      return(
        <div key = {id}>
        <h1>{name.first}</h1>
        <h1>{name.last}</h1>
        <img src={picture.large} alt='photo of a person'/>
        </div>
      )

      })}

      
        <button onClick={()=>getData()}> Add users</button>
    </div>
  )
}

export default Random

