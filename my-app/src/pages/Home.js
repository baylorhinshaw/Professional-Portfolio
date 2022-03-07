import '../components/Main.css';
import React from "react";
import Helmet from "react-helmet";
import Jumbotron from '../components/common/Jumbotron';
import MyWork from '../components/common/MyWork'; 
import Footer from '../components/common/Footer';

function Home() {
    return (
        <div>
            <Helmet>
                <title>Baylor Hinshaw - Software Developer</title>
                <meta name="description" content="Portfolio site of Baylor Hinshaw" />
            </Helmet>
            <Jumbotron/>
            <MyWork/>
            <Footer/>
        </div>
    );
}

export default Home;