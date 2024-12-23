import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import RequestFormModal from "../../components/RequestFormModal";
import { motion } from "framer-motion";
import { format } from "date-fns";

const SingleFoodDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxiosSecure();

  const {
    data: food,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/foods/${id}`);
      return data;
    },
  });

  if (isLoading) return <Loading />;

  if (isError) return <p className="text-center">Food details not available</p>;

  return (
    <motion.div
      className="w-full flex flex-col md:flex-row items-center gap-6 rounded-lg p-4 border border-gray-200 my-10"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Donator Details */}
      <div className="flex flex-col space-y-4">
        <h1 className="text-lg font-bold">Donator Details</h1>
        <img
          src={food?.donator_image}
          alt={food?.donator_name}
          className="w-full h-40 rounded-lg border-2 border-primary-bg object-cover"
        />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-800">
            Name : {food?.donator_name}
          </p>
          <p className="text-sm text-gray-400">Email : {food?.donator_email}</p>
        </div>
      </div>
      {/* Image Section */}
      <div className="relative flex justify-center items-center md:w-1/2">
        <img
          src={food?.food_image}
          alt={food?.food_name}
          className="h-[300px] object-cover rounded-lg shadow-lg border-4 border-primary-bg"
        />
        <div className="absolute h-[350px] rounded-lg bg-gradient-to-r from-primary-bg via-[#00FFAB] to-transparent blur-lg"></div>
      </div>

      <div className="space-y-4">
        {/* Food Details */}
        <div className="text-gray-500">
          <p className="text-sm text-green-600 font-medium">
            Quantity: {food?.quantity}
          </p>
          <h3 className="text-lg font-bold text-gray-800">
            Food : {food?.food_name}
          </h3>
          <p className="text-sm">
            Pickup Location : {food?.location}
          </p>
          <p className="text-sm ">Status : {food?.status}</p>
          <p className="text-sm  mt-1">
            Expires on : {format(new Date(food?.expired_date), "dd-MM-yyyy")}
          </p>
          <p className="text-sm mt-1 truncate">
            Additional Notes:{" "}
            {food?.additional_notes || "No additional notes provided"}
          </p>
        </div>

        {/* Action Button */}
        <div className="">
          <button
            onClick={() => document.getElementById(food?._id).showModal()}
            className="btn bg-primary-bg text-white hover:bg-primary-bg/80 rounded-full"
          >
            Request
          </button>
        </div>
      </div>
      <RequestFormModal food={food} />
    </motion.div>
  );
};

export default SingleFoodDetails;
