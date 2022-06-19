import styled from 'styled-components';

export const Wrapper = styled.div`
    img {
        width: 270px;
        height: 270px;
        border-radius: 75%;

        @media (max-width: 768px) {
            width: 150px;
            height: 150px;
        }
    }

    #logo {
        position: fixed;
        bottom: 50px;
        right: 50px;
    }

    #me {
        position: fixed;
        top: 130px;
        left: 110px;
        height: 260px;
        width: 210px;
    }

    div {
        position: fixed;
        width: 50%;
        left: 25%;
        top: 25%;
        font-family: 'Montserrat', sans-serif;
        font-size: x-large;
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
    z-index: -1000;
`;