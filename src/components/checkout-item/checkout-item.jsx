import React from 'react';
import { connect } from 'react-redux';

import {
  addToCart,
  removeFromCart,
  removeItemQtyFromCart,
} from '../../store/cart/actions';

import './checkout-item.scss';

const CheckoutItem = ({ item, addItem, clearItem, removeItem }) => {
  const { name, imageUrl, price, quantity } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addToCart(item)),
  clearItem: (item) => dispatch(removeFromCart(item)),
  removeItem: (item) => dispatch(removeItemQtyFromCart(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
