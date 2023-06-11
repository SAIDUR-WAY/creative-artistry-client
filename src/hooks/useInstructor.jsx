
import { authContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { useContext } from "react";

const useInstructor = () =>{
     const {user, loading}= useContext(authContext);
     const [axiosSecure] = useAxiosSecure();
     const token = localStorage.getItem('creative-token')
     const {data: isInstructor, isLoading: isInstructorLoading}= useQuery({
          queryKey: ['isInstructor', user?.email],
          enabled: !loading,
          queryFn: async () =>{
               const res = await axiosSecure.get(`/users/instructor/${user.email}`, {headers: {
                    authorization: `bearer ${token}`
                    
               }})
               return res.data.admin;
          }
     })
     return [isInstructor, isInstructorLoading]
}
export default useInstructor;