import '../Main.css';
import React from "react";
import { Link } from 'react-router-dom';

function MyWork() {
    return (
        <div className='MyWork'>
            <div className='Row' style={{ justifyContent: 'left' }}>
                <h2>My Work</h2>
            </div>
            <Link to='/project1'>
                <div id='project1' className='project'> 
                    <div className='project-container'>
                        <div>
                            <h3>Ani-Time</h3>
                            <p>Ani-Time where you can keep up with anime anytime. As someone who enjoys watching anime I wanted to be able to see the diffrent shows coming out for the season and be able to save it to my list.</p>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='separator'></div>
            <Link to='project2'>
                <div id='project2' className='project'>
                    <div className='project-container'>
                        <div>
                            <h3>Just Chatting</h3>
                            <p>Just Chatting is an backend application that creates a social media API, where users can create, edit and delete, users, friends, thoughts, and reactions. Will soon be adding client side to the application in the near future.</p>
                        </div>
                    </div>
                </div> 
            </Link>
        </div>
    );
}

export default MyWork;