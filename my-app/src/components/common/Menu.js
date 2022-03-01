import '../Main.css';
import React from "react";
import Linkedin from '../../images/linkedin-white.svg';
import Github from '../../images/github-white.svg';
import Email from '../../images/email-white.svg';
import Close from '../../images/close.svg';

function Menu() {
    return (
        <div className='Menu-Background'>
            <div className='menu-header'>
                <div className='column-2'>
                    <h2>Baylor Hinshaw</h2>
                </div>
                <div className='column-2'>
                    <div className='project-jumbotron-row'>
                        <a href='https://www.linkedin.com/in/baylorhinshaw/'><img className='HeaderIcon' src={Linkedin}></img></a>
                        <a href='https://github.com/baylorhinshaw'><img className='HeaderIcon' src={Github}></img></a>
                        <a href='mailto:baylorhinshaw21@gmail.com'><img className='HeaderIcon' src={Email}></img></a>
                        <a href='#'><img className='HeaderIcon menu-btn' src={Close}></img></a>
                    </div>
                </div>
            </div>
            <div className='Row'>
                <div className='directory'>
                    <a href='#'><strong>Home</strong></a>
                    <ul>
                        <li>
                            <a href='#'>Project One</a>
                        </li>
                        <li>
                            <a href='#'>Project Two</a>
                        </li>
                    </ul>

                    <a className='directory-email' href='mailto:baylorhinshaw21@gmail.com'>baylorhinshaw21@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Menu;