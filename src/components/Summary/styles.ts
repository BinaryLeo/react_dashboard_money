import styled from 'styled-components';
export const Container = styled.div`
display:grid;
grid-template-columns:repeat(3, 1fr);
gap: 2rem;
margin-top: -10rem;

div{
  background: var(--shape); 
  padding: 1.5rem 2rem;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  color: var(--title);

  header{
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  strong{
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight:500;
    line-height:3rem; 
  }
  &.highlight{
    background: var(--green);
    color: var(--shape);
  }

}
`;
