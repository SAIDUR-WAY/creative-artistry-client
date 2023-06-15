import { useForm } from 'react-hook-form'
import registerImg from '../../assets/imgList/register-1.jpg'
import { useContext, useState } from 'react'
import { authContext } from '../../Provider/AuthProvider'
import { Link, useNavigate } from 'react-router-dom'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa'
import Swal from 'sweetalert2'
import SocialLogin from '../../component/SocialLogin'



const Register = () => {
  const [show, setShow] = useState(false)
  const [error, setError] = useState('')
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
      .then(()=>{
        const saveUser = {name: data.name, email: data.email, role: 'student', userPhoto: data.url}
        fetch('https://creative-artistry-server-saidur-way.vercel.app/users', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data => {
          if(data.insertedId){
            console.log(data)
          }
        })

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'User Created successfully',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(err => console.log(err.message))
      navigate('/')
    })
    .catch(err => {
      setError(err.message)
    })

  }

  const password = watch('password'); // Get the value of the password field
  return (
    <div className="pt-20"
    
    >
      <div className="hero w-full min-h-600 bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left w-1/4 md:w-full relative ">
            <h1 className="text-5xl font-semibold  text-center md:absolute left-36 ">Please Register</h1>
            <img src={registerImg} alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-1/2  shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body my-0 w-full py-0">
            {error  && (
                  <p className="text-red-600">{error}</p>
                )}
              <div className="form-control h-16 ">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register('name', { required: true })}
                  placeholder="Name"
                  className="input input-bordered h-0"
                />
              </div>
              <div className="form-control  h-16">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register('email', { required: true })}
                  placeholder="email"
                  className="input input-bordered h-0"
                />
                {errors.email?.type === 'required' && <p role="alert" className="text-red-500">Email is required</p>}
              </div>

              <div className="form-control relative h-16">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type={show ? 'text': 'password'}
                  
                  {...register('password', {
                    required: true,
                    minLength: 8,
                    maxLength: 15,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  })}
                  placeholder="password"
                  className="input input-bordered h-0 "
                />
                {
                  show ? 
                  <FaRegEye onClick={()=>setShow(!show)} className='absolute text-2xl right-5 top-12 '/>
                  :
                  <FaRegEyeSlash onClick={()=>setShow(!show)} className='absolute text-2xl right-5 top-12 '/>
                }
                
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
                  type={show ? 'text': 'password'}
                  {...register(
                    'confirm',
                    { required: true ,
                      validate: (value) =>
                        value === password || 'Passwords do not match',
                    })}
                  placeholder="Confirm"
                  className="input input-bordered h-0"
                />
                {errors.confirm && (
                  <span className="text-red-500">{errors.confirm.message}</span>
                )}
                <label className="label pt-0 m-0">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control">
                <label className="label m-0">
                  <span className="label-text">PhotoUrl</span>
                </label>
                <input
                  type="url"
                  {...register('url', { required: true })}
                  placeholder="PhotoUrl"
                  className="input input-bordered h-0"
                />
                {errors.url?.type === 'required' && <p role="alert" className="text-red-500">Email is required</p>}
              </div>
              <div className="form-control">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            <SocialLogin></SocialLogin>
            <p className='pl-4 pb-4'><small>Alrady Have an account? <Link to= '/login' className='text-blue-500 underline'>Please Login</Link></small></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
