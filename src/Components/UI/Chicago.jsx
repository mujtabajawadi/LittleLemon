import React from 'react'
import "../CSS/Chicago.css"

const Chicago = () => {
  return (
    <section id="about-section">
      <div id="about-data">
        <div id="about-text">
          <h1>Little Lemon</h1>
          <h3>Chicago</h3>
          <p>
            Little Lemon is a charming neighbourhood bistro that serves simple
            food and classic cocktails in a lively but casual environment. The
            restaurant features a locally-sourced menu with daily specials.
          </p>
        </div>
        <div id="about-images">
          <img src="/images/restaurant chef B.jpg" alt="" id="image-chef" loading='lazy' />
          <img src="/images/restaurant.jpg" alt="" id="image-retaurant" loading='lazy' />
        </div>
      </div>
    </section>
  );
}

export default Chicago
