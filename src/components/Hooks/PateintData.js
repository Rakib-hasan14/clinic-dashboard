import { useEffect, useState } from "react";


export const PateintData = () => {
    const [pateints , setPateints] = useState({});
    
    useEffect(()=> {
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
        .then(data => data.json())
        .then(result => setPateints(result[0]))
    } ,[])
    return pateints;
}