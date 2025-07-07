import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./CarouselTech.css";

SwiperCore.use([EffectCoverflow, Pagination]);

export const CarouselTechFreelance = () => {
  const data = [
    { icon: "/imgs/icons/Astro.png", tech: "Astro" },
    { icon: "/imgs/icons/Next.js.png", tech: "Next" },
    { icon: "/imgs/icons/react.png", tech: "React" },
    { icon: "/imgs/icons/JavaScript.png", tech: "JavaScript" },
    { icon: "/imgs/icons/TypeScript.png", tech: "TypeScript" },
    { icon: "/imgs/icons/Node.js.png", tech: "Node.js" },
    { icon: "/imgs/icons/Express.png", tech: "Express" },
    { icon: "/imgs/icons/MySQL.png", tech: "MySQL" },
    { icon: "/imgs/icons/MongoDB.png", tech: "MongoDB" },
    { icon: "/imgs/icons/Strapi.png", tech: "Strapi" },
    { icon: "/imgs/icons/Supabase.png", tech: "Supabase" },
    { icon: "/imgs/icons/TailwindCSS.png", tech: "Tailwind" },
    { icon: "/imgs/icons/MaterialUI.png", tech: "Material UI" },
  ];

  return (
    <div className="swiper-container">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        // slidesPerView={6}
        slidesPerView="auto"
        modules={[Pagination, Autoplay]}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        // slidesPerView={4}
        // breakpoints={{
        //   "@0.00": {
        //     slidesPerView: 2,
        //     spaceBetween: 25,
        //   },
        //   "@1.25": {
        //     slidesPerView: 2.5,
        //     spaceBetween: 20,
        //   },
        //   "@1.50": {
        //     slidesPerView: 4,
        //     spaceBetween: 30,
        //   },
        //   "@1.75": {
        //     slidesPerView: 8,
        //     spaceBetween: 20,
        //   },
        // }}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
      >
        {data.map((e) => (
          <SwiperSlide
            key={e.tech}
            style={{ backgroundImage: `url(${e.icon})` }}
          >
            <p className="text-gray-400">{e.tech}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
