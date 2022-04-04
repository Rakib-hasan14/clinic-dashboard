import { useEffect, useState } from "react";


export const AppoinmentData = () => {
    const [appointments , setAppointments] = useState({});
    
    useEffect(()=> {
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/appointment_details')
        .then(data => data.json())
        .then(result => setAppointments(result[0]))
    } ,[])
    return AppoinmentData;
}