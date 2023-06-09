
import InstractorCard from '../../conponent/InstractorCard';
import useInstract from '../../hooks/useInstract';
import './instructors.css'

const Instructors = () => {
  const [instraData] = useInstract()

     return (
          <div className="py-20">
                        <div className="text-center">
            <h2 className="text-5xl uppercase font-sans font-bold">
              All Instructors
            </h2>
            <p className="text-2xl py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              saepe?
            </p>
          </div>
          
          <div className='grid grid-cols-3 gap-4'>
            {/* grid card */}
            {
              instraData?.map(data => <InstractorCard
              key={data._id}
              data={data}
              ></InstractorCard>)
            }

           

          </div>

          </div>
     );
};

export default Instructors;