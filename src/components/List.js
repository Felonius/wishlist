import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends Component {
  render() {
    return (
      <ul className='wish-list'>
        {this.props.list.map((listItem) => 
          <Item key={listItem.id} item={listItem} />
        )}
      </ul>
    );
  }
}
List.PropTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}

export default List;