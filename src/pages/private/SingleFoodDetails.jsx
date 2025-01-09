import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import RequestFormModal from "../../components/RequestFormModal";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { FaCalendar, FaLocationDot, FaPenToSquare} from "react-icons/fa6";
import { MdEventAvailable } from "react-icons/md";


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
    <div className="w-11/12 mx-auto my-10">
      <motion.div
      className="w-full items-center gap-6 rounded-lg p-6 my-6 bg-base-100"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      
      {/* Donator Details */}
      <div className="overflow-x-auto">
      <h1 className="text-2xl font-bold">Donor Details</h1>
      <div className="divider"></div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  src={food?.donator_image}
                  alt={food?.donator_name}
                  className="w-10 h-10 rounded-full border-2 border-primary-bg object-cover"
                />
              </td>
              <td> {food?.donator_name || "N/A"}</td>
              <td>{food?.donator_email || "N/A"}</td>
              <td>{food?.location.slice(0,50) ||"N/A"}</td>
            </tr>
          </tbody>
        </table>
        <div className="divider"></div>
      </div>

      <h1 className="text-2xl font-bold">Food Details</h1>
      <div className="divider"></div>
      <div className="flex flex-col md:items-center md:flex-row gap-6">
     
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={food?.food_image}
            alt={food?.food_name}
            className="h-[300px] w-full object-cover rounded-lg shadow-lg border-4 border-primary-bg"
          />
        </div>

        <div className="space-y-6 md:w-1/2">
          {/* Food Details */}
          <div className="text-gray-700 space-y-3">
            <p className="text-sm text-green-600 font-medium">
              Quantity: {food?.quantity}
            </p>
            <h3 className="text-lg font-bold text-primary">
              Food : {food?.food_name}
            </h3>
            <p className="text-sm flex gap-1"> <span><FaLocationDot className="text-green-400" /></span> <span>
            Pickup Location : {food?.location}</span> </p>
            <p className="text-sm flex gap-1"> <span>
            <MdEventAvailable className="text-primary-bg" /></span> <span>
            Availablity : {food?.status}</span> </p>
            <p className="text-sm flex gap-1">
            <span><FaCalendar className="text-blue-300"/></span> <span>
            Expires on : {format(new Date(food?.expired_date), "dd-MM-yyyy")}
            </span>
            </p>
            <p className="text-sm flex gap-1">
             <span><FaPenToSquare/></span> <span>
             Additional Notes:
             {food?.additional_notes || "No additional notes provided"}
             </span>
            </p>
          </div>

          {/* Action Button */}
          <div className="">
            <button
              onClick={() => document.getElementById(food?._id).showModal()}
              className="px-5 py-3 bg-primary-bg text-white hover:bg-primary-bg/80 rounded-full"
            >
              Request
            </button>
          </div>
        </div>
        
      </div>
      <div className="divider"></div>
      <RequestFormModal food={food} />
    </motion.div>
    </div>
  );
};

export default SingleFoodDetails;
