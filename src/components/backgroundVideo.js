import React from 'react'
import Jumproup from '../videos/jumproup.mp4'


const videobackground = () => {
    return(
        <div>
            <video autoPlay loop muted
            style={{
                position: "absolute",
                width: "100%",
                left: "50%",
                top: "50%",
                height: "100%",
                objectfit: "cover",
                tranform: "translate(-50%, -50%)",
                zindex: "-1",

            }}
            >
            <source src={Jumproup} type="video/mp4" />
            </video>
        </div>
    );
};



export default videobackground;