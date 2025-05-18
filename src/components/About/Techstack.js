import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
} from "react-icons/di";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJsSquare,FaLinux,} from "react-icons/fa";
import { SiCsharp, SiDotnet, SiJquery,SiJira,SiJenkins} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://isocpp.org/" target="_blank" rel="noopener noreferrer" title="C++" style={{ color: "inherit" }}>
    <CgCPlusPlus />
  </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.python.org/" target="_blank" rel="noopener noreferrer" title="Python" style={{ color: "inherit" }}>
       <DiPython />
       </a>
     </Col>
      <Col xs={4} md={2} className="tech-icons">
       <a href="https://learn.microsoft.com/en-us/dotnet/csharp/" target="_blank" rel="noopener noreferrer" title="C#" style={{ color: "inherit" }}>
        <SiCsharp />
       </a>
     </Col>
     
      <Col xs={4} md={2} className="tech-icons">
      <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer" title=".NET" style={{ color: "inherit" }}>
      <SiDotnet />
      </a>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
  <a
    href="https://git-scm.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="Git"
    style={{ color: "inherit" }}
  >
    <DiGit />
  </a>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://react.dev/"
    target="_blank"
    rel="noopener noreferrer"
    title="React"
    style={{ color: "inherit" }}
  >
    <DiReact />
  </a>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://www.mongodb.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="MongoDB"
    style={{ color: "inherit" }}
  >
    <DiMongodb />
  </a>
</Col>
<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://www.jenkins.io/"
    target="_blank"
    rel="noopener noreferrer"
    title="Jenkins"
    style={{ color: "inherit" }}
  >
    <SiJenkins />
  </a>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/HTML"
    target="_blank"
    rel="noopener noreferrer"
    title="HTML5"
    style={{ color: "inherit" }}
  >
    <FaHtml5 />
  </a>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/CSS"
    target="_blank"
    rel="noopener noreferrer"
    title="CSS3"
    style={{ color: "inherit" }}
  >
    <FaCss3Alt />
  </a>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://getbootstrap.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="Bootstrap"
    style={{ color: "inherit" }}
  >
    <FaBootstrap />
  </a>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
    target="_blank"
    rel="noopener noreferrer"
    title="JavaScript"
    style={{ color: "inherit" }}
  >
    <FaJsSquare />
  </a>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://jquery.com/"
    target="_blank"
    rel="noopener noreferrer"
    title="jQuery"
    style={{ color: "inherit" }}
  >
    <SiJquery />
  </a>
</Col>

<Col xs={4} md={2} className="tech-icons">
  <a
    href="https://learn.microsoft.com/en-us/windows/wsl/"
    target="_blank"
    rel="noopener noreferrer"
    title="WSL"
    style={{ color: "inherit" }}
  >
    <FaLinux />
  </a>
</Col>

      <Col xs={4} md={2} className="tech-icons">
      <a href="https://www.atlassian.com/software/jira" target="_blank" rel="noopener noreferrer" title="Jira" style={{ color: "inherit" }}>
       <SiJira />
      </a>
      </Col>
    </Row>
  );
}

export default Techstack;
