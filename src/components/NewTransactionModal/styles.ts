import styled from "styled-components";
import {darken} from 'polished';
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

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;

  button {
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;
    background-color: transparent;
    align-items: center;
    justify-content: center;
    transition: filter 0.2s;
    &:hover {
      border-color: ${darken(0.1, '#d7d7d7')};
    }
    img {
      width: 20px;
      height: 20px;
    }
    span {
      display: inline-block;
      font-size: 1rem;
      margin-left: 1rem;
      color: var(--title-dark);
    }
  }
`;
