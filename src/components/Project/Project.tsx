import { useState } from "react";
import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import LiveIcon from "../../assets/live-svgrepo-com.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { projects } from "../../constants/index";

export function Project() {
  // Initialize a state to track the current image index for each project
  const [currentImageIndex, setCurrentImageIndex] = useState(
    projects.map(() => 0) // Create an array of 0s, one for each project
  );

  // State to handle full-screen image modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [modalProjectIndex, setModalProjectIndex] = useState(0);

  // Function to handle next image for project cards
  const handleNextImage = (index: number) => {
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === index ? (imgIndex + 1) % projects[index].images.length : imgIndex
      )
    );
  };

  // Function to handle previous image for project cards
  const handlePrevImage = (index: number) => {
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === index
          ? (imgIndex - 1 + projects[index].images.length) %
            projects[index].images.length
          : imgIndex
      )
    );
  };

  // Function to open modal
  const handleOpenModal = (image: string, index: number) => {
    setModalImage(image);
    setModalProjectIndex(index);
    setIsModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalImage("");
  };

  // Function to handle next image in modal
  const handleNextImageModal = () => {
    const nextIndex = (currentImageIndex[modalProjectIndex] + 1) % projects[modalProjectIndex].images.length;
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === modalProjectIndex ? nextIndex : imgIndex
      )
    );
    setModalImage(projects[modalProjectIndex].images[nextIndex]);
  };

  // Function to handle previous image in modal
  const handlePrevImageModal = () => {
    const prevIndex =
      (currentImageIndex[modalProjectIndex] - 1 + projects[modalProjectIndex].images.length) %
      projects[modalProjectIndex].images.length;
    setCurrentImageIndex((prev) =>
      prev.map((imgIndex, i) =>
        i === modalProjectIndex ? prevIndex : imgIndex
      )
    );
    setModalImage(projects[modalProjectIndex].images[prevIndex]);
  };

  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ScrollAnimation
            animateIn="fadeInUp"
            animateOnce={true}
            key={index}
            className="project"
          >
            <header>
              <div style={{display:"-ms-grid"}}>
              <h3 className="Project-title">{project.title}</h3>
              <p className="Project-category">{project.Category}</p>
              </div>
              <div className="project-links">
                {project.githubLink && (
                  <a href={project.githubLink} target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="GitHub" />
                  </a>
                )}
                 {project.liveLink && (
                  <a href={project.liveLink} target="_blank" rel="noreferrer">
                    <img src={LiveIcon} alt="LiveIcon" />
                  </a>
                )}
              </div>
              
            </header>

            <div className="image-container">
              <img
                src={project.images[currentImageIndex[index]]}
                alt={project.title}
              />
              <div className="image-controls">
                <button onClick={() => handlePrevImage(index)}>Prev</button>
                <button
                className="view-button"
                onClick={() =>
                  handleOpenModal(project.images[currentImageIndex[index]], index)
                }
              >
                View
              </button>
                <button onClick={() => handleNextImage(index)}>Next</button>
              </div>
             
            </div>

            <p>{project.description}</p>

            <footer>
              <ul className="tech-list">
                {project.tags?.map((tag, i) => (
                  <li key={i}>{tag}</li>
                ))}
              </ul>
            </footer>
          </ScrollAnimation>
        ))}
      </div>

      {/* Full-screen modal for viewing images */}
      {isModalOpen && (
        <div className="modal" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <span className="close-button" onClick={handleCloseModal}>
              &times;
            </span>
            <img src={modalImage} alt="Full view" />
            <div className="image-controls">
              <button className="view-button" onClick={handlePrevImageModal}>Prev</button>
              <button className="view-button" onClick={handleNextImageModal}>Next</button>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
}
