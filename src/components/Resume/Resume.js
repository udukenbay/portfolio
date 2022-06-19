import React from "react";
import Navbar from "../Navbar/Navbar";
import { ResumeWrapper, 
    Download, DownContainer, Down,
    TextBackground } from './Resume.style';
import { ResumeList } from "./cv.js";
import downloadCV from '../../assets/files/cv/UrziyaDukenbay.CV.pdf';

export default function Resume() {
    const list = ResumeList;
    const container = list.map((item, index) => 
        {
            if(index % 2 !== 0) {
                return <div className="container left" key={index}>
                            <div className="content">
                                <p>{item.time}</p>
                                <p>{item.company}</p>
                                <p>{item.position}</p>
                                <p>{item.sector}</p>
                                <p>{item.duties}</p>
                                <img src={item.logo} alt={item.company} />
                            </div>
                    </div>
            } else {
                return <div className="container right" key={index}>
                            <div className="content">
                                <p>{item.time}</p>
                                <p>{item.company}</p>
                                <p>{item.position}</p>
                                <p>{item.sector}</p>
                                <p>{item.duties}</p>
                                <img src={item.logo} alt={item.company} />
                            </div>
                </div>
            }
        }
    );

    return(
        <>
            <Navbar/>
            <ResumeWrapper>
                <div className="timeline">
                    {container}
                </div>
            </ResumeWrapper>
            <TextBackground>Resume</TextBackground>

            <Download href={downloadCV} download="download cv" target='_blank'>
                <DownContainer>
                    <Down><div></div></Down>
                    <Down><div></div></Down>
                </DownContainer>
            </Download>
        </>
    );
}