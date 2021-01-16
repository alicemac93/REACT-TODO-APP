import React, {useState} from "react";
import circle from "/Users/alicemaciejewska/Desktop/Projects/frontend_mentor/todo-app-main/to-do-january/src/images/dry-clean.svg";
import Radio from '@material-ui/core/Radio';

function TopBar(props){

const [inputText, setinputText] = useState("");

const handleChange = (event) => {
    const text = event.target.value;
    setinputText(text);
}

const handleSubmit = (e) => {
    e.preventDefault();
    if(e.keyCode === 13){
    props.onAdd(inputText);
    setinputText("");
      }
  }

return (
    <div>
    <Radio
    disabled="true" 
    style={{position: "absolute", zIndex: 10, color: "lightgrey"}}
    />
    <input 
    className="topBar text"
    style={{backgroundImage: ({circle}) }}
    type="text"
    value={inputText}
    onChange={handleChange}
    placeholder="Create a new todo" 
    onKeyUp={handleSubmit} />
    </div>
    )   
}


export default TopBar;