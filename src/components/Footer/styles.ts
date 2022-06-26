import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  bottom: 0;
  right: 0;
  padding: 0 1rem 1rem;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: right;
  color: #f0f0f0;
  font-weight: 300;

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 1.5rem;
      img:hover {
        cursor: pointer;
      }
    }
  }
`;
