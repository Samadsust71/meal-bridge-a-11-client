import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SiImdb } from "react-icons/si";

const Banner = () => {
  const slides = [
    {
      title: "Annihilation",
      subtitle:
        "A biologist's husband disappears. She puts her name forward for an expedition into an environmental disaster zone, but does not find what she's expecting. The expedition team is made up of the biologist, an anthropologist, a psychologist, a surveyor, and a linguist",
      rating: 3.8,
      year: "2018",
      quality: "4K",
      duration: "1 hr 55 min",
      image: "https://i.ibb.co/LY1RZX7/slide1.jpg",
    },
    {
      title: "Doctor Strange in the Multiverse of Madness",
      subtitle:
        "Doctor Strange teams up with a mysterious teenage girl who can travel across multiverses, to battle other-universe versions of himself which threaten to wipe out the multiverse. They seek help from the Scarlet Witch, Wong and others.",
      rating: 4.1,
      year: "2022",
      quality: "8K",
      duration: "2 hr 06 min",
      image: "https://i.ibb.co.com/WBFVhmz/slide5.jpg",
    },
    {
      title: "Us",
      subtitle:
        "In order to get away from their busy lives, the Wilson family takes a vacation to Santa Cruz, California. At night, four strangers break into Adelaide's childhood home. The family is shocked to find out that the intruders look like them.",
      rating: 4.5,
      year: "2019",
      quality: "4K",
      duration: "1 hr 56 min",
      image: "https://i.ibb.co/Jr5GPKK/slide3.webp",
    },
  ];

  return (
    <div className="relative mb-10">
      <Swiper
        style={{
          "--swiper-pagination-color": "#ff0829",
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
              className="w-full h-[800px] object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start  text-white pl-6 space-y-8">
              <p className="text-gray-300 font-semibold border-l-4 border-red-600 pl-2">
                NEW REALEASES
              </p>
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex items-center gap-1">
                  <div
                    className="radial-progress bg-transparent"
                    style={{
                      "--value": (slide.rating / 5) * 100,
                      "--size": "2rem",
                      color: "#418e40",
                    }}
                    role="progressbar"
                  >
                    <span className="text-xs text-white">{slide.rating}</span>
                  </div>
                  <div className="flex text-white">
                    <SiImdb className="h-6 w-10 text-[#F6C700]" />
                    <span>Score</span>
                  </div>
                </div>
                <p>{slide.year}</p>
                <div className="flex items-center bg-white text-sm font-semibold h-6">
                  <span className="bg-black text-white px-2 py-1">
                    {slide.quality}
                  </span>
                  <span className="text-black px-2 py-1">Ultra HD</span>
                </div>
                <p>{slide.duration}</p>
              </div>
              <p className="mt-2 md:w-[60%]">{slide.subtitle}</p>
              <button className="px-6 py-3 bg-red-600 text-white font-semibold hover:bg-transparent border border-red-600 transition-all duration-100 ease-in-out rounded-lg">
                WATCH NOW
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Banner;