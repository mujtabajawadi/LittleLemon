import reviews from "../../Products/reviews.json";
import ReviewsCard from "./ReviewsCard";

const CustomersSay = () => {
  return (
    <section id="reviews-section">
      <div id="reviews-container">
        <div id="reviews-heading">
          <h1>Valuable Customer Reviews</h1>
        </div>
        <div id="reviews-card">
          
            {reviews.map((currentReview, index) => {
              return (
                <ReviewsCard
                  key={index}
                  title={currentReview.name}
                  description={currentReview.reviews}
                  rating={currentReview.rating}
                />
              );
            })}
        
        </div>
      </div>
    </section>
  );
};

export default CustomersSay;
