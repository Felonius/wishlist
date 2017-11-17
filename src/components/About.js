import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../resources/css/App.css';

class About extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <main>
          <article> 
            <h2>About WishList</h2>
            <p>Here's some text in an article.</p>
          </article>
        </main>
        <Footer />
      </div>
    );
  }
}

export default About;
