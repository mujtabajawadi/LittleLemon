import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ReviewsCard = ({ title, description, rating }) => {
  return (
    <section id="review-card">
      <h5>{`Rating: ${rating}/5`}</h5>
      <div id="user-title">
        <FaUserCircle
          style={{ width: "30px", height: "30px", color: "#495e57" }}
        />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </section>
  );
};

export default ReviewsCard;
