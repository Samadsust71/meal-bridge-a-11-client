/* eslint-disable react/prop-types */
import {
  CalculatorIcon,
  CalendarDaysIcon,
  CreditCardIcon,
  ImagesIcon,
  MailIcon,
  MapPinCheckIcon,
  NotebookPenIcon,
  SaladIcon,
  UserCheckIcon,
} from "lucide-react";
import DatePicker from "react-datepicker";
import useAuth from "../hooks/useAuth";
import { useRef, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useMutation } from "@tanstack/react-query";

const RequestFormModal = ({ food }) => {
  const {
    _id,
    food_name,
    food_image,
    quantity,
    location,
    additional_notes,
    donator_name,
    donator_email,
  } = food || {};

  const dialogRef = useRef(null);
  const { user } = useAuth();
  const [startDate, setStartDate] = useState(new Date());
  const axiosInstance = useAxiosSecure();

  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (foodData) => {
      await axiosInstance.patch(`/foods/${_id}`, foodData);
    },
    onSuccess: () => {
      console.log("data saved");
      dialogRef.current.close();
    
    },

    onError: () => {
      console.log("something wrong");
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const requested_time = startDate;
    const additional_notes = form.additional_notes.value;
    const status = "requested";
    const donee_email = user?.email
    const formData = { requested_time, additional_notes, status,donee_email };
    await mutateAsync(formData);
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={_id} className="modal modal-bottom sm:modal-middle" ref={dialogRef}>
        <div className="modal-box">
          <form  onSubmit={handleSubmit} className="space-y-4">
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
                defaultValue={food_name}
                readOnly
              />
            </div>

            {/*Food Image */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center">
                  <ImagesIcon className="mr-2" /> Food Image
                </span>
              </label>
              <input
                type="url"
                name="food_image"
                placeholder="Enter food image URL"
                className="input input-bordered"
                defaultValue={food_image}
                readOnly
              />
            </div>
            {/*Food Id */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center">
                  <CreditCardIcon className="mr-2" /> Food ID
                </span>
              </label>
              <input
                type="text"
                name="food_id"
                placeholder="Enter food id"
                className="input input-bordered"
                defaultValue={_id}
                readOnly
              />
            </div>
            {/*Food donor name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center">
                  <UserCheckIcon className="mr-2" /> Food Donor
                </span>
              </label>
              <input
                type="text"
                name="donor_name"
                placeholder="Enter food donor"
                className="input input-bordered"
                defaultValue={donator_name}
                readOnly
              />
            </div>
            {/*Food donor email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center">
                  <MailIcon className="mr-2" /> Donor Email
                </span>
              </label>
              <input
                type="email"
                name="donor_email"
                placeholder="Enter food donor"
                className="input input-bordered"
                defaultValue={donator_email}
                readOnly
              />
            </div>
            {/*user email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center">
                  <MailIcon className="mr-2" /> User Email
                </span>
              </label>
              <input
                type="email"
                name="user_email"
                placeholder="Enter food donor"
                className="input input-bordered"
                defaultValue={user?.email}
                readOnly
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
                defaultValue={quantity}
                readOnly
              />
            </div>
            {/* Pickup Location */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center">
                  <MapPinCheckIcon className="mr-2" /> Pickup Location
                </span>
              </label>
              <input
                type="text"
                name="location"
                placeholder="Enter pickup location"
                className="input input-bordered"
                defaultValue={location}
                readOnly
              />
            </div>

            {/*Expired Date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text flex items-center">
                  <CalendarDaysIcon className="mr-2" />
                  Requested Date
                </span>
              </label>
              <DatePicker
                className="select select-bordered w-fit"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                readOnly
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
                defaultValue={additional_notes}
              />
            </div>
             {/* Submit Button */}
          <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">
            {isPending?'Adding...':'Add'}
          </button> 
          </div>
          </form>
          
        </div>
      </dialog>
    </div>
  );
};

export default RequestFormModal;
