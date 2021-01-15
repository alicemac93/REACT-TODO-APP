import React from "react";

function Filter(props){
    return(
        <span className="text" onClick={() => props.setFilter(props.name)}>{props.name}</span>
    )
}

export default Filter;