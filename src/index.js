import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import About from './components/About';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path='/' component={App}/>
      <Route exact path='/about' component={About}/>
    </Switch>
  </Router>
, document.getElementById('root'));
registerServiceWorker();
