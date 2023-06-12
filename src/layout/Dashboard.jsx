import { NavLink, Outlet } from 'react-router-dom'
import { BiWalletAlt } from 'react-icons/bi'
import { FaChalkboardTeacher, FaFolderPlus, FaHome, FaLeanpub, FaListOl, FaMizuni, FaRegChartBar, FaUsers } from 'react-icons/fa'
import useAdmin from '../hooks/useAdmin'


const Dashboard = () => {
  //TODO: user deshboard menu view in work
  // const isAdmin = true;
  
  const [isAdmin] = useAdmin();
  // const [isInstructor]= useInstructor();
  console.log(isAdmin);
  // console.log(isInstructor)
  
 
  
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center
        m-10 min-h-fit ">
          <Outlet></Outlet>

          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            {
              isAdmin == 'admin' ? <>
                            <li>
              <NavLink to="/dashboard/adminhome">
                <FaHome /> Admin Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageclasses">
                <FaMizuni /> Manage Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/manageusers">
                <FaUsers /> Manage Users
              </NavLink>
            </li>

              </> : ( isAdmin == 'instructor' ? <>
              <li>
                <NavLink to="/dashboard/instructor">
                <FaHome /> Instructor Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/addaclass">
                <FaFolderPlus /> Add a Class
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/instclasses">
                <FaListOl /> My Classes
              </NavLink>
            </li>
              </> :  <>

              <li>
              <NavLink to="/dashboard/userhome">
                <FaHome /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/paymenthistory">
                <BiWalletAlt /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/myclasses">
                <FaListOl /> My Classes
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/enrolled">
                <FaRegChartBar /> My Enrolled
              </NavLink>
            </li>
              
              </>)
            }
            

            <div className="divider"></div>
            
            <li>
              <NavLink to='/'>
                <FaHome />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/classes"><FaLeanpub/> Classes</NavLink>
            </li>
            <li>
              <NavLink to="/instructors"><FaChalkboardTeacher/> Instructors</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Dashboard
