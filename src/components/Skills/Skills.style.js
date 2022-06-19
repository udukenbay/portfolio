import styled from 'styled-components';

export const SkillsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    h1 {
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        margin-left: 20px;
    }
`;

export const Skillset = styled.button`
    all: unset;
    cursor: pointer;
    position: absolute;
    left: 50px;
    top: 70px;
    margin: 5em;
    padding-left: 10em;

    @keyframes skillsAnime {
        from {
            top: 0%;
            left: 0%;
            color: yellow;
        }
        to {
            top: 110%;
            left: 50%;
            transform: rotate( 360deg );
            color: green;
        }

        0%   {color:red; left:0px; top:0px;}
        25%  {color:orange; left:200px; top:0px;}
        50%  {color:violet; left:200px; top:200px;}
        75%  {color:blue; left:0px; top:200px;}
        100% {color:green; left:0px; top:0px;}
    }

    .paused {
        animation-play-state:paused;
        .skill {
            top: 0%;
            left: 0%;
            color: violet;
        }
    }

    .active {
        animation-iteration-count: infinite;

        .skill {
            margin: 10px;
            animation-name: skillsAnime;
            animation-duration: 4s;
            animation-iteration-count: infinite;
        }
    }
`;

export const Panel = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 20px;
    top: 70px;
    margin: 5em;
    padding-right: 10em;

    .certificate {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin: 10px;
        padding: 10px;
    }

    img {
        width: 30px;
        height: 30px;
        margin-right: 10px;
        filter: opacity(0.4) drop-shadow(0 0 0 #00d9db);
    }

    a {
        color: #00a2c7;
        text-decoration: none;
    }

    a:hover {
        text-decoration: underline;
    }
`;

export const TextBackground = styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    font-family: 'Amiri';
    font-style: normal;
    font-weight: 400;
    font-size: 250px;
    color: rgba(0, 0, 0, 0.05);
`;