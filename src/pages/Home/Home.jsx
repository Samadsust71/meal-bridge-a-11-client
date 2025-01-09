import Banner from "../../components/Banner";
import CommunityStories from "../../components/CommunityStories";
import FeaturedFoods from "../../components/FeaturedFoods";
import TestimonialSection from "../../components/TestimonialSection";
import WhyChooseUs from "../../components/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="bg-gray-50">
        <FeaturedFoods />
      </div>
      <TestimonialSection />
      <CommunityStories />
      <WhyChooseUs />
    </div>
  );
};

export default Home;
