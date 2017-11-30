import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './components/About';
import registerServiceWorker from './registerServiceWorker';

let store = createStore(rootReducer);

ReactDOM.render(
<Provider store={store}>
  <Router>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/about' component={About}/>
    </Switch>
  </Router>
</Provider>, 
document.getElementById('root'));
registerServiceWorker();