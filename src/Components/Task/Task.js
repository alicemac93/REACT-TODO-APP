import React from "react";
import Radio from '@material-ui/core/Radio';
import { makeStyles } from '@material-ui/core/styles';
import "./Task.css";


/*

    
const styles = {
    // color: "linear-gradient(45deg, hsl(192, 100%, 67%,)hsl(280, 87%, 65%))",
    root:
    "color: linear-gradient(135deg, hsl(192, 100%, 67%), hsl(280, 87%, 65%))"
}
// import this as styles https://material-ui.com/components/radio-buttons/
*/

const crossed = {textDecoration: "line-through"}
const useStyles = makeStyles({
    root: {
        color: 'hsl(192, 100%, 67%)',
        '&$checked': {
            color: "hsl(192, 100%, 67%)"
          },
    }, checked: {}});

function Task(props) {
        const classes = useStyles();

        return (
        <div className="task">
            <Radio 
            onClick={() => props.onToggle(props.id)} 
            className={classes.root}
            checked={props.completed}
            />
            <p style={props.completed ? crossed : null }>{props.name}</p>
            <button onClick={() => props.onDelete(props.id)}>X</button>
        </div>
    )
}

export default Task;

// when state of task isDone changes to true then the state of doneTasks changes to the newNumber of tasks that are isDone true