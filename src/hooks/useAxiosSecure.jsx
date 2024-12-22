
import  { useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'
import useAuth from './useAuth'

const axiosInstance = axios.create({
    baseURL:'http://localhost:3000',
    withCredentials:true
})

const useAxiosSecure = () => {
    const {signOutUser} = useAuth()
    const navigate = useNavigate()
   
    useEffect(()=>{
     axiosInstance.interceptors.response.use((response)=>{
        return response
     },(error)=>{
        
         if (error.status=== 401 || error.status=== 403) {
            signOutUser()
            .then(()=>{
                navigate("/signIn")
            })
            .catch(err=>toast.error(err.message || "Something went wrong"))
         }
        return Promise.reject(error)
     })
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return axiosInstance

}

export default useAxiosSecure