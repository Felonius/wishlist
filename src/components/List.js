import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as itemActions from '../actions/item-actions';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends Component {

  handleDelete(id) {
    this.props.deleteItem(id);
  }
  
  render() {
    const items = 
      this.props.items.filter(item => item.wishId === this.props.wishId)
        .map((listItem) => 
          <Item key={listItem.id} item={listItem} onDelete={this.handleDelete.bind(this)} />
    );
    return (
      <ul className='wish-list'>
        {items}
      </ul>
    );
  }
}
List.PropTypes = {
  wishId: PropTypes.number,
}
const mapStateToProps = (state, ownProps) => {
  return {
    items: state.items
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addItem: item => dispatch(itemActions.addItem(item)),
    updateItem: item => dispatch(itemActions.updateItem(item)),
    deleteItem: id => dispatch(itemActions.deleteItem(id))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
