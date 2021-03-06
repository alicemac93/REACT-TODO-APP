import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    /*background-image: url(${({ theme }) => theme.backgroundImg}); */
    background-color: ${({ theme }) => theme.background};
    transition: all 0.50s linear;
    font-family: 'Josefin Sans';
  }
  .text,
  p {
    color: ${({ theme }) => theme.text};
  }

  .topBar {
    background-color: ${({ theme }) => theme.tasksBody};
    box-sizing: border-box;
    width: 100%;
    height: 40px;
    border: none;
    border-radius: 6px;
    margin-bottom: 5%;
    position: relative;
    padding-left: 40px;
    font-family: 'Josefin Sans';
  }

  .listGlobal{ 
    background: ${({ theme }) => theme.tasksBody};
  }
  `

 

// destructed props.theme ( ${props => props.theme.background})