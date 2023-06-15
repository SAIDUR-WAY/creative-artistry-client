import { useEffect, useState } from 'react';

const useInstract = () => {
     const [instraData, setInstraData] = useState([])
     
     const [loading, setLoading] = useState(true)
     useEffect(()=>{
          fetch('http://localhost:5000/users/allinstructor')
          .then(res => res.json())
          .then(data => {
               setInstraData(data)
               setLoading(false)
          })
     }, [])
     return [instraData, loading];
};

export default useInstract;