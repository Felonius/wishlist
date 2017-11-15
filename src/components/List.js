import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

class List extends Component {
  render() {
    return (
      <article>
        <h3>{this.props.name}</h3>
        <p>{this.props.description}</p>
        <ul className='list_container'>
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