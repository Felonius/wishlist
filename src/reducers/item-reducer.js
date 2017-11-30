import { ADD_ITEM, UPDATE_ITEM, DELETE_ITEM, FILTER_ITEMS } from '../actions/item-actions';

const initialState = 
  [
    {
      wishId: 1,
      id: 1,
      name: 'Fitbit Charge 2 Heart Rate + Fitness Wristband, Black, Large (US Version)',
      url: 'https://www.amazon.com/Fitbit-Charge-Fitness-Wristband-Version/dp/B01K9S260E/ref=zg_bs_219367011_2?_encoding=UTF8&refRID=WZM8RZC5DG0P5Q8YBK63&th=1',
      img: 'https://images-na.ssl-images-amazon.com/images/I/61bs5PkO6bL._SX522_.jpg',
      price: '25.25',
      location: 'Fitbit',
    },
    {
      wishId: 1,
      id: 2,
      name: 'NIKON D5200 DSLR CAMERA (BLACK) WITH 18-55MM AF-S DX VR NIKKOR LENS',
      url: 'https://www.buzzgadgets.com.au/nikon-d5200-dslr-camera-black-with-18-55mm-vr-nikkor-lens.html',
      img: 'https://www.buzzgadgets.com.au/media/catalog/product/cache/1/image/427x427/9df78eab33525d08d6e5fb8d27136e95/d/5/d5200-front.jpg',
      price: '845',
      location: 'https://www.buzzgadgets.com.au/',
    },
    {
      wishId: 1,
      id: 3,
      name: 'Magic Tray Bedside Touch Lamp',
      url: 'https://www.yellowoctopus.com.au/collections/gadgets/products/magic-tray-lamp-led-intelligent-bedside-lamp-sensor-night-light-desk-lamp',
      img: 'https://cdn.shopify.com/s/files/1/2046/8557/products/yellow-octopus-magic-tray-bedside-touch-lamp-yellow-octopus-31144636042_2000x2000.jpg?v=1508287867',
      price: '38.99',
      location: 'Yellow Octopus',
    },
    {
      wishId: 1,
      id: 4,
      name: 'Mini Elbow L Shape Strong Magnetic 4.3A Fast Charging Type-C Adapter Converter',
      url: 'https://www.ebay.com.au/itm/Mini-Elbow-L-Shape-Strong-Magnetic-4-3A-Fast-Charging-Type-C-Adapter-Converter/122784315976?_trkparms=aid%3D111001%26algo%3DREC.SEED%26ao%3D1%26asc%3D20160908105057%26meid%3D35d35ef343ef4f09a9f3fed7b11d478b%26pid%3D100675%26rk%3D3%26rkt%3D15%26sd%3D331728387207&_trksid=p2481888.c100675.m4236&_trkparms=pageci%253A957676b7-caa6-11e7-81d2-74dbd180c739%257Cparentrq%253Ac3e7791715f0a7e13400bd42fffd6e7b%257Ciid%253A1',
      img: 'https://i.ebayimg.com/images/g/izcAAOSwGPxZ-EVZ/s-l1600.jpg',
      price: '10.79',
      location: 'Ebay seller apore',
    },
    {
      wishId: 1,
      id: 5,
      name: 'Nifty home controller thingy',
      url: 'https://sevenhugs.com/',
      img: 'https://media1.popsugar-assets.com/files/thumbor/6Ifj1Cc2NwCMjIbJMfOv7e5YBxw/fit-in/1024x1024/filters:format_auto-!!-:strip_icc-!!-/2017/01/04/995/n/1922507/18be59e5fdaf863d_smartfinal/i/Your-connected-home-continues-get-smarter.jpg',
      price: '229',
      location: 'Sevenhugs',
    },
    {
      wishId: 1,
      id: 6,
      name: 'SEED LIGHTS – SILVER WIRE 10M',
      url: 'https://thefairylightshop.com.au/product-category/seed-fairy-lights/',
      img: 'https://thefairylightshop.com.au/wp-content/uploads/2015/07/g6xv2IgzTH9jV45qKDzom2eXq3xwf3nRwDV3DBRudf4-325x390.jpeg',
      price: '65',
      location: 'The Fairylight Shop',
    },
    {
      wishId: 2,
      id: 7,
      name: 'Magic Tray Bedside Touch Lamp',
      url: 'https://www.yellowoctopus.com.au/collections/gadgets/products/magic-tray-lamp-led-intelligent-bedside-lamp-sensor-night-light-desk-lamp',
      img: 'https://cdn.shopify.com/s/files/1/2046/8557/products/yellow-octopus-magic-tray-bedside-touch-lamp-yellow-octopus-31144636042_2000x2000.jpg?v=1508287867',
      price: '38.99',
      location: 'Yellow Octopus',
    },
    {
      wishId: 2,
      id: 8,
      name: 'SEED LIGHTS – SILVER WIRE 10M',
      url: 'https://thefairylightshop.com.au/product-category/seed-fairy-lights/',
      img: 'https://thefairylightshop.com.au/wp-content/uploads/2015/07/g6xv2IgzTH9jV45qKDzom2eXq3xwf3nRwDV3DBRudf4-325x390.jpeg',
      price: '65',
      location: 'The Fairylight Shop',
    },
  ]

export default function (state=initialState, action) {
  switch (action.type) {
    case FILTER_ITEMS: {
      return (
        state.filter(item => item.wishId === action.payload.wishId)
      )
    }

    case ADD_ITEM: {
      return {
        ...state,
        two: [...state, action.payload]
      }
    }
    
    case UPDATE_ITEM: {
      return {
        ...state,
        three: state.map(item => item.id === action.payload.id ? action.payload : item)
      }
    }
    
    case DELETE_ITEM: {
      return (
       state.filter(list => list.id !== action.payload.id)
      );
    }
    
    default:
      return state;
  }
}