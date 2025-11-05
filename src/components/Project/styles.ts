import styled from "styled-components";
export const Container = styled.section`
  margin-top: 15rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    margin-bottom: 3rem;
    color: var(--green);
  }

  .projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    padding: 1rem;
    overflow: hidden;

    .project {
      padding: 2rem 1.8rem;
      min-width: 300px;
      background: rgba(43, 43, 43, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.06);
      border-radius: 1.2rem;
      transition: 0.25s;
      display: flex;
      flex-direction: column;
      height: 100%;
      color: #fff;
      backdrop-filter: blur(8px);
      box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);

      &:hover {
        transform: translateY(-6px);
        box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5);
        border-color: var(--pink);
      }

      header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: var(--blue);
        margin-bottom: 3.6rem;

        .project-links {
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        a > img {
          width: 5rem;
        }
      }

      h3 {
        margin-bottom: 0.5rem;
      }

      .Project-title {
        font-size: 2.5rem;
        color: var(--green);
        width: 100%;
      }

      .Project-category {
        width: 100%;
        font-size: 2rem;
        color: var(--blue);
        margin-bottom: 2rem;
      }

      p {
        letter-spacing: 0.12rem;
        margin-bottom: 2rem;
        margin-top: 1.5rem;

        a {
          color: #fff;
          border-bottom: 1px solid var(--green);
          transition: color 0.25s;

          &:hover {
            color: var(--green);
          }
        }
      }

      footer {
        margin-top: auto;

        .tech-list {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          font-size: 1.4rem;
          opacity: 0.6;
          overflow-x: auto;
        }
      }
    }
  }

  @media (max-width: 960px) {
    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
      padding: 0.5rem;
    }
  }

  @media (max-width: 740px) {
    .projects {
      grid-template-columns: 1fr;
      gap: 1rem;
    }

    .project {
      padding: 1.5rem 1.2rem;

      .Project-title {
        font-size: 2rem;
      }

      .Project-category {
        font-size: 1.6rem;
      }

      p {
        font-size: 1.4rem;
      }

      footer {
        .tech-list {
          font-size: 1.2rem;
        }
      }
    }
  }

  .image-container {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;

    img {
      width: 100%;
      height: auto;
      border-radius: 0.8rem;
      object-fit: cover;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.03);
    }

    /* gradient overlay */
    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 45%;
      border-radius: 0.8rem;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.55) 100%
      );
      pointer-events: none;
    }

    .category-pill {
      position: absolute;
      left: 0.8rem;
      top: 0.8rem;
      padding: 0.2rem 0.8rem;
      border-radius: 999px;
      background: rgba(0, 0, 0, 0.6);
      border: 1px solid rgba(255, 255, 255, 0.2);
      color: #fff;
      font-size: 1.2rem;
      backdrop-filter: blur(6px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
    }

    .image-controls {
      position: absolute;
      left: 50%;
      bottom: 0.8rem;
      transform: translateX(-50%);
      display: flex;
      align-items: center;
      gap: 1.2rem;
      background: rgba(0, 0, 0, 0.35);
      border: 1px solid rgba(255, 255, 255, 0.1);
      border-radius: 999px;
      padding: 0.6rem 1rem;
      backdrop-filter: blur(6px);

      button {
        background-color: transparent;
        color: #fff;
        padding: 0.5rem 1.2rem;
        border: none;
        border-radius: 0.5rem;
        cursor: pointer;
        transition: color 0.25s;
        min-width: 64px;
      }

      .view-button {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }

      button:hover {
        color: #fff;
      }
    }

    .view-button {
      margin-top: 1rem;
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

  /* Full-screen modal */
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
      position: relative;
      background-color: rgba(0, 0, 0, 0.8);
      border-radius: 0.5rem;
      max-width: 60%;
      text-align: center;

      img {
        max-width: 100%;
        height: auto;
      }

      .close-button {
        color: var(--pink);
        position: absolute;
        top: 1rem;
        right: 1rem;
        font-size: 4rem;
        cursor: pointer;
      }

      .image-controls {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin-top: 1rem;

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
  }
  .show-all-container {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }

  .show-all-container button {
    background: transparent;
    color: #fff;
    padding: 0.75rem 5.5rem;
    font-size: 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 0.5rem;
    cursor: pointer;
    transition: color 0.3s, border-color 0.3s;
  }

  .show-all-container button:hover {
    color: var(--pink);
    border-color: var(--pink);
  }
`;
