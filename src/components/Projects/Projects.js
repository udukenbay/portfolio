import React from "react";
import Navbar from "../Navbar/Navbar";
import { ProjectsWrapper, CodeBlock, SideProjectBlock,
    TextBackground } from './Projects.style';

function Projects() {
    return(
        <>
            <Navbar/>
            <ProjectsWrapper>
                <CodeBlock>
                    <h1>My Coding</h1>
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