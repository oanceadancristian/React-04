import React, { Component } from 'react';

class CartPrice extends Component {
  render() {
    const { count, handleIncrement, handleDecrement, handleDelete } =
      this.props;
    return (
      <div className="buttons">
        <button onClick={handleDecrement} className="btn btn-dark btn-sm">
          -
        </button>
        <span>{count === undefined ? 0 : count}</span>
        <button onClick={handleIncrement} className="btn btn-dark btn-sm">
          +
        </button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }
}

export default CartPrice;
