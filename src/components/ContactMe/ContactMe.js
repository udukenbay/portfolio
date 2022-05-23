import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
// import SocialFollow from "../SocialFollow/SocialFollow";
import { Wrapper, 
    HalfscreenContent, InTouchBox, InputContainer, InputContainerItem, Comment, Footer,
     HalfscreenMap, Map,
     TextBackground } from './ContactMe.style';
import GoogleMap from "./GoogleMap";
import SocialNetwork from "./SocialNetwork";
import { send, init } from "emailjs-com";
import ScheduleMeetUp from "./ScheduleMeetUp";

function ContactMe(props) {

    // start=> sendMessage by emailjs
    const serviceId = "service_iqsmwo2";
    const templateId = "template_xkujooy";
    const userID = "xzoBNoZAf7Fw2GyQo";

    const [state, setState] = useState({
        fName: '',
        lName: '',
        email: '',
        comment: ''
    });

    const [isShow, setIsShow] = useState(false);

    const toSend = {
        fName: '',
        lName: '',
        email: '',
        comment: ''
    }

    // about props => interface react components
    
    //OPEN MODAL REACT
    // https://www.youtube.com/watch?v=LyLa7dU5tp8

    
    function sendMessage(e) {
        init(userID);
        toSend.fName = state.fName;
        toSend.lName = state.lName;
        toSend.email = state.email;
        toSend.comment = state.comment;
        send(
            serviceId, templateId, toSend
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        state.fName = '';
        state.lName = '';
        state.email = '';
        state.comment = '';
    }
    // end=> sendMessage by emailjs

    // start=> scheduleMeeting
    const [start_date, set_start_date] = useState(new Date());
    const [info_selected_active, set_info_selected_active] = useState(false);

    function scheduleMeet(e) {
        if(state.email == "") {
            alert('Please fill email');
        } else {
            console.log(isShow);
            setIsShow({ isShow: !isShow });
            console.log(isShow);
        }
    }

    // const getComponent = () => {
    //     if(showMeetUp) return <ScheduleMeetUp/>;
    //     else return null;
    // }
    useEffect(() => {
        // submit_data(first_name, last_name, start_date);
        set_info_selected_active(false);
    }, []);

    // end=> scheduleMeeting

    return (
        <>
            <Navbar/>
            <Wrapper>
                <HalfscreenContent>
                    <InTouchBox>
                        <h1>Get in Touch</h1>
                        <InputContainer>
                            <InputContainerItem>
                                <label>First Name:</label>
                                <input 
                                    placeholder="Please Your Name"
                                    value={state.fName ? state.fName : ''}
                                    onChange={e => setState({
                                        fName:e.target.value
                                    })}
                                ></input>
                            </InputContainerItem>
                            <InputContainerItem>
                                <label>Last Name:</label>
                                <input 
                                    placeholder="Please Your Surname"
                                    value={state.lName ? state.lName : ''}
                                    onChange={e => setState({
                                        lName:e.target.value
                                    })}
                                ></input>
                            </InputContainerItem>
                        </InputContainer>
                        <InputContainer>
                            <InputContainerItem>
                                <label>E-mail:</label>
                                <input 
                                    placeholder="Please enter E-mail"
                                    value={state.email ? state.email : ''}
                                    onChange={e => setState({
                                        email:e.target.value
                                    })}
                                ></input>
                            </InputContainerItem>
                            <InputContainerItem>
                                <label>Phone:</label>
                                <input placeholder="Please enter Your Phone"></input>
                            </InputContainerItem>
                        </InputContainer>
                        <Comment>
                            <label>Comment:</label>
                            <textarea 
                                placeholder="Write your message to me..."

                                value={state.comment ? state.comment : ''}
                                onChange={e => setState({
                                    comment:e.target.value
                                })}
                            ></textarea>
                        </Comment>
                        <Footer>
                            <button onClick={sendMessage}>
                                SEND MESSAGE
                            </button>
                            <button onClick={scheduleMeet}>
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

            {isShow ? <ScheduleMeetUp start_date={start_date} set_info_selected_active={set_info_selected_active}/> : null}
            {/* <ScheduleMeetUp isShow={true} /> */}
            {/* {getComponent} */}
            <TextBackground>Contact</TextBackground>
        </>
    )
}

export default ContactMe;