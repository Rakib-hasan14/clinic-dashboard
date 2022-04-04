import { useEffect, useState } from "react";


export const DoctorData = () => {
    const [doctor , setDoctor] = useState({});
    
    useEffect(()=> {
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/DoctorDetails')
        .then(data => data.json())
        .then(result => setDoctor(result[0]))
    } ,[])
    return doctor;
}