import { useContext, useEffect, useState } from "react";
import { authContext } from "../../../Provider/AuthProvider";
import { Link } from "react-router-dom";



const InstClasses = () => {
     const {user} = useContext(authContext);
     const [classe, setClasse] = useState([]);

     useEffect(()=>{
        fetch(`http://localhost:5000/classes/?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
          setClasse(data);
        })
     }, [])

 
     return (
          <div className="w-full">
               <h2 className="text-center text-3xl">Total Classes: {classe.length}</h2>

               <div className="overflow-x-auto">
          <table className="table">
          <thead>
      <tr>
        <th>#</th>
        <th>Class Image</th>
        <th>Name</th>
        <th>Enrolled Student</th>
        <th>Status</th>
        <th>Action</th>
      </tr>
      </thead>
    <tbody>

   
    
    {
     classe.map((classed, index) => <tr
     key={classed._id}
     >
          <th>
               {index + 1}
          </th>
          <td>
            
              <div className="avatar">
                <div className="mask mask-square w-12 h-12">
                  <img src={classed.imageUrl}alt="image" />
                </div>
              </div>
             
          </td>
          <td>
            <span className="badge badge-ghost badge-sm">{classed?.className}</span>
          </td>
          <td>{classed.enrolledStudent}</td>
          <td>{classed.status}</td>
          <td>{classed.feedback}</td>

          <th>
            <button  className="btn text-red-600 btn-ghost bg-[#2B3441] btn-xs">
               <Link to={`/dashboard/update/${classed._id}`}>Update Class</Link></button>
          </th> 
        </tr> )
    }
 


    </tbody>
        </table>
               </div>
          </div>
     );
};

export default InstClasses;