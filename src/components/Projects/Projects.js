import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import celestial_cuisine from "../../Assets/Projects/celestial_cuisine.png";
import dap from "../../Assets/Projects/dap.png";
import Dastkari from "../../Assets/Projects/Dastkari-landing-Page.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dap}
              isBlog={false}
              title="Admin Dashboard"
              description="A small admin dashboard, built using Blazor and Entity Framework. This project includes features for user authentication and CRUD operations to manage products efficiently. Designed for learning and showcasing practical implementation of .NET technologies in a real-world artisan marketplace context."
              ghLink="https://github.com/Aqsarehman230489/Blazor-EF-Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Dastkari}
              isBlog={false}
              title="Dastkari Frontend"
              description="Dastkari is a beautifully designed, fully responsive frontend web application built with React.js. It features a modern landing page with smooth scrolling navigation, user-friendly login and registration UI, and dynamic rendering of painting products using mock API data. The design highlights local Pakistani artisans and product showcasing."
              ghLink="https://github.com/Aqsarehman230489/Dastkari-Frontend"
              demoLink="https://aqsarehman230489.github.io/Dastkari-Frontend/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={celestial_cuisine}
              isBlog={false}
              title="Celestial Cusine"
              description="A dynamic and responsive restaurant website developed as a 2nd semester Web Technologies project. It offers users a seamless dining experience with features like an interactive menu, online table reservations, and registration. Built using HTML, CSS, Bootstrap, JavaScript, PHP, and MySQL, the project showcases full-stack development skills and local server setup using XAMPP."
              ghLink="https://github.com/Aqsarehman230489/Restaurant-Website-Project"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;
