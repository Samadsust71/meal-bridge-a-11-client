import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const ManageFood = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const queryClient = useQueryClient();
  const {
    data: myFoods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myFoods", user],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/myFoods/${user?.email}`);
      return data;
    },
  });
  
  if(isLoading) return <Loading/> 

  if (isError)
    return (
      <div className="flex justify-center items-center my-5">
        <p className="text-center">No food here</p>
      </div>
    );
   const handleDelete= (id)=>{

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then(async (result) => {
      if (result.isConfirmed) {
        
      const {data}= await axiosInstance.delete(`/foods/${id}`)
        if (data.deletedCount) {
          Swal.fire({
            title: "Deleted!",
            text: "Your food has been deleted.",
            icon: "success"
          }); 
          queryClient.invalidateQueries(["myFoods"]);
        }
        
      }
    });

   }
  return (
    <div className="p-6  rounded-lg shadow-lg my-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Donated Foods</h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        {myFoods.length ? (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Food Name</th>
                <th>Food Quantity</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
              {
                myFoods.map((food,idx)=><tr key={food?._id}>
                  <th>{idx+1}</th>
                  <td>{food?.food_name}</td>
                  <td>{food?.quantity}</td>
                  <td>
                    <Link state={food} to={`/updateMyFoods/${food?._id}`}>Update</Link>
                  </td>
                  <td>
                    <button onClick={()=>handleDelete(food?._id)}>delete</button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center my-5">
            <p className="text-center">No food here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageFood;
