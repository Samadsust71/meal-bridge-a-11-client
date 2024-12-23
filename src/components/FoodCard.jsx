import { easeInOut, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {  format } from "date-fns";

// eslint-disable-next-line react/prop-types
const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    quantity,
    expired_date,
    donator_name,
    donator_image,
  } = food || {};
  const navigate = useNavigate();
  return (
    <motion.div
      className="w-full shadow-lg rounded-lg p-4 border-2 border-gray-200 hover:shadow-2xl flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Donator Details */}
      <div className="flex items-center justify-between mb-4">
        <img
          src={donator_image}
          alt={donator_name}
          className="w-10 h-10 rounded-full border-2 border-[#00FFAB] object-cover"
        />
        <div className="ml-3">
        <p className="text-sm text-gray-400 mt-1">Expires on: {format(new Date(expired_date),"dd-MM-yyyy")}</p>
        </div>
      </div>
      {/* Image Section */}
      <div className="relative flex justify-center items-center">
        <img
          src={food_image}
          alt={food_name}
          className="w-full h-[200px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Food Details */}
      <motion.div
        className="mt-4 flex-grow"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeInOut }}
      >
        <h3 className="text-lg font-bold text-gray-800">{food_name}</h3>
        <p className="text-sm text-green-600 font-medium">
          Quantity: {quantity}
        </p>
        
      </motion.div>

      

      {/* Action Button */}
      <button
        onClick={() => navigate(`/foods/${_id}`)}
        className="w-full bg-primary-bg text-white font-semibold py-2 mt-4 rounded-lg hover:bg-primary-bg/85 transition-all"
      >
        View Details
      </button>
    </motion.div>
  );
};

export default FoodCard;
