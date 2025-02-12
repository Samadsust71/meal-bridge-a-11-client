import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const ReviewForm = () => {
  const { isPending, mutateAsync } = useMutation({
    mutationFn: async (reviewData) => {
      await axios.post(
        "https://meal-bridge-server.vercel.app/user-reviews",
        reviewData
      );
    },
    onSuccess: () => {
      toast.success(
        "Thank you for your review, Bridge the Gap, Share the Meal."
      );
    },
    onError: (err) => {
      toast.error("Something went wrong please try again");
      console.log(err.message);
    },
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const role = form.role.value;
    const email = form.email.value;
    const image = form.photo.value;
    const feedback = form.message.value;
    const reviewData = { name, role, email, image, feedback };
    await mutateAsync(reviewData);
    form.reset();
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-lg space-y-4 w-full max-w-lg"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-2 gap-2">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Name"
            name="name"
            required
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
          />
          {/* Role Dropdown */}
          <select
            name="role"
            defaultValue="User"
            required
            className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
          >
            <option value="User">
              Select Role
            </option>
            <option value="Food Donor">Donor</option>
            <option value="Food Recipient">Recipient</option>
            <option value="Volunteer">Volunteer</option>
          </select>
        </div>
        {/* Email Input */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
        />

        {/* Photo Input */}
        <input
          type="url"
          name="photo"
          placeholder="Photo(URL)"
          required
          className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
        />

        {/* Message Input */}
        <textarea
          placeholder="Message"
          name="message"
          rows="4"
          required
          className="w-full p-3 max-h-40 min-h-40 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-bg"
        ></textarea>
        {/* Submit Button */}
        <button
          type="submit"
          disabled={isPending}
          className="disabled:cursor-not-allowed  w-full p-3 bg-primary-bg text-white font-semibold rounded-full hover:bg-primary-bg/95 transition duration-200"
        >
          {isPending ? "Sending..." : "Send It!"}
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
