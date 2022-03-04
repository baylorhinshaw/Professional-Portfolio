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

    const description = 'JUST CHATTING';

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