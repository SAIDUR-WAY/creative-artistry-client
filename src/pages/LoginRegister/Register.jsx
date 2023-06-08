import { useForm } from 'react-hook-form'
import registerImg from '../../assets/imgList/register-1.jpg'
import { useContext } from 'react'
import { authContext } from '../../Provider/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'



const Register = () => {
  const { createUser, updateUserProfile } = useContext(authContext);
  const navigate = useNavigate()
  

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    console.log(data)
    createUser(data.email, data.password)
    .then(result => {
      const logedUser = result.user;
      console.log(logedUser)
      updateUserProfile(data.name, data.url)
      .then(()=>{})
      .catch(err => console.log(err.message))
      navigate('/')
    })
    .catch(err => console.log(err.message))

  }

  const password = watch('password'); // Get the value of the password field
  return (
    <div className="pt-20"
    
    >
      <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/4 md:w-full relative ">
            <h1 className="text-5xl font-semibold  text-center md:absolute left-36 ">Please Register</h1>
            <img src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-1/2  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body w-full">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  placeholder="password"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  {...register('email', { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email?.type === 'required' && <p role="alert" className="text-red-500">Email is required</p>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                    minLength: 8,
                    maxLength: 15,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                                {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 8 characters</p>}
                                {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                                {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase , one number and one special character.</p>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm</span>
                </label>
                <input
                  type="password"
                  {...register(
                    'confirm',
                    { required: true ,
                      validate: (value) =>
                        value === password || 'Passwords do not match',
                    })}
                  placeholder="Confirm"
                  className="input input-bordered"
                />
                {errors.confirm && (
                  <span className="text-red-500">{errors.confirm.message}</span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="url"
                  {...register('url', { required: true })}
                  placeholder="PhotoUrl"
                  className="input input-bordered"
                />
                {errors.url?.type === 'required' && <p role="alert" className="text-red-500">Email is required</p>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            <p className='pl-4 pb-4'><small>Alrady Have an account? <Link to= '/login' className='text-blue-500 underline'>Please Login</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
