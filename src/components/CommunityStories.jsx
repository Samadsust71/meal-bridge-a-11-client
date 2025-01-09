import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import NewsCard from "./NewsCard";
import Loading from "./Loading";

const CommunityStories = () => {
  const axiosInstance = useAxiosSecure();
  const {
    data: stories,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["news-stories"],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/news-stories`);
      return data;
    },
  });

  if (isError)
    return (
      <div className="flex justify-center items-center my-5">
        <p className="text-center">
          Unable to load news data. Please check your internet connection or try
          reloading the page.
        </p>
      </div>
    );
  return (
    <section className="w-11/12 mx-auto py-12">
      <div className=" text-primary">
        <h2 className="text-2xl lg:text-4xl font-bold text-center mb-6">
          Community News and Stories
        </h2>
        <p className="text-center mb-6">
          Discover the real-life stories of people making a difference through
          MealBridge.
        </p>
        {isLoading ? (
          <Loading />
        ) : stories && stories.length > 0 ? (
          <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {stories.map((story) => (
                <NewsCard key={story._id} story={story} />
              ))}
            </div>
          </div>
        ) : (
          <p className="text-center my-6">No News or story available.</p>
        )}
      </div>
    </section>
  );
};

export default CommunityStories;
