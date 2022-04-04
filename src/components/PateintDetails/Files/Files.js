import React from 'react';
import './Files.css';
import { BsFillFileEarmarkPlusFill } from 'react-icons/bs';
import { BsFillFileEarmarkTextFill } from 'react-icons/bs';

const Files = () => {
    return (
        <div className="files">
             <div className='notes-heading'>
                <p>Files / Documents</p>
                <a href="#"><span><BsFillFileEarmarkPlusFill /></span> Add file</a>
            </div>
            <ul className='file-list'>
                <li>
                    <div><span><BsFillFileEarmarkTextFill /></span>Cehck up result.pdf</div>
                    <p className='default-web2'>123kb</p>
                </li>
                
                <li>
                    <div><span><BsFillFileEarmarkTextFill /></span>Lab test.pdf</div>
                    <p className='default-web2'>123kb</p>
                </li>
                
            </ul>    
        </div>
    );
};

export default Files;