import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

const Wish = (props) => {
  return (
    <div className='wish'>
      <button className='addButton'>+ New wish</button>  
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <List 
        wishId={props.id} />
    </div>
  );
}

Wish.PropTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
}

export default Wish;