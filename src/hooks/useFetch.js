import {useState, useEffect} from 'react'



export const useFetch = (url) => {
  
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [products, setProducts] = useState([]);


  const getProduct = async () =>{
 const response = await fetch(url);
 if(response.status >= 200 && response.status <= 399){
 const data = await response.json();
 setProducts(data);
 setIsLoading(false)
 setIsError(false)

 }else{
  setIsLoading(false);
  setIsError(true)
 }


  }

  useEffect(()=>{

    getProduct()
  },[url])

  return {isLoading, isError, products}
}