import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import FoodCard from "./FoodCard";
import Loading from "./Loading";


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
      console.log(foods)
  return (
    <div >
        {isLoading ? (
          <Loading />
        ) : (
          (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {foods.map((food) => (
                <FoodCard key={food._id} food={food} />
              ))}
            </div>
          ) || <p>No foods available.</p>
        )}
    </div>
  )
}

export default FeaturedFoods
