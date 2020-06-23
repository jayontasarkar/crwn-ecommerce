import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import './header.scss';
import { auth } from '../../firebase/utils';
import CartIcon from '../cart-icon/cart-icon';
import { setCurrentUser } from '../../store/user/actions';
import { selectCurrentUser } from '../../store/user/selector';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartDropdownHidden } from '../../store/cart/selector';

const Header = ({ currentUser, setCurrentUser, hideCartDropdown }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => {
            auth.signOut();
            setCurrentUser(null);
          }}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {hideCartDropdown ? '' : <CartDropdown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hideCartDropdown: selectCartDropdownHidden,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
