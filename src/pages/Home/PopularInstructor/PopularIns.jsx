
import { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { authContext } from '../../../Provider/AuthProvider';


const PopularIns = () => {

  const [userWithClass, setUserWithClass] = useState([]);
  const [visibleItems, setVisibleItems] = useState(6);
  console.log(userWithClass);
  const {user} = useContext(authContext);
  const [axiosSecure] = useAxiosSecure()

  useEffect(()=>{
    axiosSecure.get('/users-with-classes')
    .then(res => {
        //  console.log(res)
         setUserWithClass(res.data)        
         // const sortedEnrolled = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
         // setEnrolled(sortedEnrolled);
    })
}, [ axiosSecure])

const handleShowMore = () => {
  setVisibleItems(visibleItems + 6); 
};
  return (
    <div className='my-20'>
 
    <div className='text-3xl font-bold uppercase text-center '>most popular Instructor</div>
   <div className='grid md:grid-cols-3 gap-10 my-10 '>
   {
  userWithClass.slice(0, visibleItems).map((data, index) =>     <div className="bg-white rounded-lg shadow-lg"
  key={index}
  >
  <div className="relative  border rounded-lg p-4 border-grey-300">
    <img src={data?.class?.imageUrl} style={{ height: '300px' }} alt="Image" className="w-full h-auto rounded-t-lg" />
    
    <div className="absolute bottom-[-40px]  right-[-40px] ">
      <div className="p-4 relative bg-white bg-opacity-50 border border-gray-300 rounded-lg">

        {/* <!-- Content goes here --> */}
        <img src={data?.user?.userPhoto} alt="Image" className="w-16 h-16 rounded-full" />
        <h2 className="text-xl font-bold">{data?.user?.name}</h2>
        <p className="text-gray-600">{data?.user?.email}</p>
        {/* <button className="absolute bottom-[-10px]">Button</button> */}
      </div>
    </div>
  </div>
  
</div>)
  }




 </div>
<div className='mt-20'>
{visibleItems < userWithClass.length && (
        <button className="btn btn-outline btn-accent btn-sm mx-auto text-center flex justify-center  text-white px-4 py-2 rounded" onClick={handleShowMore}>
          Show More
        </button>
      )}
</div>

 </div>

  );
};

export default PopularIns;