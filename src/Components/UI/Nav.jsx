import { NavLink } from 'react-router-dom';
import '../../Nav.css'
const Nav = () => {
  return (
    <>
      <nav>
        <img src="/images/Logo.svg" alt="" />
        <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/reservations">Reservations</NavLink></li>
        <li><NavLink to="/order">Order Online</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>

        </ul>
      </nav>
    </>
  );
};

export default Nav;
