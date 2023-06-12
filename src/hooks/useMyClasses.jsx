import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "./useAxiosSecure";


const useMyClasses = () => {
     const {user, loading} = useContext(authContext);
     const token = localStorage.getItem('creative-token')

     // const [axiosSecure] = useAxiosSecure();
     const { refetch, data: myclasses = [] } = useQuery({
          queryKey: ['myclasses', user?.email],
          enabled: !loading,
          queryFn : async()=> {
               const res = await fetch(`https://creative-artistry-server-saidur-way.vercel.app/myclasses?email=${user?.email}`, {headers: {
                    authorization: `bearer ${token}`
               }})
               return res.json()
          }
          
          // queryFn: async () => {
          //      const res = await axiosSecure(`/myclasses?email=${user?.email}`)

          //      return res.data;
          // }
        }) 
        return [myclasses, refetch]
};

export default useMyClasses;