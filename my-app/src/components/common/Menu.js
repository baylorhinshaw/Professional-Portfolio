import '../Main.css';
import React from "react";
import Linkedin from '../../images/linkedin-white.svg';
import Github from '../../images/github-white.svg';
import Email from '../../images/email-white.svg';
import Close from '../../images/close.svg';

function Menu() {
    return (
        <div className='Menu-Background'>
            <div className='MenuRow'>
                <div className='column-3'>
                    <h3>Baylor Hinshaw</h3>
                </div>
                <div className='column-3 directory'>
                    <a href='#'>Home</a>
                    <a href='#'>- Project One</a>
                    <a href='#'>- Project Two</a>
                    <a href='mailto:baylorhinshaw21@gmail.com'>baylorhinshaw21@gmail.com</a>
                </div>
                <div className='column-3'>
                    <div className='Row'>
                        <img className='HeaderIcon' src={Linkedin}></img>
                        <img className='HeaderIcon' src={Github}></img>
                        <img className='HeaderIcon' src={Email}></img>
                        <a href='#'><img className='HeaderIcon menu-btn' src={Close}></img></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;