import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { authContext } from "../../../Provider/AuthProvider";


const Enrolled = () => {
     const [enrolled, setEnrolled] = useState([]);
     console.log(enrolled);
     const [axiosSecure] = useAxiosSecure()
     const {user} = useContext(authContext);

     useEffect(()=>{
          axiosSecure.get(`/payment?email=${user?.email}`)
          .then(res => {
               // console.log(res.data)
               setEnrolled(res.data)        
               // const sortedEnrolled = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
               // setEnrolled(sortedEnrolled);
          })
     }, [axiosSecure])

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
               <h2 className="text-3xl font-bold uppercase py-4">Total enrolled:{enrolled.length}</h2>
          </div>
          <div className="overflow-x-auto">
  <table className="table table-xs">
    <thead>
      <tr>
        <th></th> 
        <th>Image/ClassName</th> 
        <th>InstructorName</th> 
        <th>AvailibleSeats</th> 
        <th>Price</th> 
        <th>Date&Time</th> 
        <th>Status</th> 
        

      </tr>
    </thead> 
    <tbody>
     {
          enrolled?.map((enrol, index) =>   <tr
          key={enrol._id}
          >
          <th>
            {index +1}
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-square w-12 h-12">
                  <img src={enrol?.imageUrl}alt="image" />
                </div>
              </div>
              <div>
                <div className="font-bold">{enrol.className}</div>
              </div>
            </div>
          </td>
          <td>
            <div className="badge badge-ghost badge-sm">{enrol.instructorName}</div>
          </td>
          <td>{enrol.availibleSeats}</td>
          <td>
            <div className="btn btn-ghost btn-xs">{enrol.price}</div>
          </td>
          <td>{formatDateTime(enrol.date)}</td>
          <td>
            <span className="btn btn-ghost btn-xs">{enrol.orderStatus}</span>
          </td>
        </tr>
              )
     }

      
    </tbody> 
   
  </table>
</div>
          </>
     );
};

export default Enrolled;