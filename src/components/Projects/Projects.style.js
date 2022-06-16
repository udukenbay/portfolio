import styled from 'styled-components';

export const ProjectsWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #f7f7f7;
`;

export const CodeBlock = styled.div`
    .slider {
        position: relative;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .img {
        width: 500px;
        height: 300px;
        border-radius: 10px;
    }

    .right-arrow {
        position: absolute;
        top: 50%;
        right: -150px;
        font-size: 3rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .left-arrow {
        position: absolute;
        top: 50%;
        left: -150px;
        font-size: 3rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .slide {
        opacity: 0;
        transition-duration: 1s ease;
    }

    .slide.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
    }
`;

export const SideProjectBlock = styled.div`
    border-top: 1px solid gray;
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