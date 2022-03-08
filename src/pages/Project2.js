import '../components/Main.css';
import React from "react";
import Helmet from "react-helmet";
import ProjectJumbotron from '../components/project/ProjectJumbotron';
import ProjectContent from '../components/project/ProjectContent';
import GridWrapper from '../components/project/GridWrapper';
import JustChatting from '../images/justchatting.png';
import JustChattingLeft from '../images/justchattingleft.png';
import JustChattingRight from '../images/justchattingright.png';
import Footer from '../components/common/Footer';

const Project2 = () => {

    const description = 'Application is creating social media API, where users can add, edit, and delete, users, friends, thoughts, and reactions. Created using Express and Mongoose and uses Insomnia to test CRUD. This is meant to help improve cleaning and managing unstructred data. Would eventually like to make this a full MERN stack application with a working client.';

    return(
        <div>
            <Helmet>
                <title>Baylor Hinshaw - Just Chatting</title>
                <meta name="description" content="Just Chatting project of Baylor Hinshaw" />
            </Helmet>
            <ProjectJumbotron jumbotronTitle='Just Chatting'/>
            <ProjectContent contentTitle='Just Chatting' contentDescription={description}/>
            <GridWrapper imageWide={JustChatting} image1={JustChattingLeft} image2={JustChattingRight}/>
            <Footer/>
        </div>
    );
};

export default Project2