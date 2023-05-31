import { useState } from "react";
import './NewToDoForm.css'

// simple form for adding a new task
const NewToDoForm = ({addTodo}) => {
    const INITIAL_STATE = {
        task:''
    }
    const [formData, setFormData] = useState(INITIAL_STATE)

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(formData => ({
            ...formData,
            [name]:value
        }))
    }

    // uses function passed in from a parent to change parent state
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                className="new-task-input"
                id='task'
                name='task'
                type='text'
                placeholder="New Todo"
                value={formData.task}
                onChange={handleChange}
            />
            <button className="add-task-btn">Add</button>
        </form>
    )
}

export default NewToDoForm;