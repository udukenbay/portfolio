import React from "react";
import Navbar from "../Navbar/Navbar";
import { TextBackground, Wrapper, HalfscreenContent, HalfscreenImage, DividerSmall, HeaderLine, TextBlock, LinkTo, ArrowContainer, Arrow } from './MainPage.style';
import { Link } from 'react-router-dom';

function MainPage() {
    return(
        <>
            <Navbar/>
            <Wrapper>
                <HalfscreenContent>
                    <DividerSmall></DividerSmall>
                    <HeaderLine>Hello, </HeaderLine>
                    <HeaderLine>from software developer</HeaderLine>
                    <TextBlock>My name is Urziya Dukenbay and as a passionate with coding, I can develop any complexity app</TextBlock>
                    <LinkTo>
                        <Link to="/aboutme">See More About Me</Link>
                        <ArrowContainer>
                            <Arrow><div></div></Arrow>
                            <Arrow><div></div></Arrow>
                        </ArrowContainer>
                    </LinkTo>
                </HalfscreenContent>
                <HalfscreenImage>
                    {/* <img src={ computing } alt="RequestServices" /> */}
                </HalfscreenImage>
            </Wrapper>
            <TextBackground>Hello, There.</TextBackground>
        </>
    )
}

export default MainPage;