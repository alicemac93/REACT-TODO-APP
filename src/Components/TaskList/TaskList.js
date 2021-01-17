import React, {useState} from "react";
import Task from "../Task/Task";
import Filter from "../Filter/Filter";
import "./TaskList.css";
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TaskList(props){

    const [filters, setFilter] = useState(["All"]);
    const filter_NAMES = ["All", "Active", "Completed"];
    const filter_MAP = {
        All: () => true,
        Active: task => !task.completed,
        Completed: task => task.completed
      };

    function handleOnDragEnd(result) {
        if (!result.destination) return;
        const items = [...props.tasks];
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);
        props.setTasks(items);
    }

    return(
        <div className="taskList listGlobal">
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="characters">
            {(provided) => (
            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
            {props.tasks.filter(filter_MAP[filters]).map((t, i) => {
            return (
            <Draggable key={i} draggableId={t.id} index={i}>
                {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} style={{listStyle: "none"}}>
                    <Task
                    name={t.name}
                    id={t.id}
                    completed={t.completed}
                    onDelete={props.onDelete}
                    onToggle={props.onToggle} />
                </li>
            )}
            </Draggable>
            )
            })}
            {provided.placeholder}
            </ul>
            )}
            </Droppable>
        </DragDropContext>
        <div className="stats">
        <p>{props.tasks.length - props.tasks.filter(t => t.completed === true).length} items left</p>
        <div  className="filters listGlobal">
         {filter_NAMES.map((f,i) => 
        <Filter 
            name={f}
            key={i}
            filter={filters}
            setFilter={setFilter}
        />)}
        </div>
        <span className="text" onClick={props.onDeleteCompleted}>Clear Completed</span>
        </div>
        </div>
    )   
}

export default TaskList

