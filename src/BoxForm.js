import { useState } from "react";

// simple form for adding a Box component to parent component
// addBox function is passed from a parent component that will be
// used to add a new box on form submition
const BoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        width: '',
        height: '',
        color:''
    }
    const [boxForm, setBoxForm] = useState(INITIAL_STATE)

    // updating the form values if they are changed
    const handleChange = (e) => {
        const {name, value} = e.target;
        setBoxForm(boxForm => ({
            ...boxForm,
            [name]: value
        }))
    }

    // handles submition of the form
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox(boxForm);
        setBoxForm(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="width">Width:</label>
            <input 
                type='text'
                id='width'
                name='width'
                placeholder="width"
                value={boxForm.width}
                onChange={handleChange}
            />
            <label htmlFor="width">Height:</label>
            <input 
                type='text'
                id='height'
                name='height'
                placeholder="height"
                value={boxForm.height}
                onChange={handleChange}
            />
            <label htmlFor="color">Color:</label>
            <input 
                type='text'
                id='color'
                name='color'
                placeholder="color"
                value={boxForm.color}
                onChange={handleChange}
            />
            <button>Add</button>
        </form>
    )
};

export default BoxForm;