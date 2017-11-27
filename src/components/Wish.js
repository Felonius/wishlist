import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import store from '../store';

class Wish extends Component {
  render() {
    return (
      <div className='wish'>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <List {...store.getState().lists } />
      </div>
    );
  }
}
Wish.PropTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Wish;