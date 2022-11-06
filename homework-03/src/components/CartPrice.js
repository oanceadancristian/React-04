import React, { Component } from 'react';

class CartPrice extends Component {
  render() {
    const { price } = this.props;
    return <span className="cart-price">&euro;{price}</span>;
  }
}

export default CartPrice;
