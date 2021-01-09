import React, {useState} from "react";
import "./Task.css";

const crossed = {textDecoration: "line-through"}

function Task(props) {

    return (
        <div className="task">
            <button onClick={() => props.onToggle(props.id)}>O</button>
            <p style={props.completed ? crossed : null }>{props.name}</p>
            <button onClick={() => props.onDelete(props.id)}>X</button>
        </div>
    )
}

export default Task;

// when state of task isDone changes to true then the state of doneTasks changes to the newNumber of tasks that are isDone true