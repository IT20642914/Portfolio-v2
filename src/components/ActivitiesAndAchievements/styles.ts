import styled from "styled-components";
export const Container = styled.section`
  margin-top: 5rem;

  h2 {
    text-align: center;
    font-size: 3.5rem;
    margin-bottom: 2rem;
    color: var(--green);
  }

  /* List of Achievements */
  .achievement-points {
    list-style: none;
    padding-left: 0;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    li {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;

      width: 100%;
      max-width: 600px;

      .icon {
        flex-shrink: 0;
        margin-right: 0.8rem;
        color: var(--green);
      }

      span {
        flex-grow: 1;
        text-align: left;
      }
    }
  }

  /* Swiper Styles */
  .mySwiper {
    width: 100%;
    padding: 2rem 0;

    .swiper-pagination-bullet {
      background-color: var(--green);
    }

    .swiper-pagination-bullet-active {
      background-color: var(--pink);
    }
  }

  .certificate-item {
    padding: 1rem;
    background: rgba(43, 43, 43, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(8px);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.35);
    transition: transform 0.25s, box-shadow 0.25s, border-color 0.25s;

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 28px rgba(0, 0, 0, 0.5);
      border-color: var(--pink);
    }

    img {
      width: 100%;
      max-height: 45rem;
      height: auto;
      object-fit: contain;
      border-radius: 0.8rem;
      transition: transform 0.3s ease;
    }

    &:hover img {
      transform: scale(1.03);
    }
  }
`;
