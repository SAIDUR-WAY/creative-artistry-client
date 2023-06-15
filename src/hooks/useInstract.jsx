import { useEffect, useState } from 'react';

const useInstract = () => {
     const [instraData, setInstraData] = useState([])
     
     const [loading, setLoading] = useState(true)
     useEffect(()=>{
          fetch('https://creative-artistry-server-saidur-way.vercel.app/instructors')
          .then(res => res.json())
          .then(data => {
               setInstraData(data)
               setLoading(false)
          })
     }, [])
     return [instraData, loading];
};

export default useInstract;