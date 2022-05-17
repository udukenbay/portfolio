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

    // const FrontEndList = list.map((item, index) => 
    //     (
    //         <div className="skill" key={index}>
    //             {item.FrontEnd}
    //         </div>
    //         // console.log(item);
    //         // return <div className="skill" key={index}>
    //         //             {item.FrontEnd}
    //         //             {/* <p>{item.FrontEnd}</p> */}
    //         //         </div>
    //     )
    // );

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
                    
                </Panel>
            </SkillsWrapper>
            <TextBackground>Skills</TextBackground>
        </>
    )
}

export default Skills;