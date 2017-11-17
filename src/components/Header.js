import React from 'react';
import logo from '../logo.svg';
import Nav from './Nav';

function Header() {
  return (
    <header className="App-header">
      <div className='banner'>
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">WishList</h1>
      </div>
      <Nav />
    </header>
  )
}

export default Header;