import '../components/Main.css';
import React from "react";
import ProjectJumbotron from '../components/project/ProjectJumbotron';
import ProjectContent from '../components/project/ProjectContent';
import GridWrapper from '../components/project/GridWrapper';
import JustChatting from '../images/justchatting.PNG';
import JustChattingLeft from '../images/justchattingleft.PNG';
import JustChattingRight from '../images/justchattingright.PNG';
import Footer from '../components/common/Footer';

const Project2 = () => {

    const description = 'Application is creating social media API, where users can add, edit, and delete, users, friends, thoughts, and reactions. Created using Express and Mongoose and uses Insomnia to test CRUD. This is meant to help improve cleaning and managing unstructred data. Would eventually like to make this a full MERN stack application with a working client.';

    return(
        <div>
            <ProjectJumbotron jumbotronTitle='Just Chatting'/>
            <ProjectContent contentTitle='Just Chatting' contentDescription={description}/>
            <GridWrapper imageWide={JustChatting} image1={JustChattingLeft} image2={JustChattingRight}/>
            <Footer/>
        </div>
    );
};

export default Project2