import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    return (
      <li className='list-item'>
        <div className='detail'>
          <img src={this.props.item.img} alt={this.props.name} />
          <h4>{this.props.item.name}</h4>
          <a href={this.props.item.url}>{this.props.item.location}</a>
          <i className='price'>{new Intl.NumberFormat('EN-au', {style: 'currency', currency: 'AUD'}).format(this.props.item.price)}</i>
        </div>
      </li>
    )
  };
}
Item.PropTypes = {
  item: PropTypes.object,
}

export default Item;