import '../Main.css';
import React from "react";
import Linkedin from '../../images/linkedin-white.svg';
import Github from '../../images/github-white.svg';
import Email from '../../images/email-white.svg';
import Menu from '../../images/menu.svg';

function ProjectJumbotron() {
    return (
        <div className='Project-Jumbotron'>
            <div className='column-3'>
                <h2>Baylor Hinshaw</h2>
            </div>
            <div className='column-3 project-title'>
                <h1><span style={{ fontWeight: 400 }}>Project</span> One</h1>
            </div>                
            <div className='column-3'>
                <div className='Row'>
                    <a href='https://www.linkedin.com/in/baylorhinshaw/'><img className='HeaderIcon' src={Linkedin}></img></a>
                    <a href='https://github.com/baylorhinshaw'><img className='HeaderIcon' src={Github}></img></a>
                    <a href='mailto:baylorhinshaw21@gmail.com'><img className='HeaderIcon' src={Email}></img></a>
                    <a href='#'><img className='menu-btn' src={Menu}></img></a>
                </div>
            </div>
        </div>
    );
};

export default ProjectJumbotron;