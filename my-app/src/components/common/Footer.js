import '../Main.css';
import React from "react";
import Linkedin from '../../images/linkedin-purple.svg';
import Github from '../../images/github-purple.svg';
import Email from '../../images/email-purple.svg';

function Footer() {
    return (
        <div className='Footer'>
            <div className='Row'>
                <div>Let's Work Together</div>
                <a href='mailto:baylorhinshaw21@gmail.com'>
                    <div>baylorhinshaw21@gmail.com</div>  
                </a>  
                <a href='https://www.linkedin.com/in/baylorhinshaw/'><img className='FooterIcon' src={Linkedin}></img></a>
                <a href='https://github.com/baylorhinshaw'><img className='FooterIcon' src={Github}></img></a>
                <a href='mailto:baylorhinshaw21@gmail.com'><img className='FooterIcon' src={Email}></img></a>            
            </div>
        </div>
    );
}

export default Footer;