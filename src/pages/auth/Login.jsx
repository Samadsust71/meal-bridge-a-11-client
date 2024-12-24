import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../../components/SocialLogin";
import { useForm } from "react-hook-form";

import Lottie from "lottie-react";
import loginAnimationData from "../../assets/lottie/login_lottie.json";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Login = () => {
    const [showPass, setShowPass] = useState(false);
    const{ signInUser} = useAuth()
    const navigate =useNavigate()
  const location = useLocation()
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();
  const onSubmit = (data) => {
    const { email, password } = data;
    signInUser(email, password)
      .then(() => {
        toast.success("Login Succesfull");
          navigate(`${location?.state || "/"}`);
          reset()
        
      })
      .catch(() => {
        toast.error('Invalid Email or Password');
      });
  };
  return (
    <div className="max-w-4xl">
      <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center px-4 lg:px-16 py-8 ">
        {/* Left - Form */}
        <div className="lg:w-1/2 w-full">
          <h1 className="font-semibold text-center mb-2 text-PrimaryBlue">
            Welcome back!
          </h1>
          <h2 className="text-3xl font-bold text-center mb-4">Member Login</h2>

          {/* Google Sign-in */}
          <SocialLogin title="in" />

          <div className="divider">Or Continue With</div>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 text-sm font-medium">
                Password *
              </label>
              <input
                type={showPass ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                className={`w-full p-3 border rounded-lg ${
                  errors.password ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="******"
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
              className="w-full p-3 text-white bg-primary-bg rounded-lg "
            >
              Login
            </button>
          </form>
          <p className="text-center mt-6">
            Don&apos;t have an account?{" "}
            <Link to={"/register"} className="text-primary-bg">
              Register
            </Link>{" "}
          </p>
        </div>
        {/* Right - Lottie Animation */}
        <div className="lg:w-1/2 w-full mt-8 lg:mt-0 ">
          <Lottie animationData={loginAnimationData}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Login;
