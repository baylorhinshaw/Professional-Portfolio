import '../components/Main.css';
import React from "react";
import ProjectJumbotron from '../components/project/ProjectJumbotron';
import ProjectContent from '../components/project/ProjectContent';
import Footer from '../components/common/Footer';

const Project1 = () => {
    return(
        <div>
            <ProjectJumbotron/>
            <ProjectContent/>
            <Footer/>
        </div>
    );
};

export default Project1