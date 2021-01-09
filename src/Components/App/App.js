import React, {useState} from "react";
import './App.css';
import TopBar from "../TopBar/TopBar"
import TaskList from "../TaskList/TaskList";
import { nanoid } from "nanoid"; // to create unique IDs, since I am setting the newtasks on App level. 

function App() {
  const [tasks, setTasks] = useState([
    { id: 0, name: "Eat", completed: true },
    { id: 1, name: "Sleep", completed: false },
    { id: 2, name: "Repeat", completed: false }
  ]);

 // state of the document - state of the active toggle will change the edits 

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


  return (
    <div className="app">
    <TopBar
      onAdd={addTask} />
    <TaskList 
      tasks={tasks}
      onToggle={toggleCompleted}
      onDelete={deleteTask}
    />
    </div>
  );
}

export default App;


/* const [newTask, setNewTask] = useState({
      id: "",
      name: "",
      completed: false
    });
*/