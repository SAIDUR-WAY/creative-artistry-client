import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PopularCard from "./PopularCard";


const PopularClasses = () => {
     const [popular, setPopular] = useState([]);
    //  console.log(popular);
    
     const [axiosSecure] = useAxiosSecure()

     useEffect(()=>{
          axiosSecure.get('/classes/popularclasses')
          .then(res => {
               // console.log(res.data)
               setPopular(res.data)        
               // const sortedpopular = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
               // setpopular(sortedpopular);
          })
     }, [axiosSecure])
  return (
    <div>
      <div className="text-center my-10">
        <h2 className="text-5xl uppercase font-sans font-bold">Popular Classes</h2>
        <p className="text-2xl pt-4">Explore a World of Art and Craft with Our Comprehensive Class Collection!</p>
      </div>
      <div className="grid md:grid-cols-2 py-10 gap-4">
     {
          popular?.map(data => <PopularCard
          key={data._id}
          data={data}
          ></PopularCard> )
     }

      </div>


    </div>
  );
};

export default PopularClasses;
