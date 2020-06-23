import React from 'react';
import { ReactComponent as ShoppingIcon } from '../../assets/cart-icon.svg';
import './cart-icon.scss';
import { connect } from 'react-redux';
import { toggleCartDropdown } from '../../store/cart/actions';
import { selectCartItemsCount } from '../../store/cart/selector';

const CartIcon = ({ toggleCart, noOfItemsInCart }) => {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{noOfItemsInCart}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCart: () => dispatch(toggleCartDropdown()),
});

const mapStateToProps = (state) => ({
  noOfItemsInCart: selectCartItemsCount(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
