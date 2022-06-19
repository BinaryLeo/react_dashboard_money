import styled from 'styled-components';

export const Container = styled.header`
background-color: var(--blue);
` 
export const Content = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
max-width: 1120px;
margin: 0 auto;
padding: 2rem 1rem 12rem;

button{
    font-size:1rem;
    color: #fff;
    background-color: var(--blue);
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    cursor: pointer;
    height: 3rem;
    transition: filter 0.2s;
 &:hover{
      filter: brightness(0.9);
    }
}`


