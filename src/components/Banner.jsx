import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import slideImage1 from "../assets/banner-image/slide-1.jpg"
import slideImage2 from "../assets/banner-image/slide-2.webp"
import slideImage3 from "../assets/banner-image/slide-3.jpg"
import { Link } from "react-router-dom";


const Banner = () => {
  const slides = [
    {
      title: "Bridge the Gap, Share the Meal",
      subtitle:
        "Together, we can turn surplus into smiles. Join the movement today!",
      
      image: slideImage1,
    },
    {
      title: "Every Bite Matters, for Revolution",
      subtitle:
        "Empowering communities through food sharing. Donate or request with ease.",
      image: slideImage2,
    },
    {
      title: "From Extra to Extraordinary",
      subtitle:
        "Reduce waste, feed hope, and build stronger communities with MealBridge.",
      image: slideImage3,
    },
  ];

  return (
    <div className="relative">
      <Swiper
        style={{
          "--swiper-pagination-color": "#90BE6D",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "16px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
        }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className=""
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative ">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[511px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white space-y-8">
              <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center w-11/12 mx-auto">{slide.title}</h2>
              <p className="mt-2 lg:text-xl text-center text-white/90  w-11/12 mx-auto">{slide.subtitle}</p>
              <Link to={'/add-food'} className="px-6 py-3 bg-transparent text-white font-semibold hover:bg-[#90BE6D] border border-white hover:border-[#90BE6D] transition-all duration-100 ease-in-out rounded-full">
                JOIN NOW
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;