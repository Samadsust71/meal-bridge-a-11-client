import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../../components/Loading";
import { format } from "date-fns";


const FoodRequest = () => {
  const { user } = useAuth();
  const axiosInstance = useAxiosSecure();

  const {
    data: myRequestedFoods,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["myRequestedFoods", user?.email],
    queryFn: async () => {
      const { data } = await axiosInstance.get(`/foodRequests/${user?.email}`);
      return data;
    },
  });
  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="flex justify-center items-center my-5">
        <p className="text-center">Unable to load food data. Please check your internet connection or try reloading the page.</p>
      </div>
    );

  return (
    <div className="p-6 bg-base-100 rounded-lg shadow-lg my-10">
      <h2 className="text-3xl font-semibold text-center mb-6">Requested Foods</h2>
      <div className="divider"></div>
      <div className="overflow-x-auto">
        {myRequestedFoods && myRequestedFoods.length ? (
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>Serial</th>
                <th>Donor Name</th>
                <th>Donor Email</th>
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
                  <td>{food?.donator_email}</td>
                  <td>{food?.location.slice(0,50)}</td>
                  <td>{format(new Date(food?.requested_time),"dd-MM-yyyy")}</td>
                  <td>{format(new Date(food?.expired_date),"dd-MM-yyyy")}</td>
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
