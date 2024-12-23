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
  return (
    <div >
        <div className="text-center my-6">
           <h1 className="font-semibold text-2xl">Featured Foods</h1>
        </div>

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
