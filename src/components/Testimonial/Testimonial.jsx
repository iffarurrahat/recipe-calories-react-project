import "./Testimonial.css";
import quoteImg from "./../../assets/quote.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch("testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <section className="mt-10 md:mt-16 lg:mt-32 review-img ">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        autoplay={{
          delay: 3000, // Autoplay delay in milliseconds (3 seconds)
          // disableOnInteraction: false, // Continue autoplay even when user interacts with swiper
        }}
        // pagination={true}
        loop={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonial.map((review) => (
          <SwiperSlide
            key={review.id}
            className="swiper-slide w-96 h-[400px] md:h-[450px] lg:h-[500px]"
          >
            <div className="testimonialBox px-16">
              <img src={quoteImg} alt="" className="quote" />
              <p className="mb-5 leading-7">{review.review_details}</p>
              <div className="flex items-center gap-5">
                <img
                  src={review.image}
                  alt=""
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h5 className="font-semibold mb-1 text-green-400">
                    {review.reviewer_name}
                  </h5>
                  <p className="text-xs">{review.recipe_name}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonial;
