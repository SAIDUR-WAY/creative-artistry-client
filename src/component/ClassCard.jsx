import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useMyClasses from "../hooks/useMyClasses";

const ClassCard = ({clas}) => {
  const {user} = useContext(authContext);
  const navigate = useNavigate()
  const location = useLocation()
  const [, refetch] = useMyClasses();
  const { _id,imageUrl, className, instructorName, availibleSeats
    , price, description, enrolledStudent} = clas || [];

    const handleAddToClass = () =>{

      if(user && user.email){
        const addedClass = {imageUrl, className, instructorName, availibleSeats, price, description, classId: _id, studentEmail: user.email, enrolledStudent: enrolledStudent
        }
        fetch('https://creative-artistry-server-saidur-way.vercel.app/myclasses', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(addedClass)
        })
        .then(res => res.json())
        .then(data => {
          if(data.message){
            Swal.fire({
              title: 'This Class All Ready Selected!',
              showClass: {
                popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
              }
            })
          }
          
          if(data.insertedId){
            refetch()
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Your class added',
              showConfirmButton: false,
              timer: 1500
            })
          }
        })
      }else{
        Swal.fire({
          title: 'Are you sure?',
          text: "You want to Select The Class",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Please Login'
        }).then((result) => {
          if (result.isConfirmed) {
           navigate('/login', {state: {from: location}})
          }
        })
      }
    }

     return (
         <div className={`border w-96 rounded-xl border-base-300 ${availibleSeats
          === 0 && 'bg-red-700'}`}>
         <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure><img src={imageUrl} alt="image"  style={{ height: '300px' }}/></figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-bold text-3xl mb-0 pb-0">{className}</h2>
        {/* <p className='mt-0 pt-0'>{description.split(0,5)}</p> */}
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
    <div className="card-body">
        <h2 className="card-title text-2xl">
        {className}
        </h2>
        <p className=''>Instructor Name: {instructorName}</p>
        <div className='flex justify-between font-semibold'>
         <p>Available Seats: {availibleSeats
}</p>
        <p>Price: ${price}</p>
        </div>
        {/* //TODO: button disabled men requarment */}
        <p></p>
       <button onClick={()=>handleAddToClass(clas)} className={`btn btn-primary ${ availibleSeats === 0 ? 'btn-disabled opacity-50' : ''}`}> Select Button</button>
      </div>
    
         </div>

     );
};

export default ClassCard;