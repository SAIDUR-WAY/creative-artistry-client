const AddaClass = () => {
  const handleAddClass = (event) => {
    event.preventDefault()

    const form = event.target
    const className = form.className.value
    const instructorName = form.instructorName.value
    const instructorEmail = form.instructorEmail.value
    const availibleSeats = form.availibleSeats.value
    const price = form.price.value
    const imageUrl = form.imageUrl.value

    const totalValue = {
      className,
      instructorName,
      instructorEmail,
      availibleSeats: +availibleSeats,
      price: +price,
      imageUrl,
      enrolledStudent: 0,
      status: 'pending',
      feedback: '',
    }
    console.log(totalValue)

    fetch('http://localhost:5000/classes', {
     method: 'POST',
     headers: {
          'content-type': 'application/json'
     },
     body: JSON.stringify(totalValue)
    })
    .then(res => res.json())
    .then(data => {
     console.log(data);
     // if(data.insertedId)
    })
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

              {/* <div className="form-control w-full max-w-xs">
  <label className="label">
     Class Image
  </label>
  <input type="file" name='imageUrl'  className="file-input file-input-bordered w-full max-w-xs" />
  <label className="label">
  </label>

</div> */}

              <div className="form-control w-1/2">
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
              </div>
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
