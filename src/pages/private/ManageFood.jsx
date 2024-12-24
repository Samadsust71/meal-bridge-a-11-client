import { useQuery, useQueryClient } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import {  format } from "date-fns";


const ManageFood = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();
  const queryClient = useQueryClient();
  const {
    data: myFoods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myFoods", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/myFoods/${user?.email}`);
      return data;
    },
  });
  
  if(isLoading) return <Loading/> 

  if (isError)
    return (
      <div className="flex justify-center items-center my-5">
        <p className="text-center">Unable to load food data. Please check your internet connection or try reloading the page.</p>
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
    <div className="p-6 bg-base-100 rounded-lg shadow-lg my-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Added Foods</h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        {myFoods && myFoods.length ? (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Food Name</th>
                <th>Food Quantity</th>
                <th>Expired Date</th>
                <th>Status</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
              {
                myFoods.map((food,idx)=><tr key={food?._id}>
                  <th>{idx+1}</th>
                  <td>{food?.food_name.slice(0,30)}</td>
                  <td>{food?.quantity}</td>
                  <td>{format(new Date(food?.expired_date),"dd-MM-yyyy") }</td>
                  <td className={`${food?.status === "available"?"text-sky-500":"text-orange-500"}`}>{food?.status}</td>
                  <td>
                    <Link className="text-sm bg-green-100 px-2 py-1 rounded-full text-green-500" state={food} to={`/updateMyFoods/${food?._id}`}>update</Link>
                  </td>
                  <td>
                    <button className="text-sm bg-red-100 px-2 py-1 rounded-full text-red-500" onClick={()=>handleDelete(food?._id)}>delete</button>
                  </td>
                </tr>)
              }
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center my-5">
            <p className="text-center">No food added</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageFood;
