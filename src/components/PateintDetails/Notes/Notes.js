import React from 'react';
import './Notes.css';
import { RiAccountCircleLine } from 'react-icons/ri';

const Notes = () => {
    return (
        <div className='notes'>
            <div className='notes-heading'>
                <p>Notes</p>
                <a href="#">See all</a>
            </div>
            <div className='main-note'>
                <p>-The loream ipsum chtn to in.</p>
                <p>-loream ipsum dolor sit.</p>
                <p>-Has alergi history of calcorfi.</p>
                <div className='note-btn'>
                    <button>Save note</button>
                </div>
            </div>
            <div className='notes-bottom'>
                <div className='bottom-con'>
                    <h6>Lorem ipsum doler sit</h6>
                    <p className='default-web2'><span><RiAccountCircleLine /></span> Drg Mega Nanode</p>
                </div>
                <p className='default-web2'>20 Nov 19</p>
            </div>
        </div>
    );
};

export default Notes;