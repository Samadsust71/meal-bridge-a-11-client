/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom";

const NewsCard = ({ story }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-base-200 rounded-lg flex flex-col shadow-md overflow-hidden">
      <img
        src={story?.image_url}
        alt={story?.title}
        className="w-full h-72 object-cover"
      />
      <div className="flex-grow mt-4 p-4">
        <h3 className="text-xl font-semibold mb-2">{story?.title}</h3>
        <p className="text-sm mb-4">{story?.news?.slice(0, 100)}...</p>
      </div>
      <button
        onClick={() => navigate(`/stories/${story?._id}`)}
        className="w-fit bg-primary-bg text-white px-4 py-2 rounded hover:bg-primary-bg/70 mb-4 ml-4"
      >
        Read More
      </button>
    </div>
  );
};

export default NewsCard;
