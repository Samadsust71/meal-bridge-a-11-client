import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FoodCard from "../../components/FoodCard";
import { useQuery } from "@tanstack/react-query";

import Loading from "../../components/Loading";

const AvailableFoods = () => {
  const axiosInstance = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [layout, setLayout] = useState(true)

  const {
    data: foods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["foods", search, sort],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/foods?status=available&search=${search}&sort=${sort}`
      );
      return data;
    },
  });

  if (isError) return <p className="text-center">No foods available.</p>;
 
  const handleReset = () => {
    setSearch("");
    setSort("");
  };
  return (
    <div className=" py-10  flex flex-col justify-between">
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="flex p-1 overflow-hidden border rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-6 py-2 outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter food name"
              aria-label="Enter food name"
              defaultValue={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>

          <div>
            <select
              name="category"
              id="category"
              className="border p-4 rounded-md"
              defaultValue={sort}
              onChange={(e) => setSort(e.target.value)}
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
      <div className="hidden lg:block">
        <button onClick={()=>setLayout(!layout)} className="btn">Layout</button>
      </div>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          (
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 lg:${ layout ?'grid-cols-3':"grid-cols-2"}`}>
              {foods.map((food) => (
                <FoodCard key={food._id} food={food} />
              ))}
            </div>
          ) || <p>No foods available.</p>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
