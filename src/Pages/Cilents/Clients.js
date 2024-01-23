import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const Clients = () => {
  return (
    <Container>
      <Row>
        <Col lg="12" className="pb-5">
          <div className="main-h1">
            <h1 className="text-center mt-5 ">Hear From Cilents</h1>
          </div>
          <div className="main-p">
            <p className="text-center p-1 ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              <br /> Porro, cupiditate.Lorem ipsum dolor <br />
            </p>
          </div>
        </Col>

        <Row className="pb-5">
          <Col lg="6" style={{ borderRight: "1px solid white" }}>
            <div style={{ color: "white" }} className="text-center">
              <h4>BAldwin-Baldie</h4>
              <p>
                Lorem ipsum dolor sit amet, adipisicing <br />
                Fugiat, iusto? Lorem ipsum <br />
                adipisicing elit.
              </p>
            </div>
          </Col>

          <Col lg="6">
            <div style={{ color: "white" }} className="text-center">
              <h4>BAldwin-Baldie</h4>
              <p>
                Lorem ipsum dolor sit amet, adipisicing <br />
                Fugiat, iusto? Lorem ipsum <br />
                adipisicing elit.
              </p>
            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  );
};

export default Clients;
