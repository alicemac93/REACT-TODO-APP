import React, {useState} from "react";
import Task from "../Task/Task";
import Filter from "../Filter/Filter";
import "./TaskList.css";

function TaskList(props){

    const [filters, setFilter] = useState(["All"]);
    const filter_names = ["All", "Active", "Completed"];
    const FILTER_MAP = {
        All: () => true,
        Active: task => !task.completed,
        Completed: task => task.completed
      };

    return(
        <div className="taskList">
        {props.tasks
        .filter(FILTER_MAP[filters])
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
        {filter_names.map((f,i) => 
        <Filter 
            name={f}
            key={i}
            filter={filters}
            setFilter={setFilter}
        />)}
        <button>Clear Completed</button>
        </div>
        </div>
    )   
}

export default TaskList

