import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FoodCard from "../../components/FoodCard";
import toast from "react-hot-toast";

const AvailableFoods = () => {
  const axiosInstance = useAxiosSecure();
  const [foods, setFoods] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/foods")
      .then((res) => setFoods(res.data))
      .catch((err) => toast.error(err));
  }, [axiosInstance]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Perform search logic here if needed
  };

  const handleReset = () => {
    setSearchTerm("");
    // Reset other states or filters as required
  };

  return (
    <div className=" py-10  flex flex-col justify-between">
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <form onSubmit={handleSearch}>
            <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
              <input
                className="px-6 py-2 outline-none focus:placeholder-transparent"
                type="text"
                name="search"
                placeholder="Enter food name"
                aria-label="Enter food name"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none"
              >
                Search
              </button>
            </div>
          </form>
          <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-md"
            >
              <option value="">Sort By Expired Date</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div>
          <button className="btn" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>
      <div>
        {foods.length > 0 ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {foods.map((food) => (
              <FoodCard key={food._id} food={food} />
            ))}
          </div>
        ) : (
          <p>No foods available.</p>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
