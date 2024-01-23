import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./Home.css";
import hame_image from "../../Assets/undraw_Collaborating_re_l43g-removebg-preview.png";
import SelectUs from "../About/SelectUs";
import Our from "../Our Seo/Our";
const Home = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content header_main">
              <h1>Get best of SEO services and increase your sales</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                quos laborum modi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Quam quos laborum modi.
              </p>
              <Button className="btn button">Get Free SEO Audit</Button>
            </div>
          </Col>
          <Col lg="6">
            <div className=" image_main mt-5">
              <img
                src={hame_image}
                alt="image"
                width="80%"
                style={{ margin: "0 24px" }}
              />
            </div>
          </Col>
        </Row>
      </Container>

      <SelectUs />
      <Our/>
    </section>
  );
};

export default Home;
