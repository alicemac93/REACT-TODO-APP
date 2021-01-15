import React, {useState} from "react";
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import "./Task.css";
import cross from "../images/icon-cross.svg"

const crossed = {textDecoration: "line-through"}
const useStyles = makeStyles({
    root: {
        color: 'lightgrey',
        '&$checked': {
            color: "hsl(192, 100%, 67%)"},
        '&:hover': {
            color: "hsl(192, 100%, 67%)"
          }},
          checked: {},
    });

function Task(props) {
        const [isShown, setIsShown] = useState(false);
        const classes = useStyles();

        return (
        <div className="task" 
            onMouseEnter={() => setIsShown(true)}
            onMouseLeave={() => setIsShown(false)}>
        <Radio 
            onClick={() => props.onToggle(props.id)} 
            classes={{
                checked: classes.checked, 
                root: classes.root}}
            checked={props.completed}
            />
        <p style={props.completed ? crossed : null }>{props.name}</p>
        {isShown &&
        <input type="image" alt="close button" style={{height: 15, padding: 15}} src={cross} onClick={() => props.onDelete(props.id)} />}
        </div>
    )
}

export default Task;

