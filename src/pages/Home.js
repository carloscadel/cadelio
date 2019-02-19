import React, { Component } from 'react'
import NavBar from '../partials/NavBar'

export default class Home extends Component {
  render() {
    return (
      <div className='home'>
        <header className='home-header'>
          <NavBar />
          <h1>Carlos Cazallas Delfa</h1>
          <h3>Frontend Web Developer</h3>
        </header>
      </div>
    )
  }
}
