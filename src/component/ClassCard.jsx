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
  const { _id,image, name, instructorName, availableSeats, price, description} = clas || [];

    const handleAddToClass = item =>{

      if(user && user.email){
        const addedClass = {image, name, instructorName, availableSeats, price, description, classId: _id, email: user.email}
        fetch('http://localhost:5000/myclasses', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(addedClass)
        })
        .then(res => res.json())
        .then(data => {
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
         <div className={`border w-96 rounded-xl border-base-300 ${availableSeats === 0 && 'bg-red-700'}`}>
         <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure><img src={image} alt="image"  style={{ height: '300px' }}/></figure>
      <div className="card-body">
        <h2 className="card-title uppercase font-bold text-3xl mb-0 pb-0">{name}</h2>
        {/* <p className='mt-0 pt-0'>{description.split(0,5)}</p> */}
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>
    <div className="card-body">
        <h2 className="card-title text-2xl">
        {name}
        </h2>
        <p className=''>Instructor Name: {instructorName}</p>
        <div className='flex justify-between font-semibold'>
         <p>Available Seats: {availableSeats}</p>
        <p>Price: ${price}</p>
        </div>
        {/* //TODO: button disabled men requarment */}
        <p>{description}</p>
       <button onClick={()=>handleAddToClass(clas)} className={`btn btn-primary ${ availableSeats === 0 ? 'btn-disabled opacity-50' : ''}`}> Select Button</button>
      </div>
    
         </div>

     );
};

export default ClassCard;