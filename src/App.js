import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Blog from './pages/Blog'
import './styles/App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/portfolio' exact component={Portfolio} />
          <Route path='/blog' exact component={Blog} />
          <Route render={() => <h2>404</h2>} />
        </Switch>
      </div>
    )
  }
}

export default App
