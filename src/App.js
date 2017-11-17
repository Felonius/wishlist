import React, { Component } from 'react';
import Wish from './components/Wish';
import Header from './components/Header';
import Footer from './components/Footer';
import './resources/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <main>
          <article> 
            <h2>Page title here</h2>
            <p>Here's some text in an article.</p>
          </article>
          <Wish />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
