import { useForm } from 'react-hook-form'
import registerImg from '../../assets/imgList/register-3.jpg'

import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { authContext } from '../../Provider/AuthProvider'

const Login = () => {
     const {signIn} = useContext(authContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm()
  const onSubmit = (data) => {
    signIn(data.email, data.password)
    .then(result => {
      const logedUser = result.user;
      console.log(logedUser)
    })
    .catch(err => err.message)
  }

  //    const password = watch('password'); // Get the value of the password field

  return (
    <div className="pt-20">
      <div className="hero w-full min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-1/4 md:w-1/2 ">
            <img src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-1/2   shadow-2xl bg-base-100">
            <h1 className="text-5xl pb-10 font-semibold  text-center ">
              Please Login
            </h1>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="card-body w-full"
            >
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
                {errors.email?.type === 'required' && (
                  <p role="alert" className="text-red-500">
                    Email is required
                  </p>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register('password', {
                    required: true,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && (
                  <p className="text-red-600">Password is required</p>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className='pl-4 pb-4'><small>New Here? <Link to= '/register' className='text-blue-500 underline'>Create a account</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
