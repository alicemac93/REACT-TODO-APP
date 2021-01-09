import React from "react";

function Filter(props){
    return(
        <span onClick={() => props.setFilter(props.name)}>{props.name}</span>
    )
}

export default Filter;