import React from 'react';
import { NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
      <li><NavLink exact to={`/`} activeClassName='active'>Home</NavLink></li>
      <li><NavLink exact to={`/about`} activeClassName='active'>About</NavLink></li>
      <li><NavLink exact to={`/login`} activeClassName='active'>login</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;