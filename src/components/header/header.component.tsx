import React from 'react';
import { useSelector } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.component.styles';

const stateSelector = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

const Header = () => {
  const { currentUser, hidden } = useSelector(stateSelector);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <div className="option">SIGN OUT</div>
        ) : (
          <OptionLink to="/signin">SIGN IN</OptionLink>
        )}
        <CartIcon />
        {hidden ? null : <CartDropdown />}
      </OptionsContainer>
    </HeaderContainer>
  );
};

export default Header;
