import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ReviewsCard = ({ title, description, rating }) => {
  return (
    <>
      <h5>{`Rating: ${rating}`}</h5>
      <div>
        <FaUserCircle />
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </>
  );
};

export default ReviewsCard;
