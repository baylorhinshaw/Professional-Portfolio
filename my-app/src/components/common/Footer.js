import '../Main.css';
import React from "react";
import Linkedin from '../../images/linkedin-purple.svg';
import Github from '../../images/github-purple.svg';
import Email from '../../images/email-purple.svg';

function Footer() {
    return (
        <div className='footer'>
            <div>Let's Work Together</div>
            <div>baylorhinshaw21@gmail.com</div>
            <img className='FooterIcon' src={Linkedin}></img>
            <img className='FooterIcon' src={Github}></img>
            <img className='FooterIcon' src={Email}></img>
        </div>
    );
}

export default Footer;