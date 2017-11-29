import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import store from '../store';
import { deleteItem } from '../actions/item-actions';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wishId: props.wishId,
    }
  }

  getWishList(wishId) {
    const list = store.getState().items
      .filter( item => item.wishId === wishId); 
    return list;
  }
  
  handleDelete(id) {
    console.log(store.getState());
    store.dispatch(deleteItem(id,this.state.wishId));
    console.log(store.getState());
    /*console.log(
      store.getState().lists.filter( list => 
        list.wishId === this.state.wishId).reduce(
          (a,b) => { a.concatenate(b)}
        ).items.filter(
        item => item.id !== id
      ),
    );*/
  }

  render() {
    return (
      <ul className='wish-list'>
        {this.getWishList(this.props.wishId).map((listItem) => 
          <Item key={listItem.id} item={listItem} onDelete={this.handleDelete.bind(this)} />
        )}
      </ul>
    );
  }
}
List.PropTypes = {
  wishId: PropTypes.number,
}

export default List;