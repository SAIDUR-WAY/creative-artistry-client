import { Link } from "react-router-dom";


const TableCard = ({data, index, handleDelete}) => {
     const {name, imageUrl, instructorName, availibleSeats , price, _id} = data;
    //  console.log(data)
     return (
          <tr>
          <th>
            {index +1}
          </th>
          <td>
            <div className="flex items-center space-x-3">
              <div className="avatar">
                <div className="mask mask-square w-12 h-12">
                  <img src={imageUrl}alt="image" />
                </div>
              </div>
              <div>
                <div className="font-bold">{name}</div>
              </div>
            </div>
          </td>
          <td>
            <span className="badge badge-ghost badge-sm">{instructorName}</span>
          </td>
          <td>{availibleSeats
}</td>
          <th>
            <button className="btn btn-ghost btn-xs">{price}</button>
          </th>
          <th>
            <button onClick={()=>handleDelete(_id)} className="btn bg-red-500  btn-xs">Delete</button>
          </th>
          <th>
            <button  className="btn btn-ghost bg-pink-400 btn-xs"><Link to={`/dashboard/payment/${_id}`}>Pay</Link></button>
          </th>
        </tr>
     );
};

export default TableCard;