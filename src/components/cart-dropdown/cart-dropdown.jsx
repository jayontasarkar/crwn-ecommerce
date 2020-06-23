import React from 'react';
import './cart-dropdown.scss';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item';
import { selectCartItems } from '../../store/cart/selector';
import { withRouter } from 'react-router-dom';
import { toggleCartDropdown } from '../../store/cart/actions';

const CartDropdown = ({ cart, history, toggleCart }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length ? (
          cart.map((c) => <CartItem key={c.id} item={c} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          toggleCart();
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: selectCartItems(state),
});

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartDropdown()),
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
);
