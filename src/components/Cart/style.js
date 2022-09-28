import styled from "styled-components";

export const ShoppingCart = styled.aside`
  height: 20%;
  width: 100%;

  header {
    width: 100%;
    padding: 20px 22px;
    border-radius: 5px 5px 0 0;

    background-color: var(--color-primary);
    color: var(--white);
  }

  header h3 {
    font-size: var(--heading3);
    font-weight: 700;
  }

  ul {
    background-color: var(--grey-0);
    padding: 25px;

    display: flex;
    flex-direction: column;
    gap: 28px;

    height: 220px;
    overflow-y: auto;
  }

  li {
    display: flex;
    justify-content: space-between;
  }

  li .containerContent {
    display: flex;
    gap: 10px;
  }

  li .containerContent div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  li .containerContent h3 {
    font-size: var(--heading3);
    font-weight: 700;
    color: var(--black);
  }

  li .containerContent span {
    font-size: var(--caption);
    font-weight: 400;
    color: var(--grey-50);
  }

  li figure {
    width: 70px;
    height: 70px;

    background-color: var(--grey-50);
    border-radius: 5px;
  }

  li figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .clean {
    height: 100%;
    text-align: center;
  }

  .clean h3 {
    font-size: var(--heading3);
    font-weight: 700;
    color: var(--black);
  }

  .clean span {
    font-size: var(--body);
    font-weight: 400;
    color: var(--grey-50);
  }

  footer {
    border-top: 2px solid var(--grey-50);
    background-color: var(--grey-0);
    padding: 25px;

    display: flex;
    flex-direction: column;
    gap: 20px;

    border-radius: 0 0 5px 5px;
  }

  footer div {
    display: flex;
    justify-content: space-between;
  }

  footer div p {
    font-size: var(--body);
    font-weight: 600;
    color: var(--black);
  }

  footer div span {
    font-size: var(--body);
    font-weight: 600;
    color: var(--grey-50);
  }

  footer button {
    padding: 20px 0;
    border: 1px solid transparent;
    border-radius: 8px;

    background-color: var(--gray-100);
    color: var(--grey-50);

    font-size: var(--headline);
    font-weight: 600;
  }

  .material-symbols-outlined {
    font-variation-settings: "FILL" 0, "wght" 400, "GRAD" 0, "opsz" 48;
    cursor: pointer;
  }

  @media (min-width: 900px) {
    width: auto;
    height: auto;
    min-width: 350px;
  }
`;
