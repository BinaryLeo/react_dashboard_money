import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--title-dark);
    font-size: 1.5rem;
    margin-bottom: 2em;
  }
  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;
    background-color: #d7d7d7;
    border: 1px solid #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: --var(--table);
    }
    & + input {
      margin-top: 1rem;
    }
  }
  button[type="submit"] {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: #fff;
    border: 0;
    border-radius: 0.25rem;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
