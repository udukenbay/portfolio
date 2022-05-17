import React from "react";
import Navbar from "../Navbar/Navbar";
import { Wrapper, 
    TextBackground } from './AboutMe.style';
import logo from '../../image/aboutme/logo.png';
import logoTag from '../../image/aboutme/logo_tag.png';
import urziya from '../../image/aboutme/urziya.png';

function AboutMe() {
    return(
        <div>
            <Navbar/>
            <Wrapper>
                <img src={logoTag} alt='logo' id='logo' />
                <img src={urziya} alt='me' id='me' />

                <div>
                    <p>
                        If you can find something you're really passionate about, jump on that.
                        If you're passionate about it, you bring your talent, you'll be unstoppable. <br/>
                        As a women in Tech world, I have goals to be an inspiring and creative developer 
                        and leader that will be able to invent and innovate.
                        To create a more diverse and inclusive tech world, I wanna inspire and empower the next generation of female role models. <br/>
                        To design reusable components and patterns, to build application, to manage data structure 
                        all these navigate me in science, technology, engineering & math to go further in my career.
                    </p>
                </div>
            </Wrapper>
            <TextBackground>About Me</TextBackground>
        </div>
    )
}

export default AboutMe;