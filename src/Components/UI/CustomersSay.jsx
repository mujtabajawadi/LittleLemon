//

import { useEffect, useState } from "react";
import reviews from "../../Products/reviews.json";
import ReviewsCard from "./ReviewsCard";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Import required Swiper modules
import { Pagination, EffectFade, Autoplay } from "swiper/modules";
// Import custom CSS
import "../CSS/CustomersSay.css";

const CustomersSay = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Check if the screen is mobile size
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Set initial value
    checkIsMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIsMobile);

    // Clean up event listener
    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);

  return (
    <section id="reviews-section">
      <div id="reviews-container">
        <div id="reviews-heading">
          <h1>Valuable Customer Reviews</h1>
        </div>

        {isMobile ? (
          // Mobile View with Swiper
          <div id="reviews-swiper">
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              effect={"fade"}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Pagination, EffectFade, Autoplay]}
              className="reviews-swiper"
            >
              {reviews.map((currentReview, index) => (
                <SwiperSlide key={index}>
                  <div className="swiper-slide-content">
                    <ReviewsCard
                      title={currentReview.name}
                      description={currentReview.reviews}
                      rating={currentReview.rating}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ) : (
          // Desktop View with normal layout
          <div id="reviews-card">
            {reviews.map((currentReview, index) => (
              <ReviewsCard
                key={index}
                title={currentReview.name}
                description={currentReview.reviews}
                rating={currentReview.rating}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CustomersSay;
