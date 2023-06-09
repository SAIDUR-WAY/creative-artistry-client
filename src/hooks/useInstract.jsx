import { useEffect, useState } from 'react';

const useInstract = () => {
     const [instraData, setInstraData] = useState([])
     
     const [loading, setLoading] = useState(true)
     useEffect(()=>{
          fetch('instructors.json')
          .then(res => res.json())
          .then(data => {
               setInstraData(data)
               setLoading(false)
          })
     }, [])
     return [instraData, loading];
};

export default useInstract;