import { useEffect, useState } from "react";



const useClasses = () => {
     const [classe, setClasse] = useState([])
     const [loading, setLoading] = useState(true)
     useEffect(()=>{

                    fetch('https://creative-artistry-server-saidur-way.vercel.app/classes/approvedclasses')
               .then(res => res.json())
               .then(data => {
                    setClasse(data)
                    setLoading(false)
               })
     }, [])
     return [classe, loading];
};

export default useClasses;