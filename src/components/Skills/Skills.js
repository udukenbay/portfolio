import React from "react";
import Navbar from "../Navbar/Navbar";
import { SkillsWrapper, 
    TextBackground } from './Skills.style';
import { SkillsList } from './skillsList.js';

function Skills() {
    const list = SkillsList;
    console.log(list);

    const container = list.map((item, index) => 
        {
            if(index % 2 !== 0) {
                return <div className="inner left" key={index}>
                            <p>{item}</p>
                        </div>
            } else {
                return <div className="inner right" key={index}>
                            <p>{item}</p>
                        </div>
            }
        }
    );

    return(
        <>
            <Navbar/>
            <SkillsWrapper>
                <div className="skills">
                    <h1>Skills</h1>
                    {/* {container} */}
                    <div className="inner"><p>Java</p></div>
                </div>
                {/* <div className="proton">
                    <h1>Skills</h1>
                    <div className="electron"><p>Java</p></div>
                </div> */}
            </SkillsWrapper>
            <TextBackground>Skills</TextBackground>
        </>
    )
}

export default Skills;