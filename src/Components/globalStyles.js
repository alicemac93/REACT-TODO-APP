import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    /* background-image: url(${({ theme }) => theme.backgroundImg}); */
    background-color: ${({ theme }) => theme.background};
    transition: all 0.50s linear;
    font-family: 'Josefin Sans';
  }
  .text,
  p {
    color: ${({ theme }) => theme.text};
  }
  h1 {
    color: "white";
  }
  .topBar {
    background-color: ${({ theme }) => theme.tasksBody};
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 6px;
  }
  .taskList{ 
    background: ${({ theme }) => theme.tasksBody};
  }
  `

  
// destructed props.theme ( ${props => props.theme.background})