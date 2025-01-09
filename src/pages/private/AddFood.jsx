import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  CalculatorIcon,
  CalendarDaysIcon,
  FolderPenIcon,
  Image,
  Images,
  MailCheck,
  MapPin,
  NotebookPenIcon,
  SaladIcon,
} from "lucide-react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddFood = () => {
  const [startDate, setStartDate] = useState(new Date());
  const axiosInstance = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (foodData) => {
      await axiosInstance.post("/foods", foodData);
    },
    onSuccess: () => {
      toast.success(
        "Your food has been donated successfully! Thank you for your contribution."
      );
      navigate("/manage-my-foods");
    },

    onError: () => {
      toast.error(
        "Food donation failed. Please try again or check your inputs."
      );
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const donator_image = user?.photoURL;
    const donator_name = user?.displayName;
    const donator_email = user?.email;
    const status = form.status.value || "available";
    const food_name = form.food_name.value;
    const food_image = form.food_image.value;
    const quantity = parseInt(form.quantity.value);
    const location = form.location.value;
    const additional_notes = form.additional_notes.value;
    const expired_date = startDate;

    const formData = {
      food_name,
      food_image,
      quantity,
      location,
      additional_notes,
      expired_date,
      donator_name,
      donator_image,
      donator_email,
      status,
    };

    await mutateAsync(formData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-base-100 rounded-lg shadow-lg  my-10">
      <h2 className="text-3xl font-bold mb-6 text-center">Add Food</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* donator Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <FolderPenIcon className="mr-2" /> Donator Name
            </span>
          </label>

          <input
            type="text"
            name="donator_name"
            placeholder="Enter donor name"
            className="input input-bordered"
            value={user?.displayName}
            readOnly
            required
          />
        </div>
        {/* donator email */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <MailCheck className="mr-2" /> Donator Email
            </span>
          </label>

          <input
            type="email"
            name="donator_email"
            placeholder="Enter donator email"
            className="input input-bordered"
            value={user?.email}
            readOnly
            required
          />
        </div>

        {/* donator image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <Image className="mr-2" /> Donator Image
            </span>
          </label>

          <input
            type="text"
            name="donator_image"
            placeholder="Enter food name"
            className="input input-bordered"
            value={user?.photoURL}
            readOnly
            required
          />
        </div>
        {/* Food Name */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <SaladIcon className="mr-2" /> Food Name
            </span>
          </label>

          <input
            type="text"
            name="food_name"
            placeholder="Enter food name"
            className="input input-bordered"
            required
          />
        </div>

        {/*Food Image */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <Images className="mr-2" /> Food Image
            </span>
          </label>
          <input
            type="url"
            name="food_image"
            placeholder="Enter food image URL"
            className="input input-bordered"
            required
          />
        </div>
        {/*Food quantity */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <CalculatorIcon className="mr-2" /> Quantity
            </span>
          </label>
          <input
            type="number"
            name="quantity"
            min={1}
            placeholder="Enter food quantity"
            className="input input-bordered"
            required
          />
        </div>
        {/* Pickup Location */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <MapPin className="mr-2" /> Pickup Location
            </span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Enter pickup location"
            className="input input-bordered"
            required
          />
        </div>

         {/* status */}
         <div>
          <label className="label">
            <span className="label-text flex items-center">
              <CalendarDaysIcon className="mr-2" /> Status
            </span>
          </label>
          <select
            defaultValue="available"
            name="status"
            className="select select-bordered w-full max-w-xs"
          >
            <option value={"available"}>available</option>
          </select>
        </div>

        {/*Expired Date */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <CalendarDaysIcon className="mr-2" /> Expired Date
            </span>
          </label>
          <DatePicker
            className="select select-bordered w-fit"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
        </div>

       

        {/* Additional Notes */}
        <div className="form-control">
          <label className="label">
            <span className="label-text flex items-center">
              <NotebookPenIcon className="mr-2" /> Additional Notes
            </span>
          </label>
          <textarea
            name="additional_notes"
            placeholder="Additional notes"
            className="textarea textarea-bordered h-24"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="form-control mt-6">
          <button
            disabled={isPending}
            type="submit"
            className="btn bg-primary-bg hover:bg-primary-bg/70 text-white"
          >
            {isPending ? "Adding..." : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFood;
