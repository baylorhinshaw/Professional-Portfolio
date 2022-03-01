import '../Main.css';
import React from "react";
import Linkedin from '../../images/linkedin-purple.svg';
import Github from '../../images/github-purple.svg';
import Email from '../../images/email-purple.svg';

function Footer() {
    return (
        <div className='Footer'>
            <div className='separator' style={{ backgroundColor: "#C2719F", marginBottom: "0px" }}></div>
            <div className='footer-row'>
                    <div className='column-3 left'>
                        <h3>Let's Work Together</h3>
                    </div>
                    <div className='column-3 center' style={{ paddingTop: "5px" }}>
                        <a className='Email' href='mailto:baylorhinshaw21@gmail.com'>
                            baylorhinshaw21@gmail.com
                        </a>
                    </div> 
                    <div className='column-3'>
                        <div className='project-jumbotron-row'>
                            <a href='https://www.linkedin.com/in/baylorhinshaw/'><img className='FooterIcon' src={Linkedin}></img></a>
                            <a href='https://github.com/baylorhinshaw'><img className='FooterIcon' src={Github}></img></a>
                            <a href='mailto:baylorhinshaw21@gmail.com'><img className='FooterIcon' src={Email} style={{ paddingRight: '0px'}}></img></a>            
                        </div>
                    </div>  
            </div>
        </div>
    );
}

export default Footer;