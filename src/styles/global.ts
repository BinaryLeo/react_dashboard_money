import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #f0f2f5;
    --text-style: #FFB86C;
    --text-body: #FFC98C;
    --blue: #01537E;
    
}
* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html{
        @media (max-width: 768px) {
            font-size:93.75%;// 16 x 93.75% = 15px 
        }
        @media (max-width: 720px) {
            font-size:87.5%;// 16 x 87.5% = 14px 
        }
    }
    body{
        background-color: var(--background);
        -webkit-font-smoothing: antialiased;// sharper fonts

    }
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
 `;
