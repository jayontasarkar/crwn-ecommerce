import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/logo.svg';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from './header.styles';
import { auth } from '../../firebase/utils';
import CartIcon from '../cart-icon/cart-icon';
import { setCurrentUser } from '../../store/user/actions';
import { selectCurrentUser } from '../../store/user/selector';
import CartDropdown from '../cart-dropdown/cart-dropdown';
import { selectCartDropdownHidden } from '../../store/cart/selector';

const Header = ({ currentUser, setCurrentUser, hideCartDropdown }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink
          onClick={() => {
            auth.signOut();
            setCurrentUser(null);
          }}
        >
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hideCartDropdown ? '' : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hideCartDropdown: selectCartDropdownHidden,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
