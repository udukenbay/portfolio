import styled from 'styled-components';
import computing from '../../image/computing.png';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 500px;
`;

export const HalfscreenContent = styled.div`
    background-color: F7F7F7;
    flex: 1;
    // width: 750px;
`;

export const HalfscreenImage = styled.div`
    background-image: url('${computing}');
    width: 750px;
    height: 500px;
    visibility: visible;
    animation-name: fadeIn;
`;

export const DividerSmall = styled.div`
    margin-top: 150px;
    margin-left: 100px;

    &:after {
        content: '';
        display: inline-block;
        width: 70px;
        height: 2px;
        background-color: #00d9db;
    }
`;

export const HeaderLine = styled.div`
    margin: 10px 100px;
`;

export const TextBlock = styled.div`
    color: #A8A7A7;
    margin-left: 100px;
    width: 40%;
`;

export const LinkTo = styled.div`
    display: flex;
    
    margin-left: 100px;
    margin-top: 20px;
    align-items: center;

    a {
        color: #838383;
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


export const ArrowContainer = styled.div`
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
        margin-left: 10px;
        margin-top: -13px;
    }

    div {
        width: 10px;
        height: 10px;
        border-right: 3px solid #bebebe;
        border-bottom: 3px solid #bebebe;
        transform: rotate(315deg) translateZ(1px);
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
		transform: translateX(0);
	}

	10% {
		transform: translateX(3px);
	}

	20% {
		transform: translateX(6px);
	}

	30% {
		transform: translateX(9px);
	}

	40% {
		transform: translateX(12px);
	}

	50% {
		transform: translateX(15px);
	}

	60% {
		transform: translateX(18px);
	}

	70% {
		transform: translateX(21px);
	}

	80% {
		transform: translateX(24px);
	}

	90% {
		transform: translateX(27px);
	}

	100% {
		transform: translateX(30px);
	}
}


`;
