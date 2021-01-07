import React, {useState} from "react";
import "./Task.css";

const crossed = {textDecoration: "line-through"}

function Task(props) {
    const [isDone, setIsDone] = useState(false);

    const handleClick = (id) => {
        setIsDone((done) => done ? false : true);
        props.handleDone(id);
    }
  
    return (
        <div className="task">
            <button onClick={() => handleClick(props.id)}>O</button>
            <p style={isDone ? crossed : null }>{props.task}</p>
            <button onClick={() => props.onDelete(props.id)}>X</button>
        </div>
    )
}

export default Task;

// when state of task isDone changes to true then the state of doneTasks changes to the newNumber of tasks that are isDone true