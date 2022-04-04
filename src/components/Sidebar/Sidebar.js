import React from 'react';
import './Sidebar.css';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { CgCalendarDates } from 'react-icons/cg';
import { RiMessage3Line } from 'react-icons/ri';
import { RiMoneyDollarCircleFill } from 'react-icons/ri';
import { RiListSettingsFill } from 'react-icons/ri';
import { RiAccountCircleLine } from 'react-icons/ri';
import { RiMenuFoldFill } from 'react-icons/ri';
import { IoIosArrowDown } from 'react-icons/io';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { DoctorData } from '../Hooks/DoctorData';


const Sidebar = () => {
    const doctor = DoctorData();
    return (
        <aside className='sidebar-cover'>
            <div className='s-debar-top'>
                <div></div>
                
                <div className="side-title">
                    <h2>Zendenta</h2>
                    <p>Cobut glgl comako sito</p>
                </div>
                <div className='btn-close-cover'>
                    <div className='btn-close'><RiMenuFoldFill /></div>
                </div>                   
            </div>
            <div className='nav-items'>
                <ul className='list' >
        	        <Link to='/overview'><li id={window.location.pathname === '/overview' ? 'active' : ""}><span><FaRegQuestionCircle /></span> Overview</li></Link>
        	        <Link to='/calendar'><li id={window.location.pathname === '/calendar' ? 'active' : ''}><span><CgCalendarDates /></span> Calander</li></Link>
        	        <Link to='/pateintlist'><li id={window.location.pathname === '/pateintlist' ? 'active' : ''}><span><RiAccountCircleLine /></span>Pateint List</li></Link>
        	        <Link to='/message'><li id={window.location.pathname === '/messages' ? 'active' : ''}><span><RiMessage3Line /></span> Messages</li></Link>
        	        <Link to='/payment'><li id={window.location.pathname === '/payment' ? 'active' : ''}><span><RiMoneyDollarCircleFill /></span> Payment information</li></Link>
        	        <Link to='setting'><li id={window.location.pathname === '/setting' ? 'active' : ''}><span><RiListSettingsFill /></span> Setting</li></Link>
                </ul>
            </div>

            <div className='sidebar-bottom'>

            <div>
            <div className='help-sec'>
                    <p><span><HiOutlineInformationCircle /></span> Help ?</p>
                </div>
            <div className="doctor-bottom">
                <div className="doc-img">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjZRXUSC4wg98drDSnHVqFPmVaKHNakve6pg&usqp=CAU" alt="" />
                </div>
                <div className="doc-det">
                    <h6>{doctor.name}</h6>
                    <p>{doctor.specification}</p>
                </div>
                <div className="doc-det-btn"><span><IoIosArrowDown /></span></div>
            </div>
            </div>
            

            </div>

        </aside>
    );
};

export default Sidebar;