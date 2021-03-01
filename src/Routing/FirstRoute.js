import React from 'react'
import {Link} from 'react-router-dom'
import Home from './Home'

const FirstRoute = () => {
  return (
    <div>
      <h4>Error</h4>
      <Link to='/'> <button>Home</button> </Link>
    </div>
  )
}

export default FirstRoute
