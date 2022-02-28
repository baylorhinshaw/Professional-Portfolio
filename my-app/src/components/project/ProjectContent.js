import '../Main.css';
import React from "react";
import GridWrapper from './GridWrapper';

function ProjectContent() {
    return (
        <div className='Project-Content'>
            <div className='Project-Content-Container'>
                <h2>Heading 2 - Project Title</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur egestas commodo placerat. Nulla dui sem, bibendum quis arcu ac, consectetur aliquam nulla. Quisque ut congue urna. Curabitur viverra quis magna id congue. Nulla interdum euismod est in interdum. Phasellus ac dolor ornare, laoreet turpis eget, viverra odio. Duis lacinia iaculis ipsum vitae mollis. Suspendisse eget ornare risus. Nunc vitae felis id libero mattis lacinia ut eu magna. Donec et sapien a dui vestibulum cursus. Donec ullamcorper lacus nisl, sit amet malesuada nunc facilisis nec. Nulla ullamcorper, lectus nec eleifend venenatis, dui risus placerat dui, nec feugiat ante odio eu tellus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque imperdiet laoreet leo et viverra. Nulla nec pharetra nisi, at venenatis sem.</p>
                <div className='separator'></div>
                <GridWrapper/>
            </div>
        </div>
    );
};

export default ProjectContent;