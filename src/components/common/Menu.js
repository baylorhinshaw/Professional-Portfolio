import '../Main.css';
import React from "react";
import Linkedin from '../../images/linkedin-white.svg';
import Github from '../../images/github-white.svg';
import Email from '../../images/email-white.svg';
import Close from '../../images/close.svg';
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className='Menu-Background'>
            <div className='menu-header'>
                <div className='column-2 jumbo-hover'>
                    <Link to='/'><h2>Baylor Hinshaw</h2></Link>
                </div>
                <div className='column-2'>
                    <div className='project-jumbotron-row'>
                        <a href='https://www.linkedin.com/in/baylorhinshaw/' target='_blank'><img className='HeaderIcon' src={Linkedin}></img></a>
                        <a href='https://github.com/baylorhinshaw' target='_blank'><img className='HeaderIcon' src={Github}></img></a>
                        <a href='mailto:baylorhinshaw21@gmail.com'><img className='HeaderIcon' src={Email}></img></a>
                        <a href='#'><img className='HeaderIcon menu-btn' src={Close}></img></a>
                    </div>
                </div>
            </div>
            <div className='menu-row'>
                <div className='directory'>
                    <Link to='/'><strong>Home</strong></Link>
                    <ul>
                        <li>
                            <Link to='/project1'>Project One</Link>
                        </li>
                        <li>
                            <Link to='/project2'>Project Two</Link>
                        </li>
                    </ul>
                    <a className='directory-email' href='mailto:baylorhinshaw21@gmail.com'>baylorhinshaw21@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Menu;