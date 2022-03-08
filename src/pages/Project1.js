import '../components/Main.css';
import React from "react";
import Helmet from "react-helmet";
import ProjectJumbotron from '../components/project/ProjectJumbotron';
import ProjectContent from '../components/project/ProjectContent';
import GridWrapper from '../components/project/GridWrapper';
import AnitimeHome from '../images/anitimehome.png';
import AnitimeCard from '../images/anitimecard.png';
import AnitimeSaved from '../images/anitimesaved.png';
import Footer from '../components/common/Footer';


const Project1 = () => {

    const description = 'This collaborative application was created with the purpose of being able to see and save seasonal anime. Using tools such as MongoDB, Express, React, Node.js and GraphQL. The application pulls from an external API using axios and uses the mapped data to display the different animes. Then uses Ant-Design component library to prop and create different pages, and react-router-dom for the different routes. Added jwt-decode for authentication for users when signing in or making account. Would like to add more funtionality towards the future.';

    return(

        <div>
            <Helmet>
                <title>Baylor Hinshaw - Ani-Time</title>
                <meta name="description" content="Ani-Time project of Baylor Hinshaw" />
            </Helmet>
            <ProjectJumbotron jumbotronTitle='Ani-Time'/>
            <ProjectContent contentTitle='Ani-Time' contentDescription={description}/>
            <GridWrapper imageWide={AnitimeHome} image1={AnitimeCard} image2={AnitimeSaved}/>
            <Footer/>
        </div>
    );
};

export default Project1

