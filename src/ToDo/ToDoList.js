import { useEffect, useState } from "react";
import ToDo from "./ToDo";
import NewToDoForm from "./NewToDoForm";
import { v4 as uuidv4 } from 'uuid';
import './ToDoList.css'

// Todo list app
    const ToDoList = ({existingTodos}) => {
    const [toDos, setToDos] = useState([...existingTodos]);

    // function for saving todo list to localStorage
    const saveToLocalStorage = () => {
        localStorage.setItem('userToDoList', JSON.stringify(toDos))
    }

    // adding a new task to Todo list
    const addTodo = (newTask) => {
        setToDos(toDos => ([
            ...toDos,
            {...newTask, id:uuidv4(), done:false}
        ]))
    }

    // toggling task as completed/incomplete with a done parameter
    // which is then used to control CSS style
    const taskCompleted = (id) => {
        setToDos(toDos => (
            toDos.map(todo => {
                if (todo.id === id) {
                    if (todo.done === true) {
                        todo.done = false
                    } else {
                        todo.done = true
                    }
                    return todo
                } else {
                    return todo
                }
            }))
        )
    }

    // saving existing task after editing
    const saveTodo = (editedTodo) => {
        setToDos(toDos => (toDos.map(todo => {
            if (todo.id === editedTodo.id) {
                return editedTodo
            } else {
                return todo
            }
        })))
    }

    // removing existing task
    const removeTodo = (id) => {
        setToDos(toDos => (toDos.filter(todo => (todo.id !== id))))
    }

    // updating localStorage with any change in toDos state
    useEffect(() => {
        saveToLocalStorage();
    }, [toDos])

    return (
        <div className="Todo-app">
            <NewToDoForm addTodo={addTodo} />
            <h3 >Todo List:</h3>
            <ul className="Todo-list">
                {toDos.map(({task, id, done}) => 
                    <ToDo 
                        removeTodo={() => removeTodo(id)}
                        taskCompleted={() => taskCompleted(id)}
                        saveTodo={saveTodo}
                        task={task}
                        key={id} 
                        id={id}
                        done={done}
                    />
                    
                )}
            </ul>
        </div>
    )
}

export default ToDoList;