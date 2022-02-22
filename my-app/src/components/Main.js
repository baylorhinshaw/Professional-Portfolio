import React from 'react';
import Background from '../../src/images/luca-bravo-bTxMLuJOff4-unsplash.jpg';
import MyWork from './common/MyWork';
import Jumbotron from './common/Jumbotron';
import Footer from './common/Footer';

const Main = () => {

    return(
        <div className='Body-Jumbotron' style={{ backgroundImage: `url(${Background})` }}>
        {/* I created this for you so you can pull in all your components here */}
            <Jumbotron/>
            <MyWork/>
            <Footer/>
        </div>
    )
}

export default Main;