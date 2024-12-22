import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom"
import Loading from "../../components/Loading";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import RequestFormModal from "../../components/RequestFormModal";



const SingleFoodDetails = () => {
  const{id} = useParams()
  const axiosInstance = useAxiosSecure()

  const {
    data: food,
    isLoading,
    isError,
  } = useQuery({
    queryKey: [id],
    queryFn: async () => {
      const { data } = await axiosInstance.get(
        `/foods/${id}`
      );
      return data;
    },
  });
  
  if(isLoading) return <Loading/>

  if (isError) return <p className="text-center">Food details not available</p>;
  
  return (
    <div className="flex flex-col justify-center items-center">
     <div className="card bg-base-100 w-full shadow-xl">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{food?.food_name}</h2>
        <p>{food?.location}</p>
        <p>{food?.quantity}</p>
        <p>{food?.expired_date}</p>
        <p>{food?.donator_name}</p>
        <p>{food?.additional_notes}</p>
        <div className="card-actions">
          <button  onClick={() => document.getElementById(food?._id).showModal()} className="btn btn-primary">Request</button>
        </div>
      </div>
      
    </div>
    <RequestFormModal food={food} />
    </div>
  )
}

export default SingleFoodDetails
