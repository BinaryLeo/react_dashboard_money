import styled from "styled-components";
export const Container = styled.div`
margin-top:4rem;
table{
    width:100%;
    border-spacing:0 0.5rem;
    border-collapse: separate;

    th{
        color:var(--shape);
        background-color:var(--blue);
        font-weight:400;
        padding: 1rem 2rem;
        line-height:1.5rem;
        text-align:left;
    }
    td{
        padding: 1rem 2rem;
        border:0;
        background-color:var(--table);
        color:var(---text-dark);
    }
}

`;
