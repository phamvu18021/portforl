
import { Navbar, Nav, Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import logo from '../../assets/img/logo.svg';
import './navbar.scss'
// import navIcon1 from '../assets/img/nav-icon1.svg';
// import navIcon2 from '../assets/img/nav-icon2.svg';
// import navIcon3 from '../assets/img/nav-icon3.svg';
import { Navigate } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import React, { useRef, useEffect, useState } from 'react'

import { NavLink, Link } from 'react-router-dom'

const nav__links = [
    {
        display: 'Home',
        path: '#home'
    },
    {
        display: 'About',
        path: '#about'
    },
    {
        display: 'Project',
        path: '#projects'
    },
    {
        display: 'Contact',
        path: '#contact'
    },

];
const NavBar = () => {

    const menuRef = useRef(null)
    const headerRef = useRef(null);


    const toggleMenu = () => menuRef.current.classList.toggle('show__menu')



    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (
                document.body.scrollTop > 150 || document.documentElement.scrollTop > 150) {
                headerRef.current.classList.add('header__shrink')
            } else {
                headerRef.current.classList.remove('header__shrink')
            }
        });

        return () => window.removeEventListener("scroll", null);
    }, [])


    return (

        <Router>
            <Routes>
                <Route path='/' element={<Navigate to='/#home' />} />

            </Routes>

            <header className='header' ref={headerRef}>
                <Container>
                    <div className="nav__wrapper d-flex align-items-center
    justify-content-between">

                        {/* ============== menu =========*/}

                        <div className='navigation' ref={menuRef}>
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="menu">
                                    <div className="web_name">
                                        <Nav.Link
                                            href="#home"
                                        >
                                            <h3>PTVu.dev</h3>
                                        </Nav.Link>
                                    </div>


                                    <div className="bar_right">
                                        {nav__links.map((item, index) => (
                                            <Nav.Link
                                                href={item.path}
                                                onClick={toggleMenu}
                                                key={index}
                                                className={navClass => navClass.isActive ? 'active__menu' : ""}
                                            >
                                                {item.display}
                                            </Nav.Link>
                                        ))}
                                    </div>


                                </Nav>
                            </Navbar.Collapse>
                        </div>

                        { /*  === nav right icons */}
                        <div className="nav__right  d-flex align-items-center gap-4 ">

                            <span className="mobile__menu" onClick={toggleMenu}>
                                <i class="ri-menu-line"></i>
                            </span>
                        </div>

                    </div>
                </Container>
            </header>
        </Router>

    );


}

export default NavBar

