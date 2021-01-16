import React from "react";
import "./Filter.css";

function Filter(props){
    return(
        <span style={{}} className="text" onClick={() => props.setFilter(props.name)}>{props.name}</span>
 )
}

export default Filter;