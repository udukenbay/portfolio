import React from "react";
import github from '../../image/social/github-logo.png';
import linkedin from '../../image/social/linkedin.png';
import twitter from '../../image/social/twitter.png';
import insta from '../../image/social/instagram.png';
import telegram from '../../image/social/telegram.png';

function SocialNetwork() {
    return (
        <>
            <img src={github} alt="github" width="20" />
            <img src={linkedin} alt="logo" width="20" />
            <img src={twitter} alt="logo" width="20" />
            <img src={insta} alt="logo" width="20" />
            <img src={telegram} alt="logo" width="20" />
        </>
    )
}

export default SocialNetwork;