import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends Component {
  render() {
    return (
      <article className='wish'>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        <ul className='wish-items'>
        {this.props.list.map((listItem, i) => 
          <Item item={listItem} />
        )}
        </ul>
      </article>
    );
  }
}
List.PropTypes = {
  name: PropTypes.string,
  description: PropTypes.string
}

export default List;