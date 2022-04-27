import styled from 'styled-components';

export const SkillsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .skills {
        width: 80px;
        height: 80px;
        background-color: deepskyblue;
        border-radius: 50%;
        position: relative;
    }

    .inner {
        width: 100%;
        height: 100%;
        // background-color: green;
        position: absolute;
        animation: rotation 3s infinite linear;
        border-radius: 50%;
        padding: 100px;
        border: 1px solid silver;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .inner::before {
        content: 'Java';
        width: 20px;
        height: 20px;
        background-color: deeppink;
        position: absolute;
        left: -20px;
        top: -20px;
        border-radius: 50%;
        margin: 50px;
    }

    @keyframes rotation {
        0% {
            transform: translate(-50%, -50%) rotate(-30deg);
        }
        25% {
            transform: translate(-50%, -50%) rotate(120deg);
        }
    }

    // .proton {
    //     width: 80px;
    //     height: 80px;
    //     background-color: deepskyblue;
    //     border-radius: 50%;
    //     position: relative;
    // }

    // .electron {
    //     width: 100%;
    //     height: 100%;
    //     // background-color: green;
    //     position: absolute;
    //     animation: rotation 3s infinite linear;
    //     border-radius: 50%;
    //     padding: 100px;
    //     border: 1px solid silver;
    //     top: 50%;
    //     left: 50%;
    //     transform: translate(-50%, -50%);
    // }

    // .electron::before {
    //     content: 'Java';
    //     width: 20px;
    //     height: 20px;
    //     background-color: deeppink;
    //     position: absolute;
    //     left: -20px;
    //     top: -20px;
    //     border-radius: 50%;
    //     margin: 50px;
    // }

    // @keyframes rotation {
    //     0% {
    //         transform: translate(-50%, -50%) rotate(-360deg);
    //     }
    // }
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