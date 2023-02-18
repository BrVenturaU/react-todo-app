import { createContext, useState, useEffect } from 'react'
export const TaskContext = createContext()

export function TaskContextProvider(props) {
    let hasMounted = false;
    const [tasks, setTasks] = useState([])

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