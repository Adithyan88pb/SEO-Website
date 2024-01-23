import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import our_image from "../../Assets/undraw_Winners_re_wr1l-removebg-preview.png";
import our_image2 from "../../Assets/undraw_Message_sent_re_q2kl-removebg-preview.png";

const Our = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className=" image_main mt-5">
              <img
                src={our_image}
                alt="image"
                width="80%"
                style={{ margin: "0 24px" }}
              />
            </div>
          </Col>
          <Col lg="6">
            <div className="hero__content header_main">
              <h1>
                Our SEO Proocess for <br />
                business
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                quos laborum modi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quam quos laborum modi. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quam quos laborum mod
              </p>
              <Button
                className="btn button_tow"
                style={{
                  color: "black",
                  backgroundColor: "white",
                  fontSize: "18px",
                  
                }}
              >
                Get Started-Now
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content header_main">
              <h1>
                Our SEO Proocess for <br />
                business
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                quos laborum modi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quam quos laborum modi. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Quam quos laborum mod
              </p>
              <Button
                className="btn button"
                style={{
                  color: "white",
                  backgroundColor: "transparent",
                  fontSize: "18px",
                  border:"1px solid white"
                }}
              >
                Get Started-Now
              </Button>
            </div>
          </Col>
          <Col lg="6">
            <div className=" image_main mt-5">
              <img
                src={our_image2}
                alt="image"
                width="80%"
                style={{ margin: "0 24px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Our;
