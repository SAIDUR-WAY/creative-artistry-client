// import bgImg from '../../assets/banner/istockphoto-494678785-612x612.jpg'

import ClassCard from '../../conponent/classCard';
import useClasses from '../../hooks/useClasses'
const Classes = () => {
  const [classe] = useClasses();
  
 
  return (
   
        
        <div className="py-20  ">
          <div className="text-center">
            <h2 className="text-5xl uppercase font-sans font-bold">
              All Classes
            </h2>
            <p className="text-2xl py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
              saepe?
            </p>
          </div>
          <div className='grid md:grid-cols-3'>
          {
                                classe?.map(clas => <ClassCard
                                  key={clas._id}
                                  clas={clas}
                              ></ClassCard>)
          }
          </div>
          </div>
          
          
  )
}

export default Classes
