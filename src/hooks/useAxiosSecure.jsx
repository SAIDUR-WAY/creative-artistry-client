import { useContext, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { authContext } from '../Provider/AuthProvider';

const axiosSecure = axios.create({
  baseURL: 'https://creative-artistry-server-saidur-way.vercel.app', 
});

// TODO: Will finally try it
const useAxiosSecure = () => {
  const { logOut } = useContext(authContext); 
  const navigate = useNavigate(); 




  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('creative-token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config ;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          await logOut();
          navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [logOut, navigate ]);

  return [axiosSecure];
};

export default useAxiosSecure;
