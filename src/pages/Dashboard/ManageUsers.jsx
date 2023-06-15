import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";


const ManageUsers = () => {
     const {data: users = [], refetch} = useQuery(['users'], async()=>{
          const res = await fetch('http://localhost:5000/users')
          return res.json();
     })
     
     const handleMakeAdmin = (user, role)=>{
     //    console.log( user._id, role)
        fetch(`http://localhost:5000/users/manage?email=${user?.email}&role=${role}`,{
          method: 'PATCH',


        })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          if(data.modifiedCount){
               refetch()
               Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `${user.name} is an ${role}`,
                    showConfirmButton: false,
                    timer: 1500
                  })
          }
        })
     }

     const handleDelete = (id)=>{
          fetch(`http://localhost:5000/users/${id}`, {
               method: 'DELETE'
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data.deletedCount){
                    refetch()
                    Swal.fire({
                         position: 'top-end',
                         icon: 'success',
                         title: ` This user Successful deleted `,
                         showConfirmButton: false,
                         timer: 1500
                       })
               }
          })
     }
     return (
          <div className="w-full">
               <h2 className="text-center text-3xl">Total users: {users.length}</h2>

               <div className="overflow-x-auto">
          <table className="table">
          <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
        <th>Action</th>
        <th>Action</th>

      </tr>
      </thead>
    <tbody>

   
    
    {
     users.map((user, index) => <tr
     key={user._id}
     >
          <th>
               {index + 1}
          </th>
          <td>
            <span className="badge badge-ghost badge-sm">{user?.name}</span>
          </td>
          <td>{user?.email}</td>
          <td>{user?.role}</td>
          <th>
            <button onClick={()=>handleMakeAdmin(user, 'instructor')}  className={`btn text-red-600 bg-[#2B3441]  btn-xs ${ user?.role == 'instructor' ? 'btn-disabled opacity-50' : '' }`}>Make Instructor</button>
          </th>
          <th>
            <button onClick={()=>handleMakeAdmin(user, 'admin')}  className={`btn text-red-600 bg-[#2B3441]  btn-xs ${ user?.role == 'admin' ? 'btn-disabled opacity-50' : '' }`}>Make Admin</button>
          </th>
          <th>
            <button onClick={()=>handleDelete(user._id)} className="btn text-red-600 btn-ghost bg-[#2B3441] btn-xs">Delete</button>
          </th>
        </tr> )
    }
 


    </tbody>
        </table>
               </div>
          </div>
     );
};

export default ManageUsers;