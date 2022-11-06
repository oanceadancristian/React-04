import React, { Component } from 'react';
import CartItem from './CartItem';
import CartProduct from './CartProduct';
import CartButtons from './CartButtons';
import CartPrice from './CartPrice';
import './Cart.css';

class Cart extends Component {
  state = {
    totalItems: 0,
    counts: {},
    totalPrice: 0,
    products: [
      {
        id: 1,
        name: 'Samsung',
        price: 10,
      },
      {
        id: 2,
        name: 'Apple',
        price: 20,
      },
      {
        id: 3,
        name: 'Huawei',
        price: 30,
      },
      {
        id: 4,
        name: 'Motorola',
        price: 40,
      },
      {
        id: 5,
        name: 'Nokia',
        price: 50,
      },
    ],
  };

  handleIncrement = (id) => {
    const { totalItems, counts } = this.state;
    const newCount = counts[id] ? ++counts[id] : 1;

    this.setState({
      totalItems: totalItems + 1,
      counts: {
        ...counts,
        [id]: newCount,
      },
    });
  };

  handleDecrement = (id) => {
    const { totalItems, counts } = this.state;
    const newCount = counts[id] ? --counts[id] : 0;

    if (newCount > 0) {
      this.setState({
        totalItems: totalItems - 1,
        counts: {
          ...counts,
          [id]: newCount,
        },
      });
    } else if (newCount === 0) {
      // remove item from cart
      const { totalItems, counts } = this.state;

      const newTotalItems = totalItems - counts[id];
      delete counts[id];

      const filteredProducts = this.state.products.filter(
        (product) => product.id !== id
      );

      this.setState({
        totalItems: isNaN(newTotalItems) ? totalItems : newTotalItems - 1,
        counts,
        products: filteredProducts,
      });
    }
  };

  handleDelete = (id) => {
    const { totalItems, counts } = this.state;

    const newTotalItems = totalItems - counts[id];
    delete counts[id];

    const filteredProducts = this.state.products.filter(
      (product) => product.id !== id
    );

    this.setState({
      totalItems: isNaN(newTotalItems) ? totalItems : newTotalItems,
      counts,
      products: filteredProducts,
    });
  };

  render() {
    const { counts, products } = this.state;

    return (
      <div className="cart-list">
        {products.map(({ id, name, price }) => (
          <CartItem key={id}>
            <CartProduct id={id} name={name} />
            <CartButtons
              count={counts[id]}
              handleIncrement={() => this.handleIncrement(id)}
              handleDecrement={() => this.handleDecrement(id)}
              handleDelete={() => this.handleDelete(id)}
            />
            <CartPrice price={price} />
          </CartItem>
        ))}
        <div className="total">
          <div className="total-items">
            Total items: {this.state.totalItems}
          </div>
          <div className="total-price">
            Total price: {this.state.totalPrice}
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
