import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { FaArrowLeft, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const StoryDetails = () => {
  const axiosInstance = useAxiosSecure();
  const { id } = useParams();
  const {
    data: story,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["story", id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/news-stories/${id}`);
      return data;
    },
  });
  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="flex justify-center items-center my-6">
        <p className="text-center">
          Unable to load news data. Please check your internet connection or try
          reloading the page.
        </p>
      </div>
    );
  return (
    <div className="flex flex-col w-11/12 mx-auto my-12 rounded-lg space-y-6">
      <h2 className="text-2xl lg:text-4xl font-bold">{story?.title || ""}</h2>
      <div className="divider"></div>
      <figure className="">
        <img src={story?.image_url} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="divider"></div>
      <div className="">
        <p>
          Publish Date : {story?.publish_date || new Date().toLocaleString()}
        </p>
        <div className="divider"></div>

        <p>{story?.news || ""}</p>
        <div className="divider"></div>
      </div>
      <Link to={'/stories'} className="w-fit flex items-center gap-1 bg-primary-bg text-white px-4 py-2 rounded hover:bg-primary-bg/70 font-bold"><FaArrowLeft/> Back</Link>
      <div className="flex items-center space-x-4"> <span className="text-primary-bg font-semibold">Share:</span> <FaFacebook/> <FaTwitter/> <FaInstagram/> </div>
    </div>
  );
};

export default StoryDetails;
