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
    
      if (isError) return <div className="flex justify-center items-center my-6">
      <p className="text-center">Unable to load food data. Please check your internet connection or try reloading the page.</p>
    </div>
  return (
    <div className="w-11/12 mx-auto py-12">
        <div className="text-center mb-6">
           <h1 className="text-2xl lg:text-4xl font-bold text-primary">Featured Foods</h1>
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          foods && foods.length >0?
          (
            <div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foods.map((food) => (
                <FoodCard key={food._id} food={food} />
              ))}
            </div>
            <div className="text-center mt-10">
            <Link to={`/available-foods`} className="w-fit px-4 bg-primary-bg text-white font-semibold py-2 mt-6 rounded-lg hover:bg-primary-bg/85 transition-all" >See All Foods</Link>
            </div>
           </div>
          ) : <p className="text-center my-6">No foods available.</p>
        )}
    </div>
  )
}

export default FeaturedFoods
