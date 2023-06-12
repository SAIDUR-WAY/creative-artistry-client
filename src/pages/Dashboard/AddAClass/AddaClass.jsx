import Swal from "sweetalert2"
import useAxiosSecure from "../../../hooks/useAxiosSecure";
 const img_hosting_token= import.meta.env.VITE_Image_Upload_token;

 const AddaClass = () => {
  const [axiosSecure] = useAxiosSecure();
  // console.log(img_hosting_token)
  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const handleAddClass = (event) => {
    event.preventDefault()

    //image hosting in imgbb
    // const formData = new FormData();
    // formData.append('image', data.image[0])


    const form = event.target
    const className = form.className.value
    const instructorName = form.instructorName.value
    const instructorEmail = form.instructorEmail.value
    const availibleSeats = form.availibleSeats.value
    const price = form.price.value

    const totalValue = {
      className,
      instructorName,
      instructorEmail,
      availibleSeats: +availibleSeats,
      price: +price,
      enrolledStudent: 0,
      status: 'pending',
      feedback: '',
    }
    
    const imageFile = form.imageUrl.files[0];

        //image hosting in imgbb
    const formData = new FormData();
    formData.append('image', imageFile)
    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgResponse =>{
      if(imgResponse.success){
        const imgURL = imgResponse.data.display_url;
        const addClass = totalValue;
        addClass.imageUrl = imgURL;
        console.log(addClass)
        axiosSecure.post('/classes', addClass)
        .then(data => {
          // console.log('Add a class in instractor', data.data)
          if(data.data.insertedId){
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: 'Class Has been added',
               showConfirmButton: false,
               timer: 1500
             })
          }
        })

      }
    })


  
    // console.log(totalValue)

  //   fetch('http://localhost:5000/classes', {
  //    method: 'POST',
  //    headers: {
  //         'content-type': 'application/json'
  //    },
  //    body: JSON.stringify(totalValue)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //    console.log(data);
  //    if(data.insertedId){
  //         // form.reset()
  //         Swal.fire({
  //              position: 'center',
  //              icon: 'success',
  //              title: 'Class Has been added',
  //              showConfirmButton: false,
  //              timer: 1500
  //            })
  //    }
  //   })
  }

  return (
    <div className="w-full">
      <div className=" w-full  bg-base-200">
        <div className="card w-full  shadow-2xl bg-base-100">
          <form onSubmit={handleAddClass} className="card-body w-full">
            <div className="md:flex gap-x-4">
              <div className="w-1/2">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Class Name</span>
                  </label>
                  <input
                    type="text"
                    name="className"
                    required
                    placeholder="class name"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Instructor Name</span>
                  </label>
                  <input
                    type="text"
                    name="instructorName"
                    required
                    placeholder="Instructor Name"
                    className="input input-bordered"
                  />
                </div>
              </div>

              <div className="form-control w-full max-w-xs">
  <label className="label">
     Class Image
  </label>
  <input type="file" name='imageUrl'  className="file-input file-input-bordered w-full max-w-xs" />
  <label className="label">
  </label>

</div>

              {/* <div className="form-control w-1/2">
                <label className="label">
                  <span className="label-text">ImageUrl</span>
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  required
                  placeholder="ImageUrl"
                  className="input input-bordered"
                />
              </div> */}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Instructor Email</span>
              </label>
              <input
                type="email"
                name="instructorEmail"
                placeholder="Email"
                required
                className="input input-bordered"
              />
            </div>
            <div className="md:flex gap-x-4">
              <div className="form-control w-full md:w-1/2">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="text"
                  name="availibleSeats"
                  placeholder="Available Seats"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control w-full  md:w-1/2">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="text"
                  name="price"
                  placeholder="Price"
                  required
                  className="input input-bordered"
                />
              </div>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-black text-red-700">Add button</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddaClass
