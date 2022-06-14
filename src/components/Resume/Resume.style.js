import styled from 'styled-components';

export const ResumeWrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    position: relative;

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
            opacity: 0.5;
            border-radius: 25%;
        
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

export const Download = styled.a`
    width: 60px;
    height: 60px;
    font-family: Roboto,sans-serif;
    font-weight: 300;
    margin: 0;
    padding: 0;
    position: fixed;
    right: 30px;
    bottom: 30px;
    z-index: 1000;
    border-radius: 50%;
    border: none;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ff7f00;
`;

export const ArrowContainer = styled.div`
    margin-left: 23px;
    animation-name: bounce;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
`;

export const Arrow = styled.div`
    animation-name: opacity;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;

    :last-child {
        animation-direction: reverse;
    }

    div {
        width: 10px;
        height: 10px;
        border-right: 3px solid #bebebe;
        border-bottom: 3px solid #bebebe;
        transform: rotate(45deg) translateZ(1px);
    }

@keyframes opacity {
	0% {
		opacity: 0;
	}

	10% {
		opacity: 0.1;
	}

	20% {
		opacity: 0.2;
	}

	30% {
		opacity: 0.3;
	}

	40% {
		opacity: 0.4;
	}

	50% {
		opacity: 0.5;
	}

	60% {
		opacity: 0.6;
	}

	70% {
		opacity: 0.7;
	}

	80% {
		opacity: 0.8;
	}

	90% {
		opacity: 0.9;
	}

	100% {
		opacity: 1;
	}
}

@keyframes bounce {
	0% {
		transform: translateY(0);
	}

	10% {
		transform: translateY(3px);
	}

	20% {
		transform: translateY(6px);
	}

	30% {
		transform: translateY(9px);
	}

	40% {
		transform: translateY(12px);
	}

	50% {
		transform: translateY(15px);
	}

	60% {
		transform: translateY(18px);
	}

	70% {
		transform: translateY(21px);
	}

	80% {
		transform: translateY(24px);
	}

	90% {
		transform: translateY(27px);
	}

	100% {
		transform: translateY(30px);
	}
}`;

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