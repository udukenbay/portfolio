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
                    <h1>My Coding</h1>
                    <Slider slides={SliderData} />
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