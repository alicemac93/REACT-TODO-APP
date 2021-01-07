import React, {useState} from "react";
import './App.css';
import TopBar from "../TopBar/TopBar"
import TaskList from "../TaskList/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    setTasks((prev) => [...prev, newTask])
    setNewTask(""); // has to have value below to work 
  };
    
  const handleChange = (event) => {
    const inputText = event.target.value;
    setNewTask(inputText);
}
  const deleteTask = (taskId) => {
    setTasks((prev) =>{return prev.filter((item, index) => index !== taskId)})
  }

  return (
    <div className="app">
    <TopBar
    newTask={newTask}
    onChange={handleChange}
    onAdd={addTask} />
    <TaskList 
      tasks={tasks}
      onDelete={deleteTask}
    />
    </div>
  );
}

export default App;
