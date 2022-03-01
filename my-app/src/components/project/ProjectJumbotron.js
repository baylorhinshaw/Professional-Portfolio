import '../Main.css';
import React, { useState } from "react";
import Linkedin from '../../images/linkedin-white.svg';
import Github from '../../images/github-white.svg';
import Email from '../../images/email-white.svg';
import MenuImage from '../../images/menu.svg';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import Menu from '../common/Menu';

function ProjectJumbotron() {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    const customStyles = {
        content: {
            display: 'block',
            justifyContent: 'center',
            width: '100%',
            height: '100vh',
            opacity: '0.8',
            color: 'white',
            backgroundColor: '#B25D5C',
            inset: '0px',
            padding: '0px',
            border: 0
        },
      };

    return (
        <div className='Project-Jumbotron'>
            <div className='Project-Jumbotron-Content'>
                <div className='column-3 left jumbo-hover'>
                    <Link to='/'><h2>Baylor Hinshaw</h2></Link>
                </div>
                <div className='column-3 project-title'>
                    <h1><span style={{ fontWeight: 400 }}>Project</span> One</h1>
                </div>                
                <div className='column-3'>
                    <div className='project-jumbotron-row'>
                        <a href='https://www.linkedin.com/in/baylorhinshaw/' target='_blank'><img className='HeaderIcon' src={Linkedin}></img></a>
                        <a href='https://github.com/baylorhinshaw' target='_blank'><img className='HeaderIcon' src={Github}></img></a>
                        <a href='mailto:baylorhinshaw21@gmail.com'><img className='HeaderIcon' src={Email}></img></a>
                        <a onClick={() => setModalIsOpen(true)}><img className='HeaderIcon menu-btn' src={MenuImage}></img></a>
                    </div>
                </div>
            </div>
            <Modal isOpen={modalIsOpen} style={customStyles}>
                <Menu/>
            </Modal>
        </div>
    );
};

export default ProjectJumbotron;