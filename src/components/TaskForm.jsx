import { useState, useContext, useEffect } from 'react'
import { TaskContext } from '../context/TaskContext'
function TaskForm() {
    const { selectedTask, saveTask } = useContext(TaskContext)
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('')

    useEffect(() => {
        if(!selectedTask)
            return

        setTaskTitle(selectedTask.title)
        setTaskDescription(selectedTask.description)
    
    }, [selectedTask])  

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            id: selectedTask?.id ?? 0,
            title: taskTitle,
            description: taskDescription,
        }
        saveTask(task, !selectedTask);
        setTaskDescription('');
        setTaskTitle('')

    }

    return (
        <div className='max-w-md mx-auto '>
            <form className='bg-slate-800 p-10 mb-4 rounded-md' onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu Tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' onChange={e => setTaskTitle(e.target.value)} placeholder="Escribe tu tarea" 
                value={taskTitle} autoFocus />
                <textarea className='bg-slate-300 p-3 w-full mb-2' onChange={e => setTaskDescription(e.target.value)} placeholder="Escribe la descripción de tu tarea" 
                value={taskDescription}></textarea>
                <button className='bg-indigo-500 rounded-md px-3 py-1 text-white hover:bg-indigo-400'>Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm