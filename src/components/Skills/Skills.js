import React from "react";
import Navbar from "../Navbar/Navbar";
import { SkillsWrapper, 
    Cicle,
    Panel,
    TextBackground } from './Skills.style';
import { SkillsList } from './skillsList.js';

function Skills() {
    const list = SkillsList;
    console.log(list);

    const skills = list.map((item, i) => {
                        var x = Math.floor(Math.random() * (i+300));
                        var y = Math.floor(Math.random() * (i+250));
                        var translate = 'translate('+x+'px, '+y+'px)';
                        var css = {
                            transform: translate 
                        }

                        return (
                            <div key={item.skill}>
                                {
                                    item.skillSet.map((val, index) => 
                                        <div key={index+"-"+item.skillSet} style={css} className='skill'>
                                            {val}
                                        </div>
                                )
                                }
                            </div>
                        );
                    });

    return(
        <>
            <Navbar/>
            <SkillsWrapper>
            
                <Cicle>
                    <div className="container">
                        <h1>SkillsList</h1>
                        <div className="skills">
                        {
                            skills.map((m, i) => {
                                return <>{m}</>;
                            })
                        }
                        </div>
                    </div>
                </Cicle>
            
                <Panel>
                    <h1>Certificates</h1>
                    <div className="container-certificates">
                        
                    </div>
                </Panel>
            </SkillsWrapper>
            <TextBackground>Skills</TextBackground>
        </>
    )
}

export default Skills;