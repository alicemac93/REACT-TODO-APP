import React from "react";
import "./Filter.css";

const style = {color: "blue"}

function Filter(props){

    return(
        <span style={props.filter === props.name ? style : null} className="text" onClick={() => props.setFilter(props.name)}>{props.name}</span>
 )
}

export default Filter;