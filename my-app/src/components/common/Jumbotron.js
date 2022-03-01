import '../Main.css';
import React from "react";
import Linkedin from '../../images/linkedin-white.svg';
import Github from '../../images/github-white.svg';
import Email from '../../images/email-white.svg';


function Jumbotron() {
    return (
        <div className='Jumbotron-Background'>
            <div className='Jumbotron-Content'>
                <div className='Row'>
                    <a href='https://www.linkedin.com/in/baylorhinshaw/'><img className='HeaderIcon' src={Linkedin}></img></a>
                    <a href='https://github.com/baylorhinshaw'><img className='HeaderIcon' src={Github}></img></a>
                    <a href='mailto:baylorhinshaw21@gmail.com'><img className='HeaderIcon' src={Email}></img></a>
                </div>
                <div className='Jumbotron-Text'>
                    <h1><span style={{ fontWeight: 400 }}>Hi, I'm</span> Baylor Hinshaw</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas commodo placerat. Nulla dui sem, bibendum quis arcu ac, consectetur aliquam nulla. Quisque ut congue urna. Curabitur viverra quis magna id congue. Nulla interdum euismod est in interdum. Phasellus ac dolor ornare, laoreet turpis eget, viverra odio. Duis lacinia iaculis ipsum vitae mollis. Suspendisse eget ornare risus. Nunc vitae felis id libero mattis lacinia ut eu magna. Donec et sapien a dui vestibulum cursus. Donec ullamcorper lacus nisl, sit amet malesuada nunc facilisis nec. Nulla ullamcorper, lectus nec eleifend venenatis, dui risus placerat dui, nec feugiat ante odio eu tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque imperdiet laoreet leo et viverra. Nulla nec pharetra nisi, at venenatis sem.</p>
                </div>
            </div>
        </div>
    );
};

export default Jumbotron;