import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiFigma,
  SiVisualstudio,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons">
  <a
    href="https://code.visualstudio.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="Visual Studio Code"
    style={{ color: "inherit" }}
  >
    <SiVisualstudiocode />
  </a>
</Col>
<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://visualstudio.microsoft.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="Visual Studio"
    style={{ color: "inherit" }}
  >
    <SiVisualstudio />
  </a>
</Col>
<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://www.postman.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="Postman"
    style={{ color: "inherit" }}
  >
    <SiPostman />
  </a>
</Col>
<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://www.figma.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="Figma"
    style={{ color: "inherit" }}
  >
    <SiFigma />
  </a>
</Col>

      
    </Row>
  );
}

export default Toolstack;
