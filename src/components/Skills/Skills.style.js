import styled from 'styled-components';

export const SkillsWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Cicle = styled.div`
    // margin-top: 100px;
    position: absolute;
    left: 50px;
    top: 70px;

    .container {
        // width: 100%;
        // background-color: #2196F3;
        h1 {font-family: fantasy;}
    }

    .skill {
        :nth-child(even) {
            color: red;
        }

        :nth-child(odd) {
            color: blue;
        }

        animation-name: example;
        animation-duration: 4s;
        animation-iteration-count: infinite;
    }

    .item {
        background-color: blue;
    }


    /* The animation code */
    @keyframes example {
        from {
            top: 110%;
            left: 50%;
            color: green;
            
        }
        to {
            top: 0%;
            left: 50%;
            transform: rotate( 360deg );
            color: yellow;
        }

        // 0% {
        //     top: 110%;
        //     left: 50%;
        //  }
        //  50% {
        //     top: 0%;
        //     left: 50%;
        //     transform: rotate( 360deg );
        //  }
        //  100% {
        //     top: 50%;
        //     left: 50%;
        //     transform: rotate( 360deg );
        //  }

        0%   {color:red; left:0px; top:0px;}
        25%  {color:yellow; left:200px; top:0px;}
        50%  {color:blue; left:200px; top:200px;}
        75%  {color:green; left:0px; top:200px;}
        100% {color:red; left:0px; top:0px;}
    }
`;

export const Panel = styled.div`
    position: absolute;
    right: 20px;
    top: 70px;
    background-color: green;
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