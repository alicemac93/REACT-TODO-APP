import React, {useState} from "react";
import Task from "../Task/Task";
import "./TaskList.css";

function TaskList(props){
    const [doneTasks, setDoneTasks] = useState([]);

    const handleDoneTasks = (doneTask) => {
        const done = props.tasks.filter((item, index) => index === doneTask)
        setDoneTasks(prev => [...prev, done])
        console.log(doneTasks);
    }

    return(
        <div className="taskList">
        {props.tasks.map((t, i) => 
        <Task
        task={t}
        key={i}
        id={i}
        onDelete={props.onDelete}
        handleDone={handleDoneTasks} />
        )}
        <p></p>
        </div>
    )   
}

export default TaskList