import bgImg from '../../assets/banner/istockphoto-494678785-612x612.jpg'
const Classes = () => {
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

     <div className='border w-96 border-base-300 '>
     <div className="card w-96 bg-base-100 shadow-xl image-full">
  <figure><img src={bgImg} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title uppercase font-bold text-3xl mb-0 pb-0">Realistci pencil <br /> Drawings</h2>
    <p className='mt-0 pt-0'>Lorem ipsum dolor sit amet.</p>
    <div className="card-actions justify-end">
    </div>
  </div>
</div>
<div className="card-body">
    <h2 className="card-title text-3xl">
    Realistci pencil Drawings
    </h2>
    <p className=''>Instructor Name: Saidur rahman</p>
    <div className='flex justify-between font-semibold'>
     <p>Available Seats: 10</p>
    <p>Price: $ 200</p>
    </div>
    
    <p>If a dog chews shoes whose shoes does he choose?</p>
   <button className='btn btn-primary ' > Select Button</button>
  </div>

     </div>

    </div>
  )
}

export default Classes
