import React from "react";
import Navbar from "../Navbar/Navbar";
// import SocialFollow from "../SocialFollow/SocialFollow";
import { Wrapper, 
    HalfscreenContent, InTouchBox, InputContainer, InputContainerItem, Comment, Footer,
     HalfscreenMap, Map,
     TextBackground } from './ContactMe.style';
import GoogleMap from "./GoogleMap";

function ContactMe() {
    return(
        <>
            <Navbar/>
            <Wrapper>
                <HalfscreenContent>
                    <InTouchBox>
                        <h1>Get in Touch</h1>
                        <InputContainer>
                            <InputContainerItem>
                                <label>First Name</label>
                                <input placeholder="Please Your Name"></input>
                            </InputContainerItem>
                            <InputContainerItem>
                                <label>Last Name</label>
                                <input placeholder="Please Your Surname"></input>
                            </InputContainerItem>
                        </InputContainer>
                        <InputContainer>
                            <InputContainerItem>
                                <label>E-mail</label>
                                <input placeholder="Please enter E-mail"></input>
                            </InputContainerItem>
                            <InputContainerItem>
                                <label>Phone</label>
                                <input placeholder="Please enter Your Phone"></input>
                            </InputContainerItem>
                        </InputContainer>
                        <Comment>
                            <label>Comment</label>
                            <textarea placeholder="Comment..."></textarea>
                        </Comment>
                        <Footer>
                            <button>
                                SEND MESSAGE
                            </button>
                            <button>
                                SCHEDULE MEETING
                            </button>
                        </Footer>
                    </InTouchBox>
                </HalfscreenContent>
                <HalfscreenMap>
                    <Map><GoogleMap /></Map>
                    {/* <SocialFollow/> */}
                </HalfscreenMap>
            </Wrapper>
            <TextBackground>Contact</TextBackground>
        </>
    )
}

export default ContactMe;