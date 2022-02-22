import '../Main.css';
import React from "react";
import Linkedin from '../../images/linkedin-white.svg';
import Github from '../../images/github-white.svg';
import Email from '../../images/email-white.svg';
import Close from '../../images/close.svg';

function Menu() {
    return (
        <div id='Menu'>
            <div className='MenuRow'>
                <div className='MenuColumn1'>
                    <h4>Baylor Hinshaw</h4>
                </div>
                <div className='MenuColumn2'>
                    <img className='HeaderIcon' src={Linkedin}></img>
                    <img className='HeaderIcon' src={Github}></img>
                    <img className='HeaderIcon' src={Email}></img>
                    <a href='#'><img className='HeaderIcon' src={Close}></img></a>
                </div>
            </div>
            <div className='MenuRow'>
                <div>
                    <a href='#'>Home</a>
                    <ul id='nav'>
                        <li><a href='#'>-Project 1</a></li>
                        <li><a href='#'>-Project 2</a></li>
                    </ul>
                    <a href='#'>baylorhinshaw21@gmail.com</a>
                </div>
            </div>
        </div>
    );
}

export default Menu;