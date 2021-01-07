import React, {useState} from "react";
import "./TopBar.css";

function TopBar(props){

return (
    <div className="topBar">
    <input  
    value={props.newTask}
    onChange={props.onChange}
    placeholder="Create a new todo" />
    <button
    onClick={props.onAdd}>Add</button>
    </div>
    )   
}


export default TopBar;