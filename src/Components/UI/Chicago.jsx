import React from 'react'

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
          <img
            src="/images/restaurant.jpg"
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
          <img
            src="/images/restaurant chef B.jpg"
            alt=""
            style={{ width: "300px", height: "300px" }}
          />
        </div>
      </div>
    </section>
  );
}

export default Chicago
