import React from 'react';
import { PateintData } from '../../Hooks/PateintData';
import './PateintMainInfo.css';

const PateintMainInfo = () => {
    const pateints = PateintData();
    return (
        <div className="det-left-top">


        {/* Top Left contents */}
        <div className="left-top">
            <div className="left-img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdLXQhc-PNs8yAtYBPcWEvs24M7YHdjKxEUQ&usqp=CAU" alt="" />
            </div>
            <div className="left-info">
                <h3>{pateints.name}</h3>
                <h6 className="default-web2">diane.cooper@example.com</h6>
            </div>
            <div className="appoint">
                <div className="appoint-past">
                    <h5>{pateints.Past}</h5>
                    <p className="sub-appoint">Past</p>
                </div>
                <div className="appoint-upcoming">
                    <h5>{pateints.Upcoming}</h5>
                    <p className="sub-appoint">Upcoming</p>
                </div>
            </div>
            <div className="m-btn">
                <button>Send Message</button>
            </div>
        </div>
        {/* Top Right Contents */}
        <div className="right-top">
            <div className="right-all-content">
                <div className="right-content">
                    <h5 className="default-web2">Gender</h5>
                    <h6>{pateints.Gender}</h6>
                </div>
                <div className="right-content">
                    <h5 className="default-web2">Birthday</h5>
                    <h6>{pateints.Birthday}</h6>
                </div>
                <div className="right-content">
                    <h5 className="default-web2">Phone Number</h5>
                    <h6>(239) 4897 3987</h6>
                </div>
                <div className="right-content">
                    <h5 className="default-web2">Street Address</h5>
                    <h6>JI. Diponegoro No. 21</h6>
                </div>
                <div className="right-content">
                    <h5 className="default-web2">City</h5>
                    <h6>Cilacap</h6>
                </div>
                <div className="right-content">
                    <h5 className="default-web2">Zip code</h5>
                    <h6>655849</h6>
                </div>
                <div className="right-content">
                    <h5 className="default-web2">Member status</h5>
                    <h6>Active Member</h6>
                </div>
                <div className="right-content">
                    <h5 className="default-web2">Registration Date</h5>
                    <h6>Feb 24th, 1997</h6>
                </div>
            </div>
        </div>
    </div>
    );
};

export default PateintMainInfo;