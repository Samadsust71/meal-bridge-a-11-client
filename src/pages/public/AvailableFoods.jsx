import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import FoodCard from "../../components/FoodCard";
import { useQuery } from "@tanstack/react-query";
import { FaSearch } from "react-icons/fa"

import Loading from "../../components/Loading";
import { useMediaQuery } from "react-responsive";

const AvailableFoods = () => {
  const axiosInstance = useAxiosSecure();
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [layout, setLayout] = useState(true);
  const isLargeScreen = useMediaQuery({ query: "(min-width: 1024px)" });
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });

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

  const getButtonText = () => {
    if (isSmallScreen) return "Layout";
    if (layout) return isLargeScreen ? "Layout: 3 Column" : "Layout: 2 Column";
    return isLargeScreen ? "Layout: 2 Column" : "Layout: 1 Column";
  };
  return (
    <div className="py-10 flex flex-col justify-between bg-gray-50 my-6 rounded-lg">
      <h1 className="text-center text-2xl lg:text-4xl font-bold mb-6 text-primary">All Available Foods</h1>
      <div>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="">
            <button onClick={() => setLayout(!layout)} className="text-white/90 font-bold btn bg-primary-bg hover:bg-primary-bg/80">
            {getButtonText()}
            </button>
          </div>
          <div className="flex p-1 overflow-hidden border  border-primary-bg rounded-lg focus-within:ring focus-within:ring-opacity-40 focus-within:border-primary-bg focus-within:ring-primary-bg/80">
            <input
              className="px-6 py-2 outline-none  focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter food name"
              aria-label="Enter food name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-primary-bg rounded-md hover:bg-primary-bg/80 focus:bg-primary-bg/80 focus:outline-none">
            <FaSearch />
            </button>
          </div>

          <div>
            <select
              name="category"
              id="category"
              className="border border-primary-bg p-4 rounded-md"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              <option value="">Sort By Expired Date</option>
              <option value="dsc">Descending Order</option>
              <option value="asc">Ascending Order</option>
            </select>
          </div>
          <button className="text-white/90 font-bold btn bg-primary-bg hover:bg-primary-bg/80" onClick={handleReset}>
            Reset
          </button>
        </div>
      </div>

      <div className="text-primary my-10 md:px-10">
        
        {isLoading ? (
          <Loading />
        ) : (
          foods && foods.length >0 ?
          (
            <div
              className={`grid grid-cols-1 md:${layout?"grid-cols-2":"grid-cols-1"} gap-6 lg:${
                layout ? "grid-cols-3" : "grid-cols-2"
              }`}
            >
              {foods.map((food) => (
                <FoodCard key={food._id} food={food} />
              ))}
            </div>
          ) : <p className="text-center">No foods available.</p>
        )}
      </div>
    </div>
  );
};

export default AvailableFoods;
