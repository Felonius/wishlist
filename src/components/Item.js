import React, { Component } from 'react';
import PropTypes from 'prop-types';
import store from '../store';
import { deleteFromList } from '../actions/list-actions';

class Item extends Component {
  handleDelete(id) {
    store.dispatch(deleteFromList(id));
    console.log(store.getState());
  }
  render() {
    const item = this.props.item;
    return (
      <li className='list-item'>
        <div className='detail'>
          <img src={item.img} alt={this.props.name} />
          <h4>{item.name}</h4>
          <a href={item.url}>{item.location}</a>
          <i className='price'>{new Intl.NumberFormat('EN-au', {style: 'currency', currency: 'AUD'}).format(item.price)}</i>
        </div>
        <button onClick={this.handleDelete.bind(this,item.id)}>X</button>
      </li>
    )
  };
}
Item.PropTypes = {
  item: PropTypes.object,
  key: PropTypes.number,
  id: PropTypes.number,
}

export default Item;