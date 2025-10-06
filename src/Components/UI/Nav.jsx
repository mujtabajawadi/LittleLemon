import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { ImCross } from "react-icons/im";
import "../../Nav.css";
import { useState } from "react";
const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleHamburger = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    if (window.innerWidth <= 998) {
      setIsMobile(true);
      if (isMobile) {
        setShowMenu(!showMenu);
      }
    }
  };
  return (
    <>
      <NavLink to="/">
        <img src="/images/Logo.svg" alt="" />
      </NavLink>

      <nav className={showMenu ? "menu-mobile" : "menu-desktop"}>
        <ul onClick={handleMenuClick}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/menu">Menu</NavLink>
          </li>
          <li>
            <NavLink to="/reservations">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="/order">Order Online</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
      </nav>

      <TiThMenu onClick={handleHamburger} className="hamburger" />
    </>
  );
};

export default Nav;
