import React from 'react'
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Counter from './pages/Counter'
import Gallery from './pages/Gallery'

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand navbar-brand m-2">
        <ul className="navbar-nav">
          <li>
            {''}
            <Link className="nav-link" to={'/home'}>
              Home
            </Link>
          </li>

          <li>
            {''}
            <Link className="nav-link" to={'/about'}>
              About
            </Link>
          </li>

          <li>
            {''}
            <Link className="nav-link" to={'/counter'}>
              Counter
            </Link>
          </li>
          <li>
            {''}
            <Link className="nav-link" to={'/gallery'}>
              Gallery
            </Link>
          </li>
        </ul>
      </nav>
      <div className="container">
        <Switch>
          <Route path="/" compnent={Home}></Route>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/counter" component={Counter}></Route>
          <Route path="/gallery" component={Gallery}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
