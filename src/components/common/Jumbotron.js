import '../Main.css';
import React from "react";
import Linkedin from '../../images/linkedin-white.svg';
import Github from '../../images/github-white.svg';
import Email from '../../images/email-white.svg';


function Jumbotron() {
    return (
        <div className='Jumbotron-Background'>
            <div className='Jumbotron-Content'>
                <div className='Row'>
                    <a href='https://www.linkedin.com/in/baylorhinshaw/' target='_blank'><img className='HeaderIcon' src={Linkedin}></img></a>
                    <a href='https://github.com/baylorhinshaw' target='_blank'><img className='HeaderIcon' src={Github}></img></a>
                    <a href='mailto:baylorhinshaw21@gmail.com'><img className='HeaderIcon' src={Email}></img></a>
                </div>
                <div className='Jumbotron-Text'>
                    <h1><span style={{ fontWeight: 400 }}>Hi, I'm</span> Baylor Hinshaw</h1>
                    <p>Eagerly pursuing a role in software development in a highly challenging and collaborative environment that will provide valuable opportunities and further insights into understanding software languages and coding behavior.</p>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;