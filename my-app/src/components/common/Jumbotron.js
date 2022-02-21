import './Jumbotron.css';
import React from "react";
import Atlanta from '../images/ben-dutton-JkyMs0Shfn0-unsplash.jpg';
import Linkedin from '../images/linkedin-white.svg';
import Github from '../images/github-white.svg';
import Email from '../images/email-white.svg';


function Jumbotron() {
    return (
        <div className='Jumbotron-Img' style={{ backgroundImage: `url(${Atlanta})` }}>
            <div className='contact'>
                <img className='logo' src={Linkedin}></img>
                <img className='logo' src={Github}></img>
                <img className='logo' src={Email}></img>
            </div>
            <div className='column'>
                <h1>Hi, I'm Baylor Hinshaw</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas commodo placerat. Nulla dui sem, bibendum quis arcu ac, consectetur aliquam nulla. Quisque ut congue urna. Curabitur viverra quis magna id congue. Nulla interdum euismod est in interdum. Phasellus ac dolor ornare, laoreet turpis eget, viverra odio. Duis lacinia iaculis ipsum vitae mollis. Suspendisse eget ornare risus. Nunc vitae felis id libero mattis lacinia ut eu magna. Donec et sapien a dui vestibulum cursus. Donec ullamcorper lacus nisl, sit amet malesuada nunc facilisis nec. Nulla ullamcorper, lectus nec eleifend venenatis, dui risus placerat dui, nec feugiat ante odio eu tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque imperdiet laoreet leo et viverra. Nulla nec pharetra nisi, at venenatis sem.</p>
            </div>
        </div>
    );
}

export default Jumbotron;