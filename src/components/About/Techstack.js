import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiReact,
  DiMongodb,
  DiPython,
  DiGit,
  DiDocker,
  DiNginx,
} from "react-icons/di";
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJsSquare,
  FaLinux,
  FaAws,
} from "react-icons/fa";
import {
  SiCsharp,
  SiDotnet,
  SiJquery,
  SiJira,
  SiJenkins,
  SiPm2,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* C++ */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://isocpp.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="C++"
          style={{ color: "inherit" }}
        >
          <CgCPlusPlus />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>C++</div>
        </a>
      </Col>

      {/* Python */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://www.python.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="Python"
          style={{ color: "inherit" }}
        >
          <DiPython />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>Python</div>
        </a>
      </Col>

      {/* C# */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://learn.microsoft.com/en-us/dotnet/csharp/"
          target="_blank"
          rel="noopener noreferrer"
          title="C#"
          style={{ color: "inherit" }}
        >
          <SiCsharp />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>C#</div>
        </a>
      </Col>

      {/* .NET */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://dotnet.microsoft.com/"
          target="_blank"
          rel="noopener noreferrer"
          title=".NET"
          style={{ color: "inherit" }}
        >
          <SiDotnet />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>.NET</div>
        </a>
      </Col>

      {/* Git */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://git-scm.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Git"
          style={{ color: "inherit" }}
        >
          <DiGit />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>Git</div>
        </a>
      </Col>

      {/* React */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://react.dev/"
          target="_blank"
          rel="noopener noreferrer"
          title="React"
          style={{ color: "inherit" }}
        >
          <DiReact />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>React</div>
        </a>
      </Col>

      {/* MongoDB */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://www.mongodb.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="MongoDB"
          style={{ color: "inherit" }}
        >
          <DiMongodb />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>MongoDB</div>
        </a>
      </Col>

      {/* Jenkins */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://www.jenkins.io/"
          target="_blank"
          rel="noopener noreferrer"
          title="Jenkins"
          style={{ color: "inherit" }}
        >
          <SiJenkins />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>Jenkins</div>
        </a>
      </Col>

      {/* HTML */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/HTML"
          target="_blank"
          rel="noopener noreferrer"
          title="HTML5"
          style={{ color: "inherit" }}
        >
          <FaHtml5 />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>HTML5</div>
        </a>
      </Col>

      {/* CSS */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS"
          target="_blank"
          rel="noopener noreferrer"
          title="CSS3"
          style={{ color: "inherit" }}
        >
          <FaCss3Alt />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>CSS3</div>
        </a>
      </Col>

      {/* Bootstrap */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://getbootstrap.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Bootstrap"
          style={{ color: "inherit" }}
        >
          <FaBootstrap />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>Bootstrap</div>
        </a>
      </Col>

      {/* JavaScript */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
          target="_blank"
          rel="noopener noreferrer"
          title="JavaScript"
          style={{ color: "inherit" }}
        >
          <FaJsSquare />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>JavaScript</div>
        </a>
      </Col>

      {/* jQuery */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://jquery.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="jQuery"
          style={{ color: "inherit" }}
        >
          <SiJquery />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>jQuery</div>
        </a>
      </Col>

      {/* Linux/WSL */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://learn.microsoft.com/en-us/windows/wsl/"
          target="_blank"
          rel="noopener noreferrer"
          title="Linux"
          style={{ color: "inherit" }}
        >
          <FaLinux />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>Linux</div>
        </a>
      </Col>

      {/* Jira */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://www.atlassian.com/software/jira"
          target="_blank"
          rel="noopener noreferrer"
          title="Jira"
          style={{ color: "inherit" }}
        >
          <SiJira />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>Jira</div>
        </a>
      </Col>

      {/* 🔥 New: Docker */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://www.docker.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="Docker"
          style={{ color: "inherit" }}
        >
          <DiDocker />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>Docker</div>
        </a>
      </Col>

      {/* 🔥 New: AWS */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://aws.amazon.com/"
          target="_blank"
          rel="noopener noreferrer"
          title="AWS"
          style={{ color: "inherit" }}
        >
          <FaAws />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>AWS</div>
        </a>
      </Col>

      {/* 🔥 New: Nginx */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://nginx.org/"
          target="_blank"
          rel="noopener noreferrer"
          title="Nginx"
          style={{ color: "inherit" }}
        >
          <DiNginx />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>Nginx</div>
        </a>
      </Col>

      {/* 🔥 New: PM2 */}
      <Col xs={4} md={2} className="tech-icons text-center">
        <a
          href="https://pm2.keymetrics.io/"
          target="_blank"
          rel="noopener noreferrer"
          title="PM2"
          style={{ color: "inherit" }}
        >
          <SiPm2 />
          <div style={{ fontSize: "0.8rem", marginTop: "5px", color: "#ccc" }}>PM2</div>
        </a>
      </Col>
    </Row>
  );
}

export default Techstack;
