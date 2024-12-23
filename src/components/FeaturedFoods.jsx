import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import FoodCard from "./FoodCard";
import Loading from "./Loading";
import { Link } from "react-router-dom";


const FeaturedFoods = () => {
    const axiosInstance = useAxiosSecure()
    const {
        data: foods,
        isLoading,
        isError,
      } = useQuery({
        queryKey: ["featured-foods"],
        queryFn: async () => {
          const { data } = await axiosInstance.get(
            `/sorted-foods`
          );
          return data;
        },
      });
    
      if (isError) return <p className="text-center">No foods available.</p>;
  return (
    <div className="bg-gray-50 lg:p-10">
        <div className="text-center my-6">
           <h1 className="text-2xl lg:text-6xl font-bold text-primary">Featured Foods</h1>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          (
            <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foods.map((food) => (
                <FoodCard key={food._id} food={food} />
              ))}
            </div>
            <div className="text-center my-6">
            <Link to={`/available-foods`} className="w-fit px-4 bg-primary-bg text-white font-semibold py-2 mt-4 rounded-lg hover:bg-primary-bg/85 transition-all" >See All Foods</Link>
            </div>
           </div>
          ) || <p>No foods available.</p>
        )}
    </div>
  )
}

export default FeaturedFoods
