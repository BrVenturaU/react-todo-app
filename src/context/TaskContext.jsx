import { createContext, useState, useEffect } from 'react'
import { tasks as data } from '../data/tasks'
export const TaskContext = createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])

    useEffect(() => {
        setTasks(data)
    }, [])

    const addTask = (task) => {
        task.id = Math.max(...tasks.map(t => t.id)) < 0 ? 1 : Math.max(...tasks.map(t => t.id)) + 1
        setTasks([...tasks, task]);
    }

    const removeTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id))
    }
    return (
        <TaskContext.Provider value={{
            tasks,
            addTask,
            removeTask
        }}>
            {props.children}
        </TaskContext.Provider>
    )
}