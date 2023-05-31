import Box from "./Box";
import BoxForm from "./BoxForm";
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// holds colored boxes and a form for creating colored boxes
const BoxList = () => {
    // sets initial state of boxes with one green box
    const [boxes, setBoxes] = useState([{
        width:100, 
        height:50, 
        color: 'green', 
        id: uuidv4()
    }])

    // function passed to BoxForm for creating of new boxes
    // onSubmit BoxFrom will pass values for new box to addBox function
    // as an object boxObj which then will be deconstructed and 
    // added to a list of boxes
    const addBox = (boxObj) => {
        setBoxes(boxes => [
            ...boxes, {...boxObj, id: uuidv4()}
        ])
    }

    // function that is passed on to child Box component with an id
    // that is assigned to that Box component for removing that component from 
    // a parent component
    const removeBox = (id) => {
        setBoxes(boxes => (
            boxes.filter(box => (box.id !== id))
        ))
    }

    return (
        <div>
            {boxes.map(({width, height, color, id}) => (
                <Box 
                    width={width} 
                    height={height} 
                    color={color} 
                    key={id}
                    removeBox={() => removeBox(id)}
                />
            ))}
            <BoxForm addBox={addBox} />
        </div>
    )
};

export default BoxList;