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
            <picture>
              <source srcSet="/images/restaurantfood.webp" type="image/webp"/>
              <source srcSet="/images/restaurantfood.jpg" type="image/jpg"/>
              <img src="/images/restauranfood.jpg" className='hero-image' alt="An Image of a Chef" />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero
