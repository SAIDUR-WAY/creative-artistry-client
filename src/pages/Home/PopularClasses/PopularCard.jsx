

const PopularCard = ({data}) => {
     const {imageUrl, instructorName, instructorEmail, enrolledStudent, className,} = data;
     return (
          <>
                <div className="container mx-auto px-4">
        <div className="flex bg-white border border-gray-300 rounded-xl overflow-hidden items-center justify-start" style={{ cursor: 'auto' }}>
          <div className="relative w-52 h-52 flex-shrink-0">
            <div className="absolute left-0 top-0 w-full h-full flex items-center justify-center">
              <img alt="Placeholder Photo" className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src={imageUrl} />
            </div>
          </div>

          <div className="p-4">
            <p className="text-md font-bold line-clamp-1">{className}</p>
            <div className="flex">
            <p className="pr-4  text-gray-500">
               Instructor Name:
               </p>
            <span className="">
            {instructorName}
            </span>
            </div>
            <div className="flex">
            <p className="pr-4  text-gray-500">
               Email:
               </p>
            <span className="">
            {instructorEmail}
            </span>
            </div>
           
            
            <div className="flex">
            <p className="pr-4  text-gray-500">
               Enrolled Student:
               </p>
            <span className="">
               {enrolledStudent}
            </span>
            </div>
            
          </div>
        </div>
      </div>
               
          </>
     );
};

export default PopularCard;