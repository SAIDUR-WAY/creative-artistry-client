import { useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import Swal from "sweetalert2";

function Dropdown({ data, refetch }) {
  const [isOpen, setIsOpen] = useState(false);
  const [axiosSecure] = useAxiosSecure();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = async (id, status) => {
    setIsOpen(false);
    console.log(id, status);

    try {
      const response = await axiosSecure.patch(
        `http://localhost:5000/classes/manage/${id}`,
        {
          status
        }
      );
      if(response.data.modifiedCount > 0){
        Swal.fire({
          position: 'top-top',
          icon: 'success',
          title: `${data.instructorName} ${status}`,
          showConfirmButton: false,
          timer: 1500
        })
      }

        refetch()
      
      console.log("Response:", response.data);
    } catch (error) {
      console.error("Error performing PATCH request:", error);
    }

    console.log("Button Clicked");
  };

  return (
    <div className="dropdown dropdown-top pr-4 pb-2">
      <label tabIndex={0} className="btn btn-sm m-1 bg-[#2B3441] text-red-600" onClick={toggleDropdown}>
        Click
      </label>
      {isOpen && (
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52 z-50">
          <li>
            <button className={`btn btn-sm text-center w-1/2 text-green-500 bg-[#2B3441] ${
              data.status === 'student' 
               ? '' :
               'btn-disabled bg-opacity-50'
            }`} onClick={() => handleItemClick(data._id, "approved")}>Approved</button>
          </li>
          <li>
            <button className={`btn btn-sm text-center w-1/2 text-red-600 bg-[#2B3441] ${
              data.status === 'student' 
               ? '' :
               'btn-disabled bg-opacity-50'
            }`} onClick={() => handleItemClick(data._id, "denied")}>Denied</button>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
