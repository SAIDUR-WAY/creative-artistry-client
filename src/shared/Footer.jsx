import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';


const Footer = () => {
     return (
          <footer className="footer p-10 bg-base-300 text-base-content">
            <div>
              <p className="text-2xl text-gray-900">Creative Artistry</p>
              <div className="grid grid-flow-col gap-4">
              <Link className="text-2xl text-blue-600 peer-hover:to-blue-900 hover:text-3xl transition-all ease-in "> <FaFacebookSquare/> </Link>
              <Link className="text-2xl text-red-600  hover:text-red-900 hover:text-3xl transition-all ease-in"> <FaYoutubeSquare/> </Link>
              <Link className="text-2xl text-blue-600  peer-hover:to-blue-900 hover:text-3xl transition-all ease-in"> <FaTwitterSquare/></Link>
              </div>
              <p className="text-gray-800 uppercase pt-2">Address</p>
              <p>15205 North Kierland Blvd. <br />
                 Suite 100. Scottsdale</p>
              
              
            </div>
 
  <div>
    <span className="footer-title">Quick Link</span> 
    <Link to='/' id='home' className="  link-hover">Home</Link> 
    <Link to='/instructors' className="link link-hover">Instructor</Link> 
    <Link to='/classes' className="link link-hover">Classes </Link> 
    <Link to='/dashboard' className="link link-hover">Dashbord</Link>
  </div>
  <div>
    <span className="footer-title"> Privacy Policy</span> 
    <a className="link link-hover">Branding</a> 
    <a className="link link-hover">Design</a> 
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Newslater</span> 
    <div className="relative min-w-full">
        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" /> 
        <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">Subscribe</button>
      </div>
  </div>
</footer>
     );
};

export default Footer;