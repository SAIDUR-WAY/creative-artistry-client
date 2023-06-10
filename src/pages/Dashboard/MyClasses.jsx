import Swal from "sweetalert2";
import TableCard from "../../component/TableCard";
import useMyClasses from "../../hooks/useMyClasses";


const MyClasses = () => {
     const [myclasses, refetch] = useMyClasses()
     console.log(myclasses);

     const handleDelete = id =>{
          Swal.fire({
               title: 'Are you sure?',
               text: "You won't be able to revert this!",
               icon: 'warning',
               showCancelButton: true,
               confirmButtonColor: '#3085d6',
               cancelButtonColor: '#d33',
               confirmButtonText: 'Yes, delete it!'
             }).then((result) => {
               if (result.isConfirmed) {
                    fetch(`http://localhost:5000/myclasses/${id}`, {
                         method: 'DELETE',
                    })
                    .then(res => res.json())
                    .then(data => {
                         if(data.deletedCount > 0){
                              refetch()
                              Swal.fire(
                                   'Deleted!',
                                   'Your file has been deleted.',
                                   'success'
                                 )
                         }
                    })
               }
             })
          
     }

     return (
          <div>
               <h2 className="text-3xl font-semibold">Total Class: {myclasses.length} </h2>
          <div>
          <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Image/ClassName</th>
        <th>InstractorName</th>
        <th>AvailableSeats</th>
        <th>Price</th>
        <th>Action</th>
        <th>Payment</th>
      </tr>
    </thead>
    <tbody>
     {
          myclasses?.map((data, index) => <TableCard
          key={data._id}
          data={data}
          index={index}
          handleDelete={handleDelete}
          ></TableCard> )
     }

     
    </tbody>
    
  </table>
</div>
          </div>

          </div>
     );
};

export default MyClasses;