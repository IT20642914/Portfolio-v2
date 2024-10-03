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
  }

  .certificate-item {
    padding: 1rem;
    background-color: #2b2b2b;
    border-radius: 0.8rem;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      max-width: 100%;
      max-height: 45rem;
      height: auto;
      border-radius: 0.5rem;
    }
  }
`;
