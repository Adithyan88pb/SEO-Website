import React from "react";
import { Container, Row, Col, Card, CardGroup } from "react-bootstrap";
import "./SelectUs.css";
import select_img from "../../Assets/undraw_Finance_re_gnv2-removebg-preview.png";
const SelectUs = () => {
  return (
    <section className="main-section">
      <Container>
        <Row>
          <Col lg="12">
            <div className="main-h1">
              <h1 className="text-center mt-5 ">Why Select Us?</h1>
            </div>
            <div className="main-p">
              <p className="text-center p-1 ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                <br /> Porro, cupiditate.Lorem ipsum dolor <br />
                sit amet consectetur,
              </p>
            </div>
          </Col>
        </Row>
        <Row className="row justify-content-center align-items-center">
          <Col sm="4">
            <div className="card main-card" style={{ width: "18rem" }}>
              <div className="text-center">
                <img
                  src={select_img}
                  className="card-img-top card_image"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>
                <div>-------------------------------</div>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Col>
          <Col sm="4">
            <div className="card main-card " style={{ width: "18rem" }}>
              <div className="text-center">
                <img
                  src={select_img}
                  className="card-img-top card_image"
                  alt=""
                />
              </div>
              <div className="card-body">
                <h5 className="card-title text-center">Card title</h5>

                <div>-------------------------------</div>
                <p className="card-text text-center">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default SelectUs;
