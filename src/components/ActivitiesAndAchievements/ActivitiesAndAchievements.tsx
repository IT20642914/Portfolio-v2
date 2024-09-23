import { Container } from "./styles";
import { FaTrophy } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";

import DramaCertificate from "../../assets/Certificates/java.png";
import DramaCertificate2 from "../../assets/Certificates/nodeJs.png";

export function ActivitiesAndAchievements() {
  // Points for extracurricular activities and achievements
  const points = [
    "Represented SLIIT University for global exposure at BMICH for final year research.",
    "Deputy Head Prefect of the school in 2018.",
    "Junior and Senior Prefect from 2015-2017",
    "Participated in cadets",
    "Played cricket, football, and athletics at school.",
    "Participated in the school drama team.",
  ];

  // List of certificate images (Replace with actual certificate images)
  const certificateImages: string[] = [
    DramaCertificate, DramaCertificate2, DramaCertificate, DramaCertificate2,
    DramaCertificate2, DramaCertificate, DramaCertificate, DramaCertificate,
    DramaCertificate, DramaCertificate2,
  ];

  return (
    <Container id="achievements">
      <h2>Extracurricular Activities and Achievements</h2>

      {/* List of Achievements and Points */}
      <ul className="achievement-points">
        {points.map((point, index) => (
          <li key={index}>
            <FaTrophy className="icon" /> {point}
          </li>
        ))}
      </ul>

      {/* Swiper Grid of Certificate Images */}
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000, disableOnInteraction: false }} // Set autoplay with 5-second delay
        breakpoints={{
            480: {
              slidesPerView: 1, // On small screens, show 1 slide per view
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2, // On tablets, show 2 slides per view
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // On desktops, show 3 slides per view
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4, // On larger desktops, show 4 slides per view
              spaceBetween: 40,
            },
          }}
        modules={[Pagination, Autoplay]} // Use Pagination and Autoplay modules
        className="mySwiper"
      >
        {certificateImages.map((image, index) => (
          <SwiperSlide key={index} className="certificate-item">
            <img src={image} alt={`Certificate ${index}`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
}
