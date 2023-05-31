import "./Box.css"

const Box = ({width, height, color, removeBox}) => {
    return (
        <div 
            className="Box" 
            style={{
                height:`${height}px`, 
                width:`${width}px`, 
                backgroundColor:color
            }}
            data-testid={color}
            >
        <button className="Box-remove" onClick={removeBox}>X</button>
        </div>
    )
}

export default Box;