import React, {useState} from 'react';
import ListTasks from './ListTasks'

const AddTask= () => {
    const [input, setInput] = useState()
    const [list, setList] = useState([])

    return (
        <div>
            <h1>Add Task</h1>
            <input onChange={(e)=>{setInput(e.target.value)}}/>
            <button onClick={() =>{setList([...list, input])}}>Add Task</button>
            <h2>{input}</h2>
            <ListTasks list={list}/>
        </div>
    )
}

export default AddTask