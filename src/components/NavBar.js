// {useState} is a special tool from React that helps you keep track of information (state) in your component.
//  Think of state as a piece of data that can change over time, like the score in a game or whether a light is on or off.
// for using the const activelink and set Activelink
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

//no parameter
export const NavBar = () => {
  //setActiveLink and seScrolled are function
  const [activeLink, setActiveLink] = useState("home");
  // when user scroll it will chg the background color
  const [scrolled, setScrolled] = useState(false);

  //create function what happen when scroll
  useEffect(() => {
    const onScroll = () => {
      //height had been scroll
      if (window.scrollY > 50) {
        setScrolled(true);
      }
      //if user scroll back or haven't scroll 50 px yet
      else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  //settheActiveLink
  const onUpdateActivelink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        {/* a logo that click to home */}
        {/* <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        {/* three nav link and three linking contact*/}
        <Navbar.Collapse id="basic-navbar-nav">
          {/* Home, skills, project */}
          <Nav className="me-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivelink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivelink("skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActivelink("projects")}
            >
              Projects
            </Nav.Link>
          </Nav>

          {/* we have three links facebook, instagram and email */}
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/yi-yun-khor-169b6a291/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn Icon" />
              </a>
              {/* <a href="#">
                <img src={navIcon2} alt="" />
              </a> */}
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd" onClick={() => console.log("connect")}>
              <span>Let's get Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
