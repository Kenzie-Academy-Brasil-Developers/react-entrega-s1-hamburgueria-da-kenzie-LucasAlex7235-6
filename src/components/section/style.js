import styled from "styled-components";

export const Section = styled.section`
  width: 100vw;
  max-width: 1582px;
  margin: 0 auto;

  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  height: 80%;
  overflow-y: auto;

  @media (min-width: 600px) {
    padding: 14px 50px;
  }

  @media (min-width: 768px) {
    padding: 14px 100px;
  }
  @media (min-width: 900px) {
    flex-direction: row;
    gap: 10px;
  }
`;
