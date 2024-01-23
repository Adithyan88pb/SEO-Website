import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import logo_imagee from '../../Assets/Screenshot_2023-12-30_202007-removebg-preview.png'
import "./Header.css";

const Header = () => {
  return (
    <Navbar expand="lg" className=" main-Container">
      <Container>
        <Navbar className="logo-main">
          <img src={logo_imagee} style={{width:"90px"}} alt="" />
        </Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{backgroundColor:"white",color:"#21202e"}} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto main-li" style={{paddingTop:"10px"}}>
            <ul>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">Resources</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
