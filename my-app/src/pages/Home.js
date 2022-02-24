import '../components/Main.css';
import React from "react";
import Jumbotron from '../components/common/Jumbotron';
import MyWork from '../components/common/MyWork'; 
import Footer from '../components/common/Footer';

function Home() {
    return (
        <div>
            <Jumbotron/>
            <MyWork/>
            <Footer/>
        </div>
    );
}

export default Home;