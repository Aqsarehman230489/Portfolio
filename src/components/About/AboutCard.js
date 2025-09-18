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
           I am currently pursuing a Bachelor of Science in Computer Science (BSCS) degree from Air University, Islamabad Campus.
            <br />
            I’m passionate about <strong> cloud computing, and DevOps</strong>.
            <br />
            <br />
            
          </p>
         
          <p style={{ color: "rgb(155 126 172)" }}>
            "Passionate about making software delivery faster, smoother, and more reliable by leveraging modern DevOps workflows and AI-powered tools."{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
