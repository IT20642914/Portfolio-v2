import styled from "styled-components";

export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-size: 3rem;
    color: var(--green);
    margin-bottom: 3rem;
    text-align: center;
  }

  .timeline-container {
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
  }

  .custom-date {
    color: var(--green);
    font-size: 1.6rem !important;
  }

  .vertical-timeline-element-title {
    font-size: 1.8rem;
    font-weight: bold;
  }

  .vertical-timeline-element-subtitle {
    font-size: 1.5rem;
    font-weight: 600;
    color: var(--lightGray);
  }

  ul {
    list-style-type: disc; /* Ensure bullet points */
    margin-left: 2rem;
    margin-top: 1rem;
    padding-left: 2rem; /* Added padding for better spacing */
    color: var(--green);

    li {
      color: var(--green);
      font-size: 1.4rem;
      margin-bottom: 0.5rem;
      color: #fff;
    }
  }

  .timeline-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  .timeline-image {
    width: 60%;
    height: 60%;
    object-fit: contain;
  }

  /* Adjust the vertical timeline element for small screens */
  .vertical-timeline-element {
    margin-bottom: 2rem; /* Add spacing between timeline elements */
    /* Glass card look */
    .vertical-timeline-element-content {
      background: rgba(43, 43, 43, 0.6) !important;
      border: 1px solid rgba(255, 255, 255, 0.06) !important;
      border-radius: 1.2rem !important;
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35) !important;
      transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;
    }

    .vertical-timeline-element-content:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5) !important;
      border-color: var(--pink) !important;
    }

    .vertical-timeline-element-content-arrow {
      border-right: 8px solid rgba(255, 255, 255, 0.12) !important;
    }
  }

  /* Light mode variants */
  .light & {
    .vertical-timeline-element {
      .vertical-timeline-element-content {
        background: rgba(255, 255, 255, 0.7) !important;
        border: 1px solid rgba(0, 0, 0, 0.06) !important;
        color: var(--black) !important;

        p,
        span,
        li {
          color: var(--black) !important;
        }
      }

      .vertical-timeline-element-content-arrow {
        border-right: 8px solid rgba(0, 0, 0, 0.12) !important;
      }
    }
  }

  @media (max-width: 768px) {
    .timeline-container {
      max-width: 100%;
      padding: 0 1rem;
    }

    ul {
      margin-left: 1rem;
    }
  }
`;
