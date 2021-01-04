import React, { useState } from 'react'
import { createGlobalStyle } from 'styled-components'

import allColors from './styles/colors'

import {generate as id} from 'shortid';
import FormTask from './Components/FormTask';
import Task from './Components/Task';

const GlobalSyle = createGlobalStyle`
    body{
        font-family:sans-serif;
        background-color: #222;
        color:${allColors.mainColor};
        text-align: center;
        margin:0;
    }
`

    
const App = () => {


    const [colorSelected, setColorSelected] = useState(allColors.colors[0])
    const [tasks, setTasks] = useState([
        {
            title:'Aprender React',
            color: allColors.colors[0],
            done:false
        }  
    ])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(e.target.title.value.trim() !== ''){
            createNewTask(e.target.title.value)
            e.target.title.value = ``
        }
    }
    
    const createNewTask = (title) => {
        const newTask = {
            id:id(),
            title,
            color: colorSelected,
            done:false
        }
        
        const allTask = [...tasks, newTask];
        
        setTasks(allTask);
    }
       
    const handleCompleteTask = (id) => {
        const currentTasks = [...tasks]
        const task = currentTasks.find(task => task.id === id)
        const index = currentTasks.indexOf(task)
        
        currentTasks[index].done = !currentTasks[index].done
        
        setTasks(currentTasks)
    }
    
    const handleDeleteTask = (id) => {
        let currentTasks = [...tasks]
        currentTasks = currentTasks.filter(task => task.id !== id)
        
        setTasks(currentTasks);
    }
    
    const handleChangeColor = (color) => {
        setColorSelected(color)
    }

    return (
        <>
            <GlobalSyle />
            <h1>To do list</h1>
            <FormTask 
                handleChangeColor={handleChangeColor}
                handleSubmit={handleSubmit}
                colorSelected={colorSelected}
            />
            {tasks.length === 0 && <h3>No tasks yet</h3>}
                {
                    tasks.map(task => (
                        <Task
                            color={task.color}
                            done={task.done}
                            key={id()}
                            title={task.title}
                            handleCompleteTask={() => handleCompleteTask(task.id)}
                            handleDeleteTask={()=> handleDeleteTask(task.id)}
                        />
                    ))
                }
        </>

    )
}

export default App;