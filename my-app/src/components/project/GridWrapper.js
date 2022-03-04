import '../Main.css';
import React from "react";

function GridWrapper(props) {
    return (
        <div className='grid-container'>
            <div className='grid-container2'>
                <div class="grid-wrapper">
                    <div class="wide">
                        <img src={props.imageWide} alt="" />
                    </div>
                    <div>
                        <img src={props.image1} alt="" />
                    </div>
                    <div>
                        <img src={props.image2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GridWrapper;