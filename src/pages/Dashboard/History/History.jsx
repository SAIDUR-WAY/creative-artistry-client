import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { authContext } from "../../../Provider/AuthProvider";


const History = () => {
     const [enrolled, setEnrolled] = useState([]);
     console.log(enrolled);
     const {user} = useContext(authContext);
     const [axiosSecure] = useAxiosSecure()

     useEffect(()=>{
          axiosSecure.get(`/payment?email=${user?.email}`)
          .then(res => {
               // console.log(res.data)
               setEnrolled(res.data)        
               // const sortedEnrolled = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
               // setEnrolled(sortedEnrolled);
          })
     }, [user?.email, axiosSecure])

     const formatDateTime = (dateTimeString) => {
          const options = { 
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
          };
          return new Date(dateTimeString).toLocaleString("en-GB", options);
        };
      


     return (
          <>
          <div>
               <h2 className="text-3xl uppercase font-bold py-4">Total History:{enrolled.length} </h2>
          </div>
          <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>ClassName</th> 
        <th>InstructorName</th> 
        <th>Price</th> 
        <th>Date</th> 
        <th>Status</th> 
        <th>transactionId</th> 
      </tr>
    </thead> 
    <tbody>
     {
          enrolled?.map((enrol, index) =>       <tr
          key={enrol._id}
          >
               <th>{index + 1}</th> 
               <td>{enrol.className}</td> 
               <td>{enrol.instructorName}</td>  
               <td>{enrol.price}</td>
               <td>{formatDateTime(enrol.date)}</td> 
               <td>{enrol.orderStatus}</td> 
               <td>{enrol.transactionId}</td>
             </tr>
              )
     }

      
    </tbody> 
   
  </table>
</div>
          </>
     );
};

export default History;