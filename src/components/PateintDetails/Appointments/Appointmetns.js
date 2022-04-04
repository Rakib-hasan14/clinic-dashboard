import React from 'react';
import { AppoinmentData } from '../../Hooks/AppinmentData';
import './Appointments.css';

const Appointmetns = () => {
    
    return (
        <div className='appointments'>
            <div className='appoint-btn'>
                <button>Upcoming Appointments</button>
                <button>Past Appointments</button>
                <button>Medical Records</button>
            </div>
            <div className='appoint-details'>
                <div className='det-hed'>
                    <h6>Root Cannal Treatment</h6>
                    <p>Show Previouse Treatment</p>
                </div>
                <div className='detail'>
                    
                </div>
            </div>
        </div>
    );
};

export default Appointmetns;