import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Item extends Component {
  render() {
    return (
      <li className='wish-item'>
      <ul className='detail'>
        <li className='name'><h3>{this.props.item.name}</h3></li>
        <li className='url'><a href={this.props.item.url}>{this.props.item.location}</a></li>
        <li className='img'><img width="150" src={this.props.item.img} alt={this.props.name} /></li>
        <li className='price'>{new Intl.NumberFormat('EN-au', {style: 'currency', currency: 'AUD'}).format(this.props.item.price)}</li>
      </ul></li>
    )
  };
}
Item.PropTypes = {
  item: PropTypes.object,
}

export default Item;