
const darkBackground = require("./images/bg-desktop-dark.jpg");
const lightBackground = require("./images/bg-desktop-light.jpg");

export const lightTheme = {
    backgroundImg: darkBackground,
    background: "hsl(0, 0%, 98%)",
    tasksBody: "white",
    text: "hsl(235, 19%, 35%)",
    switcher: "black",
}

export const darkTheme = {
    backgroundImg: lightBackground,
    background: "hsl(235, 21%, 11%)",
    tasksBody: 'hsl(235, 24%, 19%)',
    text: "white",
    switcher: "white"
}