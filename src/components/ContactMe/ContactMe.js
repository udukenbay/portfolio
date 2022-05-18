import React from "react";
import Navbar from "../Navbar/Navbar";
// import SocialFollow from "../SocialFollow/SocialFollow";
import { Wrapper, 
    HalfscreenContent, InTouchBox, InputContainer, InputContainerItem, Comment, Footer,
     HalfscreenMap, Map,
     TextBackground } from './ContactMe.style';
import GoogleMap from "./GoogleMap";
import SocialNetwork from "./SocialNetwork";

function ContactMe() {
    function sendMessage() {
        
    }

    return(
        <>
            <Navbar/>
            <Wrapper>
                <HalfscreenContent>
                    <InTouchBox>
                        <h1>Get in Touch</h1>
                        <InputContainer>
                            <InputContainerItem>
                                <label>First Name:</label>
                                <input placeholder="Please Your Name"></input>
                            </InputContainerItem>
                            <InputContainerItem>
                                <label>Last Name:</label>
                                <input placeholder="Please Your Surname"></input>
                            </InputContainerItem>
                        </InputContainer>
                        <InputContainer>
                            <InputContainerItem>
                                <label>E-mail:</label>
                                <input placeholder="Please enter E-mail"></input>
                            </InputContainerItem>
                            <InputContainerItem>
                                <label>Phone:</label>
                                <input placeholder="Please enter Your Phone"></input>
                            </InputContainerItem>
                        </InputContainer>
                        <Comment>
                            <label>Comment:</label>
                            <textarea placeholder="Write your message to me..."></textarea>
                        </Comment>
                        <Footer>
                            <button onClick={sendMessage}>
                                SEND MESSAGE
                            </button>
                            <button>
                                SCHEDULE MEETING
                            </button>
                        </Footer>
                    </InTouchBox>
                </HalfscreenContent>
                <HalfscreenMap>
                    <Map>
                        {/* <img src={laptop} alt="logo" width="120" /> */}
                        <GoogleMap />
                    </Map>
                    <SocialNetwork></SocialNetwork>
                </HalfscreenMap>
            </Wrapper>
            <TextBackground>Contact</TextBackground>
        </>
    )
}

export default ContactMe;