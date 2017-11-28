import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';
import store from '../store';
import { deleteFromList } from '../actions/list-actions';

class List extends Component {
  handleDelete(id) {
    store.dispatch(deleteFromList(id));
    console.log(store.getState().lists);
  }

  render() {
    return (
      <ul className='wish-list'>
        {this.props.list.map((listItem) => 
          <Item key={listItem.id} item={listItem} onDelete={this.handleDelete} />
        )}
      </ul>
    );
  }
}
List.PropTypes = {
  list: PropTypes.array,
}

export default List;