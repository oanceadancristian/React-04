import React, { Component } from 'react';

class CartProduct extends Component {
  render() {
    const { name } = this.props;
    return <span className="cart-product">{name}</span>;
  }
}

export default CartProduct;
