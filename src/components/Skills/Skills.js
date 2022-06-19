import React, {useState} from "react";
import Navbar from "../Navbar/Navbar";
import { SkillsWrapper, 
    Skillset,
    Panel,
    TextBackground } from './Skills.style';
import { SkillsList } from './skillsList.js';
import { certificatesList } from "./certificatesList";
import certificateIcon from '../../image/certificate.png';

function Skills() {
    const list = SkillsList;
    const skills = list.map((item, i) => {
        return (
            <div key={item.skill}>
                {
                    item.skillSet.map((val, index) => 
                        <div key={index+"-"+item.skillSet} style={{
                            transform: 'translate('+Math.floor(Math.random() * (index+370))+'px, '+Math.floor(Math.random() * (index+250))+'px)' 
                        }} className='skill'>
                            {val}
                        </div>
                )
                }
            </div>
        );
    });
    
    const certificates = certificatesList.map((item, i) => {
        return (
            <div className="certificate" key={i}>
                <img src={certificateIcon} alt='' />
                {
                    <a href={item.file} download={item.fileName} target='_blank'>
                        {item.description}
                    </a>
                }
            </div>
        )
    });

    const [run, setRun] = useState('active');

    const runAnimation = () => {
        setRun(run == 'active' ? 'paused' : 'active');
    }

    return(
        <>
            <Navbar/>
            <SkillsWrapper>
                <Skillset onClick={runAnimation}>
                    <h1>SkillsList</h1>
                    <>
                    {
                        skills.map((m, i) => {
                            return <div className={run} key={i}>{m}</div>;
                        })
                    }
                    </>
                </Skillset>
                <Panel>
                    <h1>Certificates</h1>
                    <div className="container-certificates">
                        {certificates}
                    </div>
                </Panel>
            </SkillsWrapper>
            <TextBackground>Skills</TextBackground>
        </>
    )
}

export default Skills;