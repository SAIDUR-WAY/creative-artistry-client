import { Link, Outlet } from 'react-router-dom'
import { BiWalletAlt } from 'react-icons/bi'
import { FaChalkboardTeacher, FaHome, FaLeanpub, FaListOl, FaRegChartBar } from 'react-icons/fa'

const Dashboard = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
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
            <li>
              <Link to="/dashboard/userhome">
                <FaHome /> User Home
              </Link>
            </li>
            <li>
              <Link to="/dashboard/paymenthistory">
                <BiWalletAlt /> Payment History
              </Link>
            </li>
            <li>
              <Link to="/dashboard/myclasses">
                <FaListOl /> My Classes
              </Link>
            </li>
            <li>
              <Link to="/dashboard/enrolled">
                <FaRegChartBar /> My Enrolled
              </Link>
            </li>

            <div className="divider"></div>
            
            <li>
              <Link>
                <FaHome />
                Home
              </Link>
            </li>
            <li>
              <Link to="/classes"><FaLeanpub/> Classes</Link>
            </li>
            <li>
              <Link to="/instructors"><FaChalkboardTeacher/> Instructors</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Dashboard
