import React, {useState , useEffect} from 'react';
import {IoMdSearch} from 'react-icons/io';
import {AiOutlinePlus} from 'react-icons/ai';
import {GrNotification} from 'react-icons/gr';
import { RiAccountCircleLine } from 'react-icons/ri';
import { IoIosArrowForward } from 'react-icons/io';
import './PateintDetails.css'
import Notes from './Notes/Notes';
import PateintMainInfo from './PateintMainInfo/PateintMainInfo';
import Files from './Files/Files';
import { PateintData } from '../Hooks/PateintData';
import Appointmetns from './Appointments/Appointmetns';

const PateintDetails = () => {
    const pateints = PateintData();

    return (
        <div className="pateint-details">
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
                <span className="default-web"><IoIosArrowForward /></span>
                <h4 className="default-web2">{pateints.name}</h4>
            </div>
            <div className="all-p-det">
                <div className="det-left">
                   <PateintMainInfo />
                   <Appointmetns />
                </div>

                {/* Content-Main-Right */}
                <div className="det-right">
                    <Notes />
                    <Files />
                </div>
            </div>
        </div>
    );
};

export default PateintDetails;