

const ReviewForm = () => {
    
  return (
    <div className="flex flex-col items-center justify-center">
      <form
        className="bg-white p-8 rounded-lg shadow-lg space-y-4 w-full max-w-md"
        onSubmit={(e) => e.preventDefault()}
      >
        {/* Name Input */}
        <input
          type="text"
          placeholder="Name"
          
          className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
        />
        {/* Email Input */}
        <input
          type="email"
          
          placeholder="Email"
          
          className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
        />

        {/* Photo Input */}
        <input
          type="url"
          placeholder="Photo(URL)"
          
          className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
        />
        {/* role Input */}
        <input
          type="text"
          placeholder="Role (e.g Donor)"
          className="w-full p-3 border rounded-full focus:outline-none focus:ring-2 focus:ring-primary-bg"
        />
        {/* Message Input */}
        <textarea
          placeholder="Message"
          rows="4"
          className="w-full p-3 max-h-40 min-h-40 border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-bg"
        ></textarea>
        {/* Submit Button */}
        <button
          type="submit"
          className="w-full p-3 bg-primary-bg text-white font-semibold rounded-full hover:bg-primary-bg/95 transition duration-200"
        >
          Send It!
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
