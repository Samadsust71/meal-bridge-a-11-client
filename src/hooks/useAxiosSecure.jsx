
import  { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import useAuth from './useAuth'

const axiosInstance = axios.create({
    baseURL:'https://meal-bridge-server.vercel.app',
    withCredentials:true
})

const useAxiosSecure = () => {
    const {signOutUser} = useAuth()
    const navigate = useNavigate()
   
    useEffect(() => {
        const interceptor = axiosInstance.interceptors.response.use(
          (response) => response,
          (error) => {
            if (error.response?.status === 401 || error.response?.status === 403) {
              signOutUser()
                .then(() => {
                  navigate("/login");
                })
                .catch((err) => toast.error(err.message || "Something went wrong"));
            }
            return Promise.reject(error);
          }
        );
      
        return () => {
          axiosInstance.interceptors.response.eject(interceptor);
        };
      }, [signOutUser, navigate]);

  return axiosInstance

}

export default useAxiosSecure