import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
const Footer = () => {
  return (
    <Container>
      <div
        className="line"
        style={{ width: "100%", height: "1px", backgroundColor: "white" }}
      ></div>
      <Row className="pt-5">
        <Col lg="3">
          <div>
            <ul>
              <li>
                <a href="">
                 
                  <IoIosArrowForward />
                  Home
                </a>
              </li>
              <li>
                <a href="">
                 
                  <IoIosArrowForward /> About Us
                </a>
              </li>
              <li>
                <a href="">
                  <IoIosArrowForward /> Software Solution
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg="3">
          <div>
            <ul>
              <li>
                <a href="">
                  <IoIosArrowForward /> Careers
                </a>
              </li>
              <li>
                <a href="">
                  <IoIosArrowForward /> Clients
                </a>
              </li>
              <li>
                <a href="">
                  <IoIosArrowForward /> Reviews
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg="3">
          <div>
            <ul>
              <li>
                <a href="">
                  <IoIosArrowForward /> Services
                </a>
              </li>
              <li>
                <a href="">
                  <IoIosArrowForward /> Locations
                </a>
              </li>
              <li>
                <a href="">
                  <IoIosArrowForward /> Tools
                </a>
              </li>
            </ul>
          </div>
        </Col>
        <Col lg="3">
          <div>
            <ul>
              <li>
                <a href="">
                  <FaFacebookF /> Facebook
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter /> Twitter
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
