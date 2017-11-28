import React, { Component } from 'react';
import Wish from './components/Wish';
import Header from './components/Header';
import Footer from './components/Footer';
import './resources/css/App.css';
import store from './store';

class App extends Component {
  render() {
    const wishes = store.getState().wishes.wishes;
    return (
      <div className="App">
        <Header />
        <main>
          <article> 
            <h2>Page title here</h2>
            <p>Here's some text in an article.</p>
          </article>
          {wishes.map((wish) => 
            <Wish key={wish.id} id={wish.id} title={wish.title} description={wish.description} />
          )}
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
