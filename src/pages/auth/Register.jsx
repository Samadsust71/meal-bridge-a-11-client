
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimationData from "../../assets/lottie/Register_lottie.json"
import toast from "react-hot-toast";
import useAuth from "../../hooks/useAuth";
import SocialLogin from "../../components/SocialLogin";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [showPass, setShowPass] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate()
  const {createUser,updateUser, setUser,loading, setLoading} = useAuth()
 

  // Handle form submission
  const onSubmit = (data) => {

    const {name,email,photo,password} = data

    createUser(email,password)
    .then(result=>{
        const user = result?.user
        updateUser(name,photo)
        setUser(user);
        toast.success("Registration Succesfull!!!");
        navigate("/");
        setLoading(false)
  })
    .catch(error=>{
        toast.error(error.message || "Something went wrong")
        setLoading(false)
    })
    
  };

  return (
    <div className="max-w-4xl">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center px-4 lg:px-16 py-8 ">
        {/* Left - Form */}
        <div className="lg:w-1/2 w-full">
          <h1 className="font-semibold text-center mb-2 text-PrimaryBlue">Register</h1>
          <h2 className="text-3xl font-bold text-center mb-4">
          Join MealBridge Today
          </h2>
         

          {/* Google Sign-in */}
          <SocialLogin title="up"/>

          <div className="divider">Or Continue With</div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            {/* Name*/}
            <div>
              <label className="block mb-1 text-sm font-medium">
                Name *
              </label>
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                className={`w-full p-3 border rounded-lg ${
                  errors.username ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>
            
            {/*Email */}
            <div>
              <label className="block mb-1 text-sm font-medium">Email *</label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className={`w-full p-3 border rounded-lg ${
                  errors.email ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            {/*Photo*/}
            <div>
              <label className="block mb-1 text-sm font-medium">Photo URL *</label>
              <input
                type="url"
                {...register("photo", { required: "Photo Url is required" })}
                className={`w-full p-3 border rounded-lg ${
                  errors.photo ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter your photo url"
              />
              {errors.photo && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.photo.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium">
                Password *
              </label>
              <input
                type={showPass ? "text" : "password"}
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/,
                    message:
                      "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long",
                  },
                })}
                className={`w-full p-3 border rounded-lg ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enter Your Password"
              />
              <button
              type="button"
                onClick={() => setShowPass(!showPass)}
          
                className="btn btn-xs absolute right-2 top-9"
              >
                {showPass ? <FaEye /> : <FaEyeSlash />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full p-3 text-white bg-primary-bg rounded-lg "
            >
              {loading?"Registering...":"Register"}
            </button>
          </form>
          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link to={"/login"} className="text-primary-bg">
              Sign In
            </Link>{" "}
          </p>
        </div>
         {/* Right - Lottie Animation */}
      <div className="lg:w-1/2 w-full mt-8 lg:mt-0 ">
       <Lottie animationData={registerAnimationData}></Lottie>
      </div>
      </div>
    </div>
  );
};

export default Register;
