import '../components/Main.css';
import React from "react";
import ProjectJumbotron from '../components/project/ProjectJumbotron';
import ProjectContent from '../components/project/ProjectContent';
import GridWrapper from '../components/project/GridWrapper';
import AnitimeHome from '../images/anitimehome.PNG';
import AnitimeCard from '../images/anitimecard.PNG';
import AnitimeSaved from '../images/anitimesaved.PNG';
import Footer from '../components/common/Footer';


const Project1 = () => {

    const description = 'Ani-Time is a collaborative application that was created with the purpose of being able to see and save seasonal anime. Using tools such as MongoDB, Express, React, Node.js and GraphQL. ';

    return(
        <div>
            <ProjectJumbotron jumbotronTitle='Ani-Time'/>
            <ProjectContent contentTitle='Ani-Time' contentDescription={description}/>
            <GridWrapper imageWide={AnitimeHome} image1={AnitimeCard} image2={AnitimeSaved}/>
            <Footer/>
        </div>
    );
};

export default Project1