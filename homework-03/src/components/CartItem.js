import React, { Component } from 'react';
import './CartItem.css';

class CartItem extends Component {
  render() {
    const { children } = this.props;
    return <div className="cart-item">{children}</div>;
  }
}

export default CartItem;
