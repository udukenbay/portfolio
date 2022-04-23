import React from "react";
import github from '../../image/social/github-logo.png';
import linkedin from '../../image/social/linkedin.png';
import twitter from '../../image/social/twitter.png';
import insta from '../../image/social/instagram.png';
import telegram from '../../image/social/telegram.png';
import { Social } from './ContactMe.style';

function SocialNetwork() {
    return (
        <Social>
            <a href="https://github.com/udukenbay"><img src={github} alt="github" width="20" /></a>
            <a href="https://www.linkedin.com/in/urziya-dukenbay"><img src={linkedin} alt="logo" width="20" /></a>
            <a href="https://twitter.com/UDukenbay"><img src={twitter} alt="logo" width="20" /></a>
            <a href="https://www.instagram.com/uad.uad/?hl=en"><img src={insta} alt="logo" width="20" /></a>
            <a href="https://t.me/urziya_dukenbay"><img src={telegram} alt="logo" width="20" /></a>
        </Social>
    )
}

export default SocialNetwork;