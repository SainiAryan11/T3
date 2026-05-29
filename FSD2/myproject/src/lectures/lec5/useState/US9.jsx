import { useState } from 'react'

function US9() {
    const [task, setTask] = useState('')
    const [todo, setTodo] = useState([])
    const addTask = () => {
        setTodo([...todo,
            {id:Date.now(),name:task}])
        setTask('')
    }
    const deleteTask = (id) => {
        setTodo(todo.filter((task) => task.id !== id))
    }
    return (
        <>  
            <input type="text" placeholder="Enter your task" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={addTask}>Add Task</button>
            {
                todo.map((task) => (
                    <div>
                        <h3>{task.name}</h3>
                        <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </div>
                ))
            }
        </>
    )
}

export default US9