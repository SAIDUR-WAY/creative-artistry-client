


import ClassCard from '../../component/ClassCard';
import useClasses from '../../hooks/useClasses'
const Classes = () => {
  const [classe] = useClasses();
  // console.log(classe)
  
 
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
          <div className='grid md:grid-cols-3 gap-4'>
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
