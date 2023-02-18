import { createContext, useState, useEffect } from 'react'
export const TaskContext = createContext()

export function TaskContextProvider(props) {
    let hasMounted = false;
    const [tasks, setTasks] = useState([])
    const [selectedTask, setSelectedTask] = useState(null)

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('tasks')) ?? [];
        setTasks(data)
        hasMounted = true
    }, [])

    useEffect(() => {
        if(hasMounted)
            return
            
        const data = JSON.stringify(tasks);
        localStorage.setItem('tasks', data);
    }, [tasks])

    const saveTask = (task, isCreation) => {
        if(isCreation)
            addTask(task)
        else
            updateTask(task)

        setSelectedTask(null)
    }

    const editTask = (task) => {
        setSelectedTask(task) 
    }

    const addTask = (task) => {
        task.id = Math.max(...tasks.map(t => t.id)) < 0 ? 1 : Math.max(...tasks.map(t => t.id)) + 1
        setTasks([...tasks, task]);
    }

    const updateTask = (task) => {
        const taskIndex = tasks.findIndex(t => t.id === task.id);
        if(taskIndex < 0){
            alert(`La tarea ${task.title} no existe.`)
            return
        }
        
        const tasksCopy = [...tasks];
        tasksCopy.splice(taskIndex, 1, task);
        setTasks([...tasksCopy]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    return (
        <TaskContext.Provider value={{
            tasks,
            selectedTask,
            saveTask,
            editTask,
            removeTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}