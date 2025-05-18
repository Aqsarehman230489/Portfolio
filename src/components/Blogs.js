import React from "react";
import Particle from "../components/Particle";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { FaMedium, FaDev, FaArrowRight } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import "./blog.css";

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
  title: "From JS to C# : Exploring Full-Stack Web Dev with Blazor and .NET",
  description:
    "Why I chose Blazor and .NET over JavaScript frameworks and what I'm learning from it.",
  platform: "Hashnode",
  link: "https://aqsarehman.hashnode.dev/from-js-to-c-exploring-full-stack-web-dev-with-blazor-and-net",
  date: "May 2025",
    },
    {
       id: 2,
  title: "Getting Started with Jenkins: A Beginner's Guide to Continuous Integration",
  description:
    "Step-by-step guide to setting up Jenkins, creating your first job, and understanding the basics of CI/CD for beginners.",
  platform: "Medium",
  link: "https://medium.com/@aqsarehman373/getting-started-with-jenkins-a-beginners-guide-to-continuous-integration-25d4d02beaee",
  date: "May 2025",
    },
  ];

  const getPlatformIcon = (platform) => {
    switch (platform.toLowerCase()) {
      case "hashnode":
      return <SiHashnode color="#2962FF" />;
      case "medium":
        return <FaMedium color="#000000" />;
      default:
        return null;
    }
  };

  return (
    <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", zIndex: 0 }}>
        <Particle />
      </div>
      <Container style={{ position: "relative", zIndex: 1, paddingTop: "80px" }}>
        <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" ,color: "#f0eaff"}}>
            My Blog Posts
            </h1>
        <Row>
          {blogPosts.map((post) => (
            <Col md={6} lg={4} key={post.id} className="mb-4">
              <Card className="fancy-card h-100 shadow-lg">
                <Card.Body>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <div className="d-flex align-items-center gap-2">
                      {getPlatformIcon(post.platform)}
                      <strong>{post.platform}</strong>
                    </div>
                    <small className="text-muted">{post.date}</small>
                  </div>
                  <Card.Title  className="card-title-light">{post.title}</Card.Title>
                  <Card.Text>{post.description}</Card.Text>
                  <Button
  className="glow-button"
  href={post.link}
  target="_blank"
  rel="noopener noreferrer"
>
  Read More <FaArrowRight className="ms-2" />
</Button>

                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
