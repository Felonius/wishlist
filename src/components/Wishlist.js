import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as wishActions from '../actions/wish-actions';
import Wish from './Wish';

class Wishlist extends Component {
  render() {
    const wishes = this.props.wishes;
    return (
      wishes.map((wish) => 
        <Wish 
          key={wish.id} 
          {...wish} />
      )
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    wishes: state.wishes,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addWish: wish => dispatch(wishActions.addWish(wish)),
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Wishlist);