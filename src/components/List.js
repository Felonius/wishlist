import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends Component {
  render() {
    return (
      <div className='wish'>
        <h2>{this.props.name}</h2>
        <p>{this.props.description}</p>
        <ul className='wish-list'>
          {this.props.list.map((listItem, i) => 
            <Item item={listItem} />
          )}
        </ul>
      </div>
    );
  }
}
List.PropTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}

export default List;