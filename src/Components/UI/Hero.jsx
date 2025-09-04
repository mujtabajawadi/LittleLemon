import { NavLink } from "react-router-dom";
import "../CSS/Hero.css"

const Hero = () => {
  return (
    <>
      <section id='hero-section'>
        <div id="hero">
          <div id="hero-left">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <NavLink to="reservations">
            <button>Reserve a Table</button>

            </NavLink>
          </div>
          <div id="hero-right">
            <img src="/images/restauranfood.jpg" id='hero-image' alt="An Image of a Chef" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero
