import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/cupcake.svg";
import "./Header.styles.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-header">
        <Link to="/">
          <Logo className="logo" />
        </Link>
      </div>
      <div className="menu-header">
        <Link to="/shop">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/account">Sign In</Link>
      </div>
    </div>
  );
};

export default Header;
