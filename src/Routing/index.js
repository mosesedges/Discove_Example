import React from 'react'
import Home from './Home'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import NavRoute from './NavRoute'
import FirstRoute from './FirstRoute'

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const RouterHome = () => {
  return (
    <Router>
    <NavRoute/>
      <Switch>
      <Route exact path='/'>
      <Home/>
      </Route>

      <Route exact path='/About'>
      <About/>
      </Route>

      <Route exact path='/Projects'>
      <Projects/>
      </Route>

      <Route exact path='/Contact'>
      <Contact/>
      </Route>

      <Route path='*'>
      <FirstRoute/>
      </Route>


      </Switch>
    </Router>
  )
}

export default RouterHome
