import '../components/Main.css';
import React from "react";
import ProjectJumbotron from '../components/project/ProjectJumbotron';
import ProjectContent from '../components/project/ProjectContent';
import GridWrapper from '../components/project/GridWrapper';
import Footer from '../components/common/Footer';

const Project1 = () => {

    const imageLink = 'https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80';

    return(
        <div>
            <ProjectJumbotron jumbotronTitle='Ani-Time'/>
            <ProjectContent contentTitle='Ani-Time' contentDescription='PUT DESCRIPTION HERE'/>
            <GridWrapper imageWide={imageLink} image1={imageLink} image2={imageLink}/>
            <Footer/>
        </div>
    );
};

export default Project1