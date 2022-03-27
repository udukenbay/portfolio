import React from "react";
import Navbar from "../Navbar/Navbar";
import { TextBackground } from './AboutMe.style';

function AboutMe() {
    return(
        <div>
            <Navbar/>
            <TextBackground>About Me</TextBackground>
        </div>
    )
}

export default AboutMe;