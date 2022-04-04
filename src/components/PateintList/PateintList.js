import React, {useState , useEffect} from 'react';
import './PateintList.css';
import {IoMdSearch} from 'react-icons/io';
import {AiOutlinePlus} from 'react-icons/ai';
import {GrNotification} from 'react-icons/gr';
import { RiAccountCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';


const PateintList = () => {
    const [pateints , setPateints] = useState({});
    
    useEffect(()=> {
        fetch('https://619f39821ac52a0017ba467e.mockapi.io/patientDetails')
        .then(data => data.json())
        .then(result => setPateints(result[0]))
    } ,[])

    return (
        <div className='pateint-list'>
            <div className='list-top'>
                <div className='top-left'>
        	        <span><RiAccountCircleLine /></span>
                    <h1>Pateints</h1>
                </div>
                <div className='top-right'>
                    <div className='top-input'>
                        <span><IoMdSearch /></span>
                        <input type="text"  placeholder='Search pateint'/>
                    </div>
                    <span className='plus-pateint'><AiOutlinePlus /></span>
                    <span className='notificaion'><GrNotification /></span>
                </div>
            </div>
            <div className="list-scnd-top">
                <h4 className="default-web">Pateint List</h4>
            </div>
            <Link to='/pateintlist/DianeCooper'>
            <div className="all-pateint">
                <div>
                     <h5>{pateints.name}</h5>
                </div>
                <div>
                    <h5>{pateints.Past}</h5>
                </div>
                <div>
                    <h5>{pateints.Gender}</h5>
                </div>
            </div>
            </Link>
        </div>
    );
};

export default PateintList;<h1>Hei, Pateints</h1>