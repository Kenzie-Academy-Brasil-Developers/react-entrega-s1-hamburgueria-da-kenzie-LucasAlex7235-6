import styled from "styled-components";

export const UlShowcase = styled.ul`
  display: flex;
  /* max-width: 1600px;
  margin: 0 auto; */
  gap: 20px;
  padding: 0 10px 20px 0px;
  width: 100%;
  overflow-x: auto;

  .card {
    border: 2px solid var(--gray-100);
    border-radius: 5px;

    width: 300px;
    height: 346px;
  }

  .animate__bounceIn {
    animation-duration: 0.8s;
  }

  .animate__bounceInDown {
    animation-duration: 0.8s;
  }

  figure {
    width: 100%;
    height: 162px;

    background-color: var(--grey-0);

    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 14px;
  }

  figure img {
    height: 100%;
  }

  .content {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 14px;

    padding: 0 21px;
  }

  .content h3 {
    color: var(--black);

    font-size: var(--heading3);
    font-weight: 700;
  }

  .content .type {
    color: var(--grey-50);

    font-size: var(--caption);
    font-weight: 400;
  }

  .content p {
    color: var(--color-primary);

    font-size: var(--body);
    font-weight: 600;
  }

  .content button {
    width: 106px;
    padding: 11px 20px;

    border: 1px solid transparent;
    border-radius: 8px;

    background-color: var(--color-primary);
    color: var(--white);
    font-size: var(--body);
    font-weight: 600;

    cursor: pointer;
    transition: 0.3s;
  }

  .content button:hover {
    filter: opacity(0.5);
    transition: 0.3s;
  }

  @media (min-width: 900px) {
    width: 80%;
    flex-wrap: wrap;
    overflow: hidden;
    .card {
      width: 250px;
      height: 340px;
    }
  }
`;
