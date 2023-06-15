

import Dropdown from "../../../component/ManageGroup";
import { useQuery } from "@tanstack/react-query";

const ManageClasses = () => {
//   const [allClasses, setAllClasses] = useState([]);

const {data: allClasses = [], refetch} = useQuery(['allClasses'], async()=>{
     const res = await fetch('https://creative-artistry-server-saidur-way.vercel.app/classes/manage')
     return res.json();
})
  console.log(allClasses)

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axiosSecure.get(
//           "https://creative-artistry-server-saidur-way.vercel.app/classes/manage"
//         );
//         setAllClasses(response.data);
//       } catch (error) {
//         console.error("Error fetching classes:", error);
//       }
//     };

//     fetchData();
//   }, [axiosSecure]);

  return (
    <>
      <div>
        <h2 className="text-3xl font-bold pb-4">Manage Classes</h2>
      </div>

      <div className="overflow-x-auto pt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Available Seats</th>
              <th>Price</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allClasses.map((classe, index) => (
              <tr key={classe._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={classe?.imageUrl} alt="Avatar" />
                    </div>
                  </div>
                </td>
                <td>
                  {classe?.instructorName}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {classe?.instructorEmail}
                  </span>
                </td>
                <td>{classe?.availableSeats}</td>
                <td>{classe?.price}</td>
                <td
                  className={`${
                    classe.status === "pending"
                      ? "text-yellow-700"
                      : classe.status === "approved"
                      ? "text-green-700"
                      : classe.status === "denied"
                      ? "text-red-700"
                      : ""
                  }`}
                >
                  {classe?.status}
                </td>
                <th>
                  <Dropdown data={classe} refetch={refetch} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ManageClasses;
