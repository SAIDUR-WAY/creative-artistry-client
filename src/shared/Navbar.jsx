import { useContext, useState } from 'react';
import { Link } from "react-router-dom"
import { authContext } from '../Provider/AuthProvider';




const Navber = () => {
  const [name, setName]= useState(false)   
  const {user, logOut} = useContext(authContext);
  // console.log(user)

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message))
  }

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to='/instructors'>Instructors</Link>
      </li>
      <li>
        <Link to='/classes'>Classes</Link>
      </li>
     {
      user && 
      <li>
      <Link to='/dashboard'>Dashboard</Link>
    </li>
     }
      <li>
        <Link className='hover:text-white' to='/register'>Register</Link>
      </li>
      {
         !user &&
         <button className='btn  bg-transparent btn-sm mx-2'><Link to='/login' className='text-white text-decoration-none'>SignIn</Link></button>
      }
     
    </>
  )

  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-30  bg-black text-white max-w-screen-xl mx-auto h-16">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black "
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Creative Artistry</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal customMenu items-center px-1 space-x-4">
            {navItem}
            </ul>
        </div>
        <div className="navbar-end">
        {
              user &&
              <> <span className={name? 'showName': 'hidden'}><span>{user?.displayName}</span></span>
              <div onMouseEnter={()=>setName(true)}
                  onMouseLeave={()=>setName(false)}
                className='d-inline'><img className=' rounded-circle '  style={{width: '40px', height: '40px'}} src={user && user.photoURL} alt="" /></div>
              <button onClick={handleLogOut} className='btn  bg-transparent btn-sm mx-2'><Link className='text-white text-decoration-none'>LogOut</Link></button>

               </> 
               

            }
        </div>
      </div>
    </>
  )
}

export default Navber
