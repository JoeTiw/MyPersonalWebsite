import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root{
    --background-color: skyblue;
    --secondary-color: #6c757d;
    --primary-color: #007bff;
    --background-dark-color:#87CEFA;
    --white-color: #FFF;                   
    --font-light-color: #a4acc4;
    --font-dark-color: #313131;
    --font-dark-color-2: #151515;
    --border-color: #33beff  ;
    --line-color: #33beff ;
    --font-color:  #ff33d7;
    --black-color: #000000;
    --extra-color: #34495e;
    --bhupin-color: #c5c5c5;
    --purple-color:  #702963 ;
    --sap-color: #ADD8E6;
    --red-color: #ff0000;
    --lightgray-color: #A9A9A9;
    --coral-color: #E38E84;
    --crazy-color: #191d2b;


}

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Lobster', cursive;
        font-size: 1.2rem;
        color: black;
    }

body{
    background-color: lightcyan;                // this is for main background
    color: var(--font-color) ;
}

a{
    font-family: inherit;
    color: black ;
    font-size: inherit;
    font-size: 1.5rem;
}

h1{
    font-size: 3.5rem;
    color: blue;

span{
    font-size: 3.5rem;
}
}

span{
    color: red;
}




`;

export default GlobalStyle;