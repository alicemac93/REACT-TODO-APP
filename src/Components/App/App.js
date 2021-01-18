import React, {useState} from "react";
import './App.css';
import TopBar from "../TopBar/TopBar"
import TaskList from "../TaskList/TaskList";
import { nanoid } from "nanoid"; // to create unique IDs, since I am setting the newtasks on App level. 
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "/Users/alicemaciejewska/Desktop/Projects/frontend_mentor/todo-app-main/to-do-january/src/Components/globalStyles.js";
import { lightTheme, darkTheme } from "/Users/alicemaciejewska/Desktop/Projects/frontend_mentor/todo-app-main/to-do-january/src/Components/themes.js";

function App() {
  const [tasks, setTasks] = useState([
    { id: nanoid(), name: "Complete online Javascript course", completed: true },
    { id: nanoid(), name: "Jog around the park", completed: false },
    { id: nanoid(), name: "10 minutes meditation", completed: false }
  ]);
 
  const addTask = (name) => {
    setTasks((prev) => [...prev, {
    id: nanoid(),
    name: name,
    completed: false}])
  };
    
  const deleteTask = (taskId) => {
    setTasks((prev) => {return prev.filter((item) => item.id !== taskId)})
  }

  const toggleCompleted = (id) => {
    const updated = tasks.map(t => {
    if (id === t.id){
      return {...t, completed: !t.completed}
    } return t;
  })
  setTasks(updated)
}

const deleteCompleted = () => {
    const completed = tasks.filter(t => !t.completed)
    setTasks(completed);
}
// styling
const [theme, setTheme] = useState('light');
const [isDarkMode, setDarkMode] = useState(false);

const themeToggler = () => {
  theme === 'light' ? setTheme('dark') : setTheme('light'); 
  isDarkMode === false ? setDarkMode(true): setDarkMode(false);
}

  return (    
  <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
  <>
  <GlobalStyles/>
  <div className={theme === 'light' ? "lightBackground background" : "darkBackground background"} >
  <div className="app">
    <div className="heading">
    <h1 style={{color: "white"}}>TODO</h1>
    <DarkModeSwitch
      onClick={themeToggler}
      size={25}
      checked={isDarkMode}
    />
    </div>
    <TopBar
      className="topBar"
      onAdd={addTask} />
    <TaskList 
      className="taskList"
      tasks={tasks}
      setTasks={setTasks}
      onToggle={toggleCompleted}
      onDelete={deleteTask}
      onDeleteCompleted={deleteCompleted}
    />
    <p class="dnd-cta">Drag and drop to reorder list</p>
    </div>
    </div>
    </>
    </ThemeProvider>
  );
}

export default App;
