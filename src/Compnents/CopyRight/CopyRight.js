import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

const CopyRight = () => {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <div className="text-center pt-3" style={{ color: "white" }}>
            <p>
              <span className="pe-1"> {new Date().getFullYear()}</span> All Rights
              reserved,Designed By Adithyan
            </p>
          </div>   
        </Col>
      </Row>
    </Container>
  );
};

export default CopyRight;
