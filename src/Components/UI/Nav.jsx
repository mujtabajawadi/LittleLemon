import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
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


  const handleNavigation = () => {
    setShowMenu(false)
  }

  return (
    <>
      <NavLink to="/">
        <img src="/images/Logo.svg" alt="" />
      </NavLink>

      <nav className={showMenu ? "menu-mobile" : "menu-desktop"}>
        <ul onClick={handleMenuClick}>
          <li>
            <NavLink to="/" onClick={() => handleNavigation}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={() => handleNavigation}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu" onClick={() => handleNavigation}>
              Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/reservations" onClick={() => handleNavigation}>
              Reservations
            </NavLink>
          </li>
        </ul>
      </nav>

      <TiThMenu onClick={handleHamburger} className="hamburger" />
    </>
  );
};

export default Nav;
