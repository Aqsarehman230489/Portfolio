import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import pdf from "../../Assets/../Assets/Aqsa_Rehman_Resume.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const [numPages, setNumPages] = useState(null);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
  variant="primary"
  href={pdf}
  download="Aqsa_Rehman_Resume.pdf"
  style={{ maxWidth: "250px" }}
>
  <AiOutlineDownload />
  &nbsp;Download
</Button>

        </Row>

        <Row className="justify-content-center mt-4">
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex flex-column align-items-center"
          >
            {Array.from(new Array(numPages), (el, index) => (
              <div key={`page_${index + 1}`} className="my-4">
                <Page
                  pageNumber={index + 1}
                  scale={width > 786 ? 1.6 : 0.6}
                />
              </div>
            ))}
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
  variant="primary"
  href={pdf}
  download="Aqsa_Rehman_Resume.pdf"
  style={{ maxWidth: "250px" }}
>
  <AiOutlineDownload />
  &nbsp;Download
</Button>

        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
