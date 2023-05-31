import { useState } from 'react';
import './ToDo.css'

// Displays the task and has buttons for editing, saving and deleting the task
const ToDo = ({taskCompleted, removeTodo, saveTodo, task, id, done}) => {
    // set task to edit mode, which will display input field
    const [beingEdited, setBeingEdited] = useState();
    // stores value of the task being edited
    const [taskEdited, setTaskEdited] = useState({task});
    // used the done paramenter passed from a parent to indicate if the task was completed or not
    const classes = `Todo ${done ? 'Todo-done': ''}`

    // sets edit mode to true
    const startEdit = () => {
        setBeingEdited(true)
    }

    // handles changes inside input field in edit mode
    const handleChange = (e) => {
        const {name, value} = e.target;
        setTaskEdited(taskEdited => ({
            ...taskEdited,
            [name]:value
        }))
    }

    // saves edited task and then uses saveTodo function passed in from a parent to update the state of the tasks in parent state. 
    const save = (e) => {
        e.preventDefault();
        setBeingEdited(false)
        saveTodo({...taskEdited, id, done: false})
    }

    // if edit mode is on "beingEdited" then show input field with task value and save button
    // if edit mode is off, display task and buttons edit and "x" for delete
    return (
        <li 
            id={id} 
        >
            {beingEdited ? 
                <div>
                    <input className='Todo-edit-input' name='task' value={taskEdited.task} onChange={handleChange}></input>
                    <button className='Todo-save' onClick={save}>Save</button>
                </div> : 
                <div>
                    <div className={classes} onClick={taskCompleted}>{task}</div>
                    <button className='Todo-edit' onClick={startEdit}>Edit</button>
                <button onClick={removeTodo} className='Todo-remove'>X</button>
                </div>                 
            }
        </li>
    )
}

export default ToDo;