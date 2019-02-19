import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class NavBar extends Component {
  render() {
    return (
      <div className='nav-bar'>
        <NavLink to='/' exact className='nav-link'>
          Home
        </NavLink>
        <NavLink to='/portfolio' exact>
          Portfolio
        </NavLink>
        <NavLink to='/blog' exact>
          Blog
        </NavLink>
      </div>
    )
  }
}
