import React, {useState} from "react";
import Task from "../Task/Task";
import Filter from "../Filter/Filter";
import "./TaskList.css";

function TaskList(props){

    const [filters, setFilter] = useState(["All"]);
    const filter_NAMES = ["All", "Active", "Completed"];
    const filter_MAP = {
        All: () => true,
        Active: task => !task.completed,
        Completed: task => task.completed
      };

    return(
        <div className="taskList">
        {props.tasks
        .filter(filter_MAP[filters])
        .map((t, i) => 
        <Task
            name={t.name}
            key={i}
            id={t.id}
            completed={t.completed}
            onDelete={props.onDelete}
            onToggle={props.onToggle} />
        )}
        {//all of this below into Filter
        }
        <div className="stats">
        <p>{props.tasks.length - props.tasks.filter(t => t.completed === true).length} items left</p>
        {filter_NAMES.map((f,i) => 
        <Filter 
            name={f}
            key={i}
            filter={filters}
            setFilter={setFilter}
        />)}
        <span onClick={props.onDeleteCompleted}>Clear Completed</span>
        </div>
        </div>
    )   
}

export default TaskList

