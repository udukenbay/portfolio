import React, { useRef, useState } from "react";
import { Nav, Menu, MenuLink, Image, MobileIcon } from './Navbar.style';
import logo from '../../image/logo.png';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
    const descriptionRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false)

    return(
        <>
            <Nav>
                <Link to="/">
                    <Image src={logo} alt="logo" width="120" />
                </Link>
                <MobileIcon onClick={() => setIsOpen(!isOpen)}>
                    <FaBars />
                </MobileIcon>
                <Menu disableisOpen={isOpen} ref={descriptionRef}>
                    <MenuLink> <Link to="/">Home</Link> </MenuLink>
                    
                    <MenuLink> <Link to="/resume">Resume</Link> </MenuLink>

                    <MenuLink> <Link to="/skills">Skills</Link> </MenuLink>

                    <MenuLink> <Link to="/projects">Projects</Link> </MenuLink>

                    <MenuLink> <Link to="/contact">Contact</Link> </MenuLink>
                </Menu>
            </Nav>
        </>
    )
}

export default Navbar;