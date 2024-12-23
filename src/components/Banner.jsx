import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Banner = () => {
  const slides = [
    {
      title: "Bridge the Gap, Share the Meal",
      subtitle:
        "Together, we can turn surplus into smiles. Join the movement today!",
      
      image: "https://muslimi.com/wp-content/uploads/2023/04/da.jpg",
    },
    {
      title: "Every Bite Matters, for Revolution",
      subtitle:
        "Empowering communities through food sharing. Donate or request with ease.",
      image: "https://thumbs.dreamstime.com/b/charity-food-hope-poor-who-have-no-money-concept-begging-donate-to-people-society-volunteers-share-149431320.jpg",
    },
    {
      title: "From Extra to Extraordinary",
      subtitle:
        "Reduce waste, feed hope, and build stronger communities with MealBridge.",
      image: "https://media.istockphoto.com/id/1060352206/photo/donate-food-to-hungry-people-concept-of-poverty-and-hunger.jpg?s=612x612&w=0&k=20&c=BB37IPajPeKo8fsJ3m7z2TOUmCbD0nnJo79ZXBg89sM=",
    },
  ];

  return (
    <div className="relative mb-10">
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
        className="rounded-lg"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative ">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-[600px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div> 
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white space-y-8">
              <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold">{slide.title}</h2>
              <p className="mt-2 lg:text-xl">{slide.subtitle}</p>
              <button className="px-6 py-3 bg-transparent text-white font-semibold hover:bg-[#90BE6D] border border-white transition-all duration-100 ease-in-out rounded-full">
                JOIN NOW
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;