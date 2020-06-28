import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cat-icon.component';
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.component.styles';

interface Props {
  currentUser: {};
  hidden: boolean;
}

const Header = ({ currentUser, hidden }: Props) => (
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

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }: any) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToProps)(Header);
