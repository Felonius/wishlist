import React, { Component } from 'react';
import PropTypes from 'prop-types';
import List from './List';
import store from '../store';
//import { filterList } from '../actions/list-actions';

class Wish extends Component {
  getWishList(wishId) {
    const list = store.getState().lists.lists
      .filter( list => list.wishId === wishId)
      .reduce((a, b) => a.concat(b.items)); 
    return list.items;
  }

  render() {
    const wishId = this.props.id;
    return (
      <div className='wish'>
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <List list={this.getWishList(wishId)} />
      </div>
    );
  }
}
Wish.PropTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  list: PropTypes.list,
}

export default Wish;