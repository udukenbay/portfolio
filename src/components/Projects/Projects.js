import React from "react";
import Navbar from "../Navbar/Navbar";
import { ProjectsWrapper, CodeBlock, SideProjectBlock,
    TextBackground } from './Projects.style';
import Slider from "./Slider";
import { SliderData } from "./SliderData";

function Projects() {
    return(
        <>
            <Navbar/>
            <ProjectsWrapper>
                <CodeBlock>
                    <Slider slides={SliderData} />
                    <h1>My Coding</h1>
                    <a href='https://codepen.io/udukenbay/pen/jOZLrpe'>Slideshow</a><br/>
                    <a href='https://codepen.io/udukenbay/pen/xxYLERg'>Button Manipulation</a><br/>
                    <a href='https://codepen.io/udukenbay/pen/qBxXapX'>Accordion</a>
                </CodeBlock>
                <SideProjectBlock>
                    <h1>Side Projects</h1>
                </SideProjectBlock>
            </ProjectsWrapper>
            <TextBackground>Projects</TextBackground>
        </>
    )
}

export default Projects;