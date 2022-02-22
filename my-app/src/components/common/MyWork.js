import '../Main.css';
import React from "react";
import { Link } from 'react-router-dom';

function MyWork() {
    return (
        <div className='MyWork'>
            <h2>My Work</h2>
            <a href='#'>
                <div id='project1' className='project'> 
                    <h3>Project 1</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas commodo placerat. Nulla dui sem, bibendum quis arcu ac, consectetur aliquam nulla</p>
                </div>
            </a>
            <div className='seperator'></div>
            <a href='#'>
                <div id='project2' className='project'>
                    <h3>Project 2</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas commodo placerat. Nulla dui sem, bibendum quis arcu ac, consectetur aliquam nulla</p>
                </div> 
            </a>
        </div>
    );
}

export default MyWork;