import styled from "styled-components";
import "../../style/global.css";

export const Header = styled.header`
  width: 100vw;
  background-color: var(--grey-0);
  padding: 14px;

  div {
    max-width: 1382px;
    margin: 0 auto;

    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 13px;
  }

  div h1 {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: var(--heading1);

    color: var(--black);
  }

  div h1 span {
    font-family: "Inter", sans-serif;
    font-weight: 700;
    font-size: var(--heading3);

    color: var(--color-secondary);
  }

  form {
    background-color: var(--white);
    padding: 10px;
    height: 60px;

    display: flex;
    align-items: center;
    gap: 5px;

    border-radius: 8px;
    border: 2px solid var(--gray-100);
  }

  form input {
    border: 1px solid transparent;
    width: 100%;
    padding: 5px 0;
    outline: none;
  }

  form button {
    height: 100%;
    padding: 10px 20px;

    color: var(--white);
    background-color: var(--color-primary);
    border-radius: 8px;
    border: 1px solid transparent;

    font-size: var(--heading4);
    font-weight: 500;
    animation: btnTransform 1s ease-in-out;
  }

  @keyframes btnTransform {
    0% {
      transform: translateX(-207%);
    }
    100% {
      transform: translate(0);
    }
  }

  @media (min-width: 600px) {
    div {
      flex-direction: row;
    }
    padding: 20px 50px;
  }

  @media (min-width: 768px) {
    padding: 20px 100px;
  }
`;
