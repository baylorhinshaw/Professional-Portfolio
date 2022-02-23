import '../components/Main.css';
import React from "react";
import Atlanta from '../images/ben-dutton-JkyMs0Shfn0-unsplash.jpg';
import Background from '../images/luca-bravo-bTxMLuJOff4-unsplash.jpg';
import Linkedin from '../images/linkedin-white.svg';
import Github from '../images/github-white.svg';
import Email from '../images/email-white.svg';
import Menu from '../images/menu.svg';
import Footer from '../components/common/Footer';

const Project1 = () => {
    return(
        <div>
            <div className="Project1-Header" style={{ backgroundImage: `url(${Atlanta})` }}>
                <h2>Baylor Hinshaw</h2>
                <img className='HeaderIcon' src={Linkedin}></img>
                <img className='HeaderIcon' src={Github}></img>
                <img className='HeaderIcon' src={Email}></img>
                <a href='#'><img className='HeaderIcon' src={Menu}></img></a>
                <h1>Project1</h1>
            </div>
            <div className='Project1-Content' style={{ backgroundImage: `url(${Background})` }}>
                <h2>Heading 2 - Project Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas commodo placerat. Nulla dui sem, bibendum quis arcu ac, consectetur aliquam nulla. Quisque ut congue urna. Curabitur viverra quis magna id congue. Nulla interdum euismod est in interdum. Phasellus ac dolor ornare, laoreet turpis eget, viverra odio. Duis lacinia iaculis ipsum vitae mollis. Suspendisse eget ornare risus. Nunc vitae felis id libero mattis lacinia ut eu magna. Donec et sapien a dui vestibulum cursus. Donec ullamcorper lacus nisl, sit amet malesuada nunc facilisis nec. Nulla ullamcorper, lectus nec eleifend venenatis, dui risus placerat dui, nec feugiat ante odio eu tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque imperdiet laoreet leo et viverra. Nulla nec pharetra nisi, at venenatis sem.</p>
            </div>
            <div class="grid-wrapper">
                    <div class="tall">
                        <img src="https://images.unsplash.com/photo-1588117472013-59bb13edafec?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60" alt=""/>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1541845157-a6d2d100c931?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80" alt="" />
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1588282322673-c31965a75c3e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1351&amp;q=80" alt="" />
                    </div>
                    <div class="wide">
                        <img src="https://images.unsplash.com/photo-1587588354456-ae376af71a25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" />
                    </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Project1