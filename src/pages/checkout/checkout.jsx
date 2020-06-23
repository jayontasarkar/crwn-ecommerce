import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './checkout.scss';
import { selectCartItems, selectCartTotal } from '../../store/cart/selector';
import CheckoutItem from '../../components/checkout-item/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button';

const Checkout = ({ items, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {items.length === 0 && (
        <div className="cart-empty">Your cart is empty.</div>
      )}
      {items.length > 0 &&
        items.map((item) => <CheckoutItem key={item.id} item={item} />)}
      <div className="total">TOTAL: ${total}</div>
      {total > 0 && (
        <div className="stripe-element">
          <StripeCheckoutButton total={total} />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  items: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(Checkout);
