import React, { useState } from "react";
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

    // const [state, setState] = useState({
    //     fName: '',
    //     lName: '',
    //     email: '',
    //     comment: ''
    // });

    const [fName, setFname] = useState('');
    const [lName, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

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
        toSend.fName = fName;
        toSend.lName = lName;
        toSend.email = email;
        toSend.comment = comment;
        send(
            serviceId, templateId, toSend
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        setFname('');
        setLname('');
        setEmail('');
        setComment('');
    }
    // end=> sendMessage by emailjs

    // start=> scheduleMeeting

    function scheduleMeet(e) {
        if(email === "") {
            alert('Please fill email, first name, last name and email. Just for sure please');
        } else {
            setIsShow(true);
            // setIsShow({ isShow: !isShow });
            console.log('isShow(scheduleMeet)', isShow);
        }
    }

    const [drive, setDrive] = useState(new Date());// the lifted state
    const [selected, setSelected] = useState(false);// the lifted state
//https://towardsdatascience.com/passing-data-between-react-components-parent-children-siblings-a64f89e24ecf
// Step 1: Define a callback function that takes in a parameter which we consider having accessed from the child in the Parent.js
// Step 2: Also, send the defined callback function as a props to the Child1.js
//https://stackoverflow.com/questions/63431820/passing-data-child-to-parent-functional-components-in-reactjs (helped me)
    const updateMeetUp_Date = (startTime) => {// the callback.
        console.log("coming date:", startTime);
        setDrive(startTime);
    }

    const updateMeetUp_Selected = (active) => {
        console.log("coming status:", active);
        setSelected(active)
        setIsShow(false);
        console.log('isShow(updateMeetUp_Selected)', isShow);

        console.log('(updateMeetUp_Selected)', email, fName, lName, comment);
        //sending mail
        init(userID);
        toSend.fName = fName;
        toSend.lName = lName;
        toSend.email = email;
        toSend.comment = `Let's meet on this day: ${drive}`;
        send(
            serviceId, templateId, toSend
            )
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                console.log(err);
            });
        setFname('');
        setLname('');
        setEmail('');
        setComment('');
    }
    // end=> scheduleMeeting

    return (
        <>
            <Navbar/>
            {isShow ? <ScheduleMeetUp updateMeetUp_Date={updateMeetUp_Date} updateMeetUp_Selected={updateMeetUp_Selected}/> : null}
            <Wrapper>
                <HalfscreenContent>
                    <InTouchBox>
                        <h1>Get in Touch</h1>
                        <InputContainer>
                            <InputContainerItem>
                                <label>First Name:</label>
                                <input 
                                    placeholder="Please Your Name"
                                    value={fName}
                                    onChange={e => setFname(e.target.value)}
                                ></input>
                            </InputContainerItem>
                            <InputContainerItem>
                                <label>Last Name:</label>
                                <input 
                                    placeholder="Please Your Surname"
                                    value={lName}
                                    onChange={e => setLname(e.target.value)}
                                ></input>
                            </InputContainerItem>
                        </InputContainer>
                        <InputContainer>
                            <InputContainerItem>
                                <label>E-mail:</label>
                                <input 
                                    placeholder="Please enter E-mail"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
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
                                value={comment}
                                onChange={e => setComment(e.target.value)}
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

            {/* <ScheduleMeetUp isShow={true} /> */}
            {/* {getComponent} */}
            <TextBackground>Contact</TextBackground>
        </>
    )
}

export default ContactMe;