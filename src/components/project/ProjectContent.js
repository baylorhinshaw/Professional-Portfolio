import '../Main.css';
import React from "react";

function ProjectContent(props) {
    return (
        <div className='Project-Content'>
            <div className='Project-Content-Container'>
                <h2>{props.contentTitle}</h2>
                <p>{props.contentDescription}</p>
                <div className='separator'></div>
            </div>
        </div>
    );
};

export default ProjectContent;