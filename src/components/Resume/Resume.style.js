import styled from 'styled-components';

export const ResumeWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;

    /* The actual timeline (the vertical ruler) */
    .timeline {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
    }

    /* The actual timeline (the vertical ruler) */
    .timeline::after {
        content: '';
        position: absolute;
        width: 6px;
        background-color: #c7feff;
        top: 0;
        bottom: 0;
        left: 50%;
        margin-left: -3px;
    }

    /* Container around content */
    .container {
        position: relative;
        background-color: inherit;
        width: 50%;
    }

    /* The circles on the timeline */
    .container::after {
        background-color: #00D9DB;
        content: '';
        position: absolute;
        width: 25px;
        height: 25px;
        right: -17px;
        background-color: white;
        border: 4px solid #FF9F55;
        top: 15px;
        border-radius: 50%;
        z-index: 1;
    }

    /* Place the container to the left */
    .left {
        left: 0;
    }

    /* Place the container to the right */
    .right {
        left: 50%;
    }

    /* Add arrows to the left container (pointing right) */
    .left::before {
        background-color: #e2feff;
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        right: 20px;
        border: medium solid white;
        border-width: 10px 0 10px 10px;
        border-color: transparent transparent transparent white;
    }

    /* Add arrows to the right container (pointing left) */
    .right::before {
        background-color: #e2feff;
        content: " ";
        height: 0;
        position: absolute;
        top: 22px;
        width: 0;
        z-index: 1;
        left: 20px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }

    /* Fix the circle for containers on the right side */
    .right::after {
        left: -16px;
    }

    .content {
        // background-color: #e2feff;
        padding: 20px 30px;
        position: relative;
        border-radius: 6px;
        img {
            width: 200px;
            height: 200px;
            margin-top: -200px;
            margin-left: 200px;
        
            @media (max-width: 768px) {
                width: 200px;
                height: 150px;
            }
        }
    }


    /* Media queries - Responsive timeline on screens less than 600px wide */
    @media screen and (max-width: 600px) {
    /* Place the timelime to the left */
    .timeline::after {
        left: 31px;
    }

    /* Full-width containers */
    .container {
        width: 100%;
        padding-left: 70px;
        padding-right: 25px;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container::before {
        left: 60px;
        border: medium solid white;
        border-width: 10px 10px 10px 0;
        border-color: transparent white transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after, .right::after {
        left: 15px;
    }

    /* Make all right containers behave like the left ones */
    .right {
        left: 0%;
    }
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