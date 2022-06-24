import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root {
    --background: #09090A;
    --shape: #fff;
    --table:#ececec;
    --text-style: #FFB86C;
    --text-body: #FFC98C;
    --blue: #01537E;
    --blue_light: #01659A;
    --title: #000;
    --title-dark:#666666;
    --green: #28A277;
    --dark_green:#476226;
    --red: #7F2E2D;
    
    
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
    body, input, textarea, button{
    font-family: 'Poppins', sans-serif;
    font-weight:400;
    }
    h1, h2, h3, h4, h5, h6, strong{
     font-weight:600; 
} 
    button{
        cursor: pointer;
    }
    [disabled]{
        opacity: 0.6;
        cursor: not-allowed;
    }
   .react-modal-overlay{
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
   }
   .react-modal-content{
    width:100%;
    max-width: 576px;
    background-color: var(--table);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
   }
 `;
