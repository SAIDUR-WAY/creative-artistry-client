import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const useMyClasses = () => {
     const {user} = useContext(authContext);
          // console.log(user)
     const { refetch, data: myclasses = [] } = useQuery({
          queryKey: ['myclasses', user?.email],
          queryFn: async () => {
               const res = await fetch(`http://localhost:5000/myclasses?email=${user?.email}`)
               return res.json();
          }
        }) 
        return [myclasses, refetch]
};

export default useMyClasses;