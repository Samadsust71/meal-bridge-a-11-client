/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";


const FoodCard = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    quantity,
    location,
    additional_notes,
    expired_date,
    donator_name,
    donator_image,
    donator_email,
  } = food || {};
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{food_name}</h2>
        <p>{location}</p>
        <p>{quantity}</p>
        <p>{expired_date}</p>
        <p>{donator_name}</p>
        <p>{additional_notes}</p>
        <div className="card-actions">
          <Link to={`/foods/${_id}`} className="btn btn-primary">details</Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
