import React from 'react';
import Wishlist from './components/Wishlist';
import Header from './components/Header';
import Footer from './components/Footer';
import './resources/css/App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <article> 
          <h2>Page title here</h2>
          <p>Here's some text in an article.</p>
        </article>
        <Wishlist />
      </main>
      <Footer />
    </div>
  )
}

export default App;