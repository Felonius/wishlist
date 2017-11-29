import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import store from '../store';
//import { filterList } from '../actions/list-actions';

class Wish extends Component {

  render() {
    const wishId = this.props.id;
    return (
      <div className='wish'>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <List wishId={wishId} />
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