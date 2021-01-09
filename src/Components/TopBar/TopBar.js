import React, {useState} from "react";
import "./TopBar.css";

function TopBar(props){

const [inputText, setinputText] = useState("");

const handleChange = (event) => {
    const text = event.target.value;
    setinputText(text);
}

const handleSubmit = (e) => {
    e.preventDefault();
    props.onAdd(inputText);
    setinputText("");
  }

return (
    <div className="topBar">
    <input  
    type="text"
    value={inputText}
    onChange={handleChange}
    placeholder="Create a new todo" />
    <button
    onClick={handleSubmit}>Add</button>
    </div>
    )   
}


export default TopBar;