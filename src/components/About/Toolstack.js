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
      {/* Visual Studio Code */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://code.visualstudio.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Visual Studio Code"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <SiVisualstudiocode />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>
            Visual Studio Code
          </div>
        </a>
      </Col>

      {/* Visual Studio */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://visualstudio.microsoft.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Visual Studio"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <SiVisualstudio />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>
            Visual Studio
          </div>
        </a>
      </Col>

      {/* Postman */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://www.postman.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Postman"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <SiPostman />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>
            Postman
          </div>
        </a>
      </Col>

      {/* Figma */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://www.figma.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Figma"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          <SiFigma />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>
            Figma
          </div>
        </a>
      </Col>
    </Row>
  );
}

export default Toolstack;
