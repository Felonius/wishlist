import React, { Component } from 'react';
import logo from './logo.svg';
/*import './App.css';*/
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
      name: 'NIKON D5200 DSLR CAMERA (BLACK) WITH 18-55MM AF-S DX VR NIKKOR LENS',
      url: 'https://www.buzzgadgets.com.au/nikon-d5200-dslr-camera-black-with-18-55mm-vr-nikkor-lens.html',
      img: 'https://www.buzzgadgets.com.au/media/catalog/product/cache/1/image/427x427/9df78eab33525d08d6e5fb8d27136e95/d/5/d5200-front.jpg',
      price: '845',
      location: 'https://www.buzzgadgets.com.au/',
    },
    {
      name: 'Magic Tray Bedside Touch Lamp',
      url: 'https://www.yellowoctopus.com.au/collections/gadgets/products/magic-tray-lamp-led-intelligent-bedside-lamp-sensor-night-light-desk-lamp',
      img: 'https://cdn.shopify.com/s/files/1/2046/8557/products/yellow-octopus-magic-tray-bedside-touch-lamp-yellow-octopus-31144636042_2000x2000.jpg?v=1508287867',
      price: '38.99',
      location: 'Yellow Octopus',
    },
    {
      name: 'Mini Elbow L Shape Strong Magnetic 4.3A Fast Charging Type-C Adapter Converter',
      url: 'https://www.ebay.com.au/itm/Mini-Elbow-L-Shape-Strong-Magnetic-4-3A-Fast-Charging-Type-C-Adapter-Converter/122784315976?_trkparms=aid%3D111001%26algo%3DREC.SEED%26ao%3D1%26asc%3D20160908105057%26meid%3D35d35ef343ef4f09a9f3fed7b11d478b%26pid%3D100675%26rk%3D3%26rkt%3D15%26sd%3D331728387207&_trksid=p2481888.c100675.m4236&_trkparms=pageci%253A957676b7-caa6-11e7-81d2-74dbd180c739%257Cparentrq%253Ac3e7791715f0a7e13400bd42fffd6e7b%257Ciid%253A1',
      img: 'https://i.ebayimg.com/images/g/izcAAOSwGPxZ-EVZ/s-l1600.jpg',
      price: '10.79',
      location: 'Ebay seller apore',
    },
    {
      name: 'Nifty home controller thingy',
      url: 'https://sevenhugs.com/',
      img: 'https://media1.popsugar-assets.com/files/thumbor/6Ifj1Cc2NwCMjIbJMfOv7e5YBxw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/01/04/995/n/1922507/18be59e5fdaf863d_smartfinal/i/Your-connected-home-continues-get-smarter.jpg',
      price: '229',
      location: 'Sevenhugs',
    },
    {
      name: 'SEED LIGHTS – SILVER WIRE 10M',
      url: 'https://thefairylightshop.com.au/product-category/seed-fairy-lights/',
      img: 'https://thefairylightshop.com.au/wp-content/uploads/2015/07/g6xv2IgzTH9jV45qKDzom2eXq3xwf3nRwDV3DBRudf4-325x390.jpeg',
      price: '65',
      location: 'The Fairylight Shop',
    },],
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">WishList</h1>
          <nav>
            <ul>
            <li><a href='/'>Home</a></li>
            <li><a href='/about'>About</a></li>
            <li><a href='/login'>login</a></li>
            </ul>
          </nav>
        </header>
        <main>
          <article> 
            <h2>Page title here</h2>
            <p>Here's some text in an article.</p>
          </article>
          <List {...dummyList} />
        </main>
        <footer>
          <h3>Some footer title</h3>
          <p>
            Footer links and disclaimer content</p>
        </footer>
      </div>
    );
  }
}

export default App;
