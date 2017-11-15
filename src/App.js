import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import './resources/css/App.css';

const dummyList = {
  name: 'Some List',
  description: 'A list is a list is a list',
  list: [
    {
      name: 'Fitbit Charge 2 Heart Rate + Fitness Wristband, Black, Large (US Version)',
      url: 'https://www.amazon.com/Fitbit-Charge-Fitness-Wristband-Version/dp/B01K9S260E/ref=zg_bs_219367011_2?_encoding=UTF8&refRID=WZM8RZC5DG0P5Q8YBK63&th=1',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61bs5PkO6bL._SX522_.jpg',
      price: '25.25',
      location: 'Fitbit',
    },
    {
      name: 'maple syrup',
      url: '',
      img: '',
      price: '15.25',
      location: '',
    },
    {
      name: 'chocolate',
      url: '',
      img: '',
      price: '35.25',
      location: '',
    },
    {
      name: 'brown sugar',
      url: '',
      img: '',
      price: '65.25',
      location: '',
    },
    {
      name: 'banana',
      url: '',
      img: '',
      price: '85.25',
      location: '',
    },
    {
      name: 'cream',
      url: '',
      img: '',
      price: '105.25',
      location: '',
    },],
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WishList</h1>
        </header>
        <aside className='sidebar'>
          <p>Sidebar content</p>
        </aside>
        <main>
          <h2>Page title here</h2>
          <article>
            <p>Here's some text in an article.</p>
            <List {...dummyList} />
          </article>
        </main>
        <footer>
          <p>
            Footer links and disclaimer content</p>
        </footer>
      </div>
    );
  }
}

export default App;
