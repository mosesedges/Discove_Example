import React from 'react'
import {useFetch} from './useFetch'

const url = 'https://fakestoreapi.com/products?limit=20'

const CustomHook = () => {

const{isLoading, isError, products} = useFetch(url)


  if(isLoading){
    return <h4>Loading...</h4>
  }

  if(isLoading){
    return <h4>Loading...</h4>
  }

  if(isError && !isLoading){
    return <h4>Error...</h4>
  }
  return (
 
   
    <div>
     
     
    {products.map((product) => {
      const{description, id, image, price, title } = product;

      return(
        <div key={id}>
        <p>{description}</p>
        <img src={image} alt={title} width='100px'/>
        <h2>${price}</h2>
        <h4>{title}</h4>
        </div>
      )
    })}
    </div>
  )
}

export default CustomHook
