import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Aqsa Rehman </span>
            from <span className="purple"> Islamabad, Pakistan</span>
            <br />
            I am currently pursuing an Associate Degree in Computer Science from Air University Islamabad Campus.
            <br />
            I’m passionate about <strong>web development, cloud computing, and DevOps</strong>.
            <br />
            <br />
            Apart from coding, here are a few activities I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Painting
            </li>
            <li className="about-activity">
              <ImPointRight /> Digital Designing
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Driven by curiosity, I build, learn, and share to inspire growth and make an impact."{" "}
          </p>
          <footer className="blockquote-footer">Aqsa</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
