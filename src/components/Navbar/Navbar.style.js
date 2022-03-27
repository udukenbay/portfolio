import styled from 'styled-components';

export const Nav = styled.div`
    p {
        color: #fff;
    }

    background: #2F2F2F;
    color: #fff;
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10000;

    @media (max-width: 768px) {
        transition: 0.8s all ease;
    }
`;

export const Image = styled.img`
  margin-top: 10px;
`;

export const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    transition: max-height 0.3s ease-in;
  }
`;

export const MenuLink = styled.div`
  font-size: 14px;
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  transition: all 0.3s ease-in;

  a {
    text-decoration: none;
    color: #fff;

    &:hover {
      color: #00D9DB;
    }

    &.active {
      border-bottom: 3px solid #01bf71;
      color: #00D9DB;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;