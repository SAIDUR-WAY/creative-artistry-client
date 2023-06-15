

const InstractorCard = ({data}) => {
  console.log(data);
     return (
          <div>
                         <div className=" p-10 rounded-xl bg-gray-400 antialiased text-gray-900">
<div>
    
    <img src={data.userPhoto} alt=" random imgee" className="w-full object-cover object-center rounded-lg shadow-md"  style={{ height: '300px' }}/>    
    
 <div className="relative px-4 -mt-16  ">
   <div className="glass p-6 rounded-lg shadow-lg">
    <div className="flex items-baseline">
      {/* <span className="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
        New
      </span>
      <div className="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
    2 baths  &bull; 3 rooms
  </div>   */}
    </div>
    <span className="text-teal-600 text-md font-semibold underline">Name</span>
    <h4 className="mt-1 text-2xl font-semibold uppercase leading-tight truncate"> {data.Name}</h4>
  <div className="mt-2">
    <span className="text-teal-600 text-md font-semibold underline">Email</span>
    <h4 className="text-sm font-semibold text-gray-600">{data.email}</h4>
  </div>
  <button className="btn glass absolute bottom-0 right-0 posiButton ">See Classes</button> 
  </div>
 </div>
  
</div>
  </div>
          </div>
     );
};

export default InstractorCard;