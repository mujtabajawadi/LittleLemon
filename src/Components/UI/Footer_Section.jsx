import { NavLink } from "react-router-dom";
import "../CSS/Footer_Section.css"
const Footer_Section = () => {
  return (
    <footer id="footer-section">
      <div id="footer-container">
        <img src="/images/Logo_grey_scale.svg" alt="" loading="lazy" />
        <div id="reachtous">
          <h2>Reach out to us</h2>
          <div>
            <h5>Address:</h5>
            <p> Little Lemon Restaurant,123 Main Street,Anytown,USA 12345</p>
          </div>
          <div>
            <h5>Email Address:</h5>
            <p>info@littlelemon.com</p>
          </div>
          <div>
            <h5>phone Number:</h5>
            <p>(555) 123-4567</p>
          </div>
        </div>

        <div id="gettoknow">
          <h2>Get to know us</h2>
          <NavLink to="about">About</NavLink>
          <NavLink to="careers">Careers</NavLink>
          <NavLink to="releases">Press Releases</NavLink>
          <NavLink to="exclusive">Exclusive Recipies</NavLink>
          <NavLink to="menu">Our Kitchen</NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer_Section;
