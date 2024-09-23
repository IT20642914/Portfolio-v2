import { useState } from "react";
import { Container } from "./styles";
import ScrollAnimation from 'react-animate-on-scroll'; // Import Scroll Animation
import NodeJsCertificate from '../../assets/Certificates/nodeJs.png';
import ReactCertificate from '../../assets/Certificates/react.png';
import JavaCertificate from '../../assets/Certificates/java.png';
import SQLCertificate from '../../assets/Certificates/sql.png';

// Define the structure of a certificate
interface Certificate {
  name: string;
  issuer: string;
  date: string;
  description: string;
  link: string;
  image: string; // A single image instead of an array
}

export function Certifications() {
  // Example certifications data
  const certifications: Certificate[] = [
    {
      name: "NodeJS - The Complete Guide",
      issuer: "Udemy",
      date: "2024-AUG-8",
      description: "Covers Node.js, REST APIs, GraphQL, Deno, and more.",
      link: "https://www.udemy.com/certificate/UC-2146b142-ff11-4589-8566-86b8d918623d/",
      image: NodeJsCertificate,
    },
    {
      name: "Frontend Developer (React)",
      issuer: "HackerRank",
      date: "2023-NOV-30",
      description: "It covers topics like React, CSS, and JavaScript.",
      link: "https://www.hackerrank.com/certificates/9c19847bd7dd",
      image: ReactCertificate,
    },
    {
      name: "Java (Basic)",
      issuer: "HackerRank",
      date: "2023-NOV-30",
      description: "It covers basic topics in Java language such as data structures, inheritance, exception handling.",
      link: "https://www.hackerrank.com/certificates/2c4c1c7186a2",
      image: JavaCertificate,
    },
    {
      name: "SQL (Basic)",
      issuer: "HackerRank",
      date: "2023-NOV-30",
      description: "It includes simple queries, relationships, and aggregators.",
      link: "https://www.hackerrank.com/certificates/ef57da8b0bc8",
      image: SQLCertificate,
    },
  ];

  // State to handle modal for viewing certification details, typed as Certificate | null
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalCert, setModalCert] = useState<Certificate | null>(null);

  // Function to open modal
  const handleOpenModal = (cert: Certificate) => {
    setModalCert(cert);
    setIsModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalCert(null);
  };

  return (
    <Container id="certifications">
      <h2>Certifications</h2>
      <div className="certifications">
        {certifications.map((cert, index) => (
          <ScrollAnimation key={index} animateIn="fadeInUp" duration={1} animateOnce={true}>
            <div className="certification">
              <header>
                <h3 className="cert-name">{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-date">{cert.date}</p>
              </header>

              <div className="cert-description">
                <p>{cert.description}</p>
                <img src={cert.image} alt={cert.name} className="cert-image" />
              </div>

              <div className="cert-controls">
                <button
                  className="view-button"
                  onClick={() => handleOpenModal(cert)}
                >
                  View Certificate
                </button>
              </div>
            </div>
          </ScrollAnimation>
        ))}
      </div>

      {/* Full-screen modal for viewing certification */}
      {isModalOpen && modalCert && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <h3>{modalCert.name}</h3>
            <p>Issued by: {modalCert.issuer}</p>
            <p>Date: {modalCert.date}</p>
            <p>{modalCert.description}</p>
            <img src={modalCert.image} alt={modalCert.name} className="modal-cert-image" />
            <a href={modalCert.link} target="_blank" rel="noreferrer" className="cert-link">
              View Certificate 
            </a>
          </div>
        </div>
      )}
    </Container>
  );
}
