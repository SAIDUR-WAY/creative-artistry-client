import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () =>{
     const {user, loading}= useContext(authContext);
     const [axiosSecure] = useAxiosSecure();
     const token = localStorage.getItem('creative-token')
     const {data: isAdmin, isLoading: isAdminLoading}= useQuery({
          queryKey: ['isAdmin', user?.email],
          enabled: !loading,
          queryFn: async () =>{
               const res = await axiosSecure.get(`/users/admin/${user.email}`, {headers: {
                    authorization: `bearer ${token}`
                    
               }})
               return res.data.admin;
          }
     })
     return [isAdmin, isAdminLoading]
}
export default useAdmin;