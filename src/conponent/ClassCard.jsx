import { useContext } from "react";
import { authContext } from "../Provider/AuthProvider";

const ClassCard = ({clas}) => {
  const {user} = useContext(authContext);
  const {image, name, instructorName, availableSeats, price, description} = clas || [];
     return (

    
         <div className='border w-96 border-base-300 '>
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
        
        <p>{description}</p>
       <button className={`btn btn-primary ${ availableSeats === 0 ? 'btn-disabled opacity-50' : ''}`}> Select Button</button>
      </div>
    
         </div>

     );
};

export default ClassCard;