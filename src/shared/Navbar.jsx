import { FaCartArrowDown } from 'react-icons/fa';
import { Link } from "react-router-dom"

const handleLogOut = ()=>{

}

const Navber = () => {
     const user = 'Saidur rahman';
     const userName = 'saidur'

  const navItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/signup">SignUp</Link>
      </li>
      <li>
        <Link>
        <button className="btn btn-outline-none bg-transparent border-none ">
        <FaCartArrowDown className='text-2xl'></FaCartArrowDown>
          <div className="badge badge-secondary">+{'10'}</div>
        </button>
        </Link>
      </li>
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
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  "
            >
              {navItem}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Creative Artistry</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal items-center px-1 space-x-4">{navItem}</ul>
        </div>
        <div className="navbar-end">
        {
              user ?
              <> <span className={userName? 'showInSite': 'd-none'}><span>{user?.displayName}</span></span>
              <div onMouseEnter={()=>setUserName(true)}
                  onMouseLeave={()=>setUserName(false)}
                className='d-inline'><img className=' rounded-circle '  style={{width: '40px', height: '40px'}} src={user && user.photoURL} alt="" /></div>
              <button className='mx-2'><Link className='text-white text-decoration-none'>LogOut</Link></button>

               </> 
               : 
               <button ><Link className=' text-decoration-none text-white' to='/login'>Login</Link></button>
            }
        </div>
      </div>
    </>
  )
}

export default Navber
