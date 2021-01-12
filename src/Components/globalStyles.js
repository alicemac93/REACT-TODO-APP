import { createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background-image: url(${({ theme }) => theme.backgroundImg});
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    font-family: 'Josefin Sans';
  }
  .topBar {
    background-color: ${({ theme }) => theme.tasksBody};
    
  }
  .taskList{ 
    background: ${({ theme }) => theme.tasksBody};
  }
  `
  
// destructed props.theme ( ${props => props.theme.background})