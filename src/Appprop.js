import React from 'react';
import Hoses from './Hoses';

const Appprop = () => {

  const d= new Date();
   const hour = d.toLocaleString()

   
  return (
    <div>
  
  <Hoses  time={hour}  date='2021' office= 'Oxford hall' ladies='...jane, Mercy, Alisia'>
  <pre>Whats ever we do now 
      we shall reap it reward soon</pre>
  </Hoses>
  <Hoses networth='$12 billon' office='Central London' business='Car dealer'/>
  
    </div>
  )
}

export default Appprop
