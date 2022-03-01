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
                            <h3>Project 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas commodo placerat. Nulla dui sem, bibendum quis arcu ac, consectetur aliquam nulla</p>
                        </div>
                    </div>
                </div>
            </Link>
            <div className='separator'></div>
            <Link to='project2'>
                <div id='project2' className='project'>
                    <div className='project-container'>
                        <div>
                            <h3>Project 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas commodo placerat. Nulla dui sem, bibendum quis arcu ac, consectetur aliquam nulla</p>
                        </div>
                    </div>
                </div> 
            </Link>
        </div>
    );
}

export default MyWork;