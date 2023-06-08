
import errorImg from '../../assets/errorImg.jpg'
import { Link } from 'react-router-dom';
const ErrorPage = ({errorMessage}) => {
     return (
          <>
                <div className='mx-auto text-center  '>
          <h1>Oops! Something went wrong.</h1>
          <p>{errorMessage}</p>
          <img src={errorImg} alt="Error" className=' w-full h-96 rounded-circle' />
          <button className='btn d-block mx-auto mt-4 bg-info '><Link className='text-decoration-none text-black' to='/'>Back to Home page!</Link></button>
        </div>
          </>
     );
};

export default ErrorPage;