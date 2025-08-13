// import React from 'react';

import Avatar from './Avatar';
import BrandLogoSVG from './BrandLogoSVG';
import CartSVG from './CartSVG';

const NavBar = () => {
  return (
    <div className="navBar">
      <BrandLogoSVG />
      <div className="navBarItem">Collections</div>
      <div className="navBarItem">Men</div>
      <div className="navBarItem">Women</div>
      <div className="navBarItem">About</div>
      <div className="navBarItem">Contact</div>
      <CartSVG />
      <Avatar />
    </div>
  );
};

export default NavBar;
