import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";


const FoodRequest = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();

  const {
    data: myRequestedFoods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myRequestedFoods", user],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/foodRequests/${user?.email}`);
      return data;
    },
  });
  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="flex justify-center items-center my-5">
        <p className="text-center">No food here</p>
      </div>
    );

  return (
    <div className="p-6  rounded-lg shadow-lg my-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Requested Foods</h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        {myRequestedFoods.length ? (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Donor Name</th>
                <th>Pickup Location</th>
                <th>Request Date</th>
                <th>Expire date</th>
              </tr>
            </thead>
            <tbody>
              {myRequestedFoods.map((food, idx) => (
                <tr key={food?._id}>
                  <th>{idx + 1}</th>
                  <td>{food?.donator_name}</td>
                  <td>{food?.location}</td>
                  <td>{food?.requested_time}</td>
                  <td>{food?.expired_date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="flex justify-center items-center my-5">
            <p className="text-center">No requested food here</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodRequest;
