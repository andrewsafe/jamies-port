import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/star.png";
import AVTR2 from "../../assets/star.png";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const peers = [
  {
    avatar: AVTR1,
    name: "Sample Person",
    review:
      "Jamie is one of the best teammates I have ever worked with, she's a great listener, fast learner that provides help to anyone in the team if needed, and is very committed to the responsibilities that she has.",
  },
  {
    avatar: AVTR2,
    name: "Sample Person 2",
    review:
      "I had the chance to work with Jamie in different environments. Her hands-on skills were always impressive. She constantly showed professional behavior and high level of problem-solving skills.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials_container"
        navigation={true}
        modules={[Navigation]}
        spaceBetween={40}
        slidesPerView={1}
      >
        {peers.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="peer_avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="peer_name">{name}</h5>
              <small className="peer_review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
