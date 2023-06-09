import { useEffect, useState } from "react";


const useClasses = () => {
     const [classe, setClasse] = useState([])
     console.log(classe)
     const [loading, setLoading] = useState(true)
     useEffect(()=>{
          fetch('http://localhost:5000/classes')
          .then(res => res.json())
          .then(data => {
               setClasse(data)
               setLoading(false)
          })
     }, [])
     return [classe, loading];
};

export default useClasses;