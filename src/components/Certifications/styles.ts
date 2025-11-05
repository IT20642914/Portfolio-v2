import styled from "styled-components";
export const Container = styled.section`
  margin-top: 10rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--green);
  }

  .certifications {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }

  .certification {
    padding: 2rem;
    background: rgba(43, 43, 43, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1.2rem;
    color: #fff;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Ensure even distribution of content */
    min-height: 400px; /* Set a minimum height to make all cards uniform */
    max-height: 100%; /* Ensure they don’t exceed the grid layout */
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
    transition: 0.25s;

    /* Responsive sizing */
    height: 100%; /* Allow cards to grow and be consistent */

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5);
      border-color: var(--pink);
    }
    
    .cert-name {
      font-size: 2.5rem;
      color: var(--green);
    }

    .cert-issuer {
      font-size: 1.8rem;
      color: var(--blue);
      margin-bottom: 1.5rem;
    }

    .cert-date {
      font-size: 1.5rem;
      color: var(--blue);
      margin-bottom: 2rem;
    }

    .cert-description {
      font-size: 1.4rem;
      margin-bottom: 2rem;

      .cert-image {
        width: 100%;
        max-width: 250px;
        border-radius: 0.5rem;
        margin-top: 1rem;
        object-fit: contain; /* Ensure the image fits within the card without distortion */
      }
    }

    .cert-controls {
      margin-top: auto; /* Push the button to the bottom */
      
      .view-button {
        background: transparent;
        color: #fff;
        padding: 0.5rem 1rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0.5rem;
        cursor: pointer;
        transition: color 0.25s, border-color 0.25s;

        &:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.8);
        }
      }
    }
  }

  /* Modal styling */
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    .modal-content {
      background-color: rgba(0, 0, 0, 0.8);
      padding: 2rem;
      border-radius: 0.5rem;
      max-width: 600px;
      width: 100%;
      text-align: center;

      .close-button {
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 2rem;
        cursor: pointer;
      }

      .modal-cert-image {
        width: 100%;
        max-width: 500px;
        margin-top: 1rem;
        border-radius: 0.5rem;
      }

      .cert-link {
        margin-top: 2rem;
        display: inline-flex;
        align-items: center;
        color: #fff;
        font-weight: bold;
        text-decoration: none;
        font-size: 1.2rem;
        padding: 0.5rem 1rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 0.5rem;
        transition: color 0.25s, border-color 0.25s;

        &:hover {
          color: #fff;
          border-color: rgba(255, 255, 255, 0.8);
        }

        svg {
          margin-left: 0.5rem;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .certifications {
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
  }

  @media (max-width: 740px) {
    .certifications {
      grid-template-columns: 1fr;
    }
  }
`;
