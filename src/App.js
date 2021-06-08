import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Post from './Posts/Manage'
import Podcast from './Podcast/Manage'
import Authentication from './Authentication/Manage'
import Discussion from './Discussion/Manage'
import News from './News/Manage'
import NavigationBar from './Universal/NavigationBar'
import Footer from './Universal/Footer'
import './Assets/Style/Main.css'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/auth'>
            <NavigationBar />
            <Authentication />
            <Footer />
          </Route>

          <Route path='/discussion'>
            <NavigationBar />
            <Discussion />
            <Footer />
          </Route>

          <Route path='/podcast'>
            <NavigationBar />
            <Podcast />
          </Route>

          <Route path='/news/'>
            <NavigationBar />
            <News />
            <Footer />
          </Route>

          <Route path='/'>
            <NavigationBar />
            <Post />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
