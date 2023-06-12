import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { authContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
     const {googleSignIn} = useContext(authContext);
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || '/';
     const handleGoogleSignIn = ()=>{
          googleSignIn()
          .then(result => {
               const loggedUser = result.user;
               console.log(loggedUser)
               const saveUser = {name: loggedUser.displayName, email: loggedUser.email, role: 'student', userImg: loggedUser.photoUrl }
               fetch('http://localhost:5000/users', {
          method: "POST",
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(saveUser)
        })
        .then(res => res.json())
        .then(data => {
          
            console.log(data)
            navigate(from, {replace: true});
          
        })

          })
          .catch(err => console.log(err.message))
     }
     return (
          <div>
               <div className="divider">OR</div>
               <div className="text-center">
                   <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline">
                   <FcGoogle className=" w-full text-3xl text-center"/>
                   </button>
               </div>
          </div>
     );
};

export default SocialLogin;