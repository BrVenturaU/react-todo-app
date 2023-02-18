import { useState, useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
function TaskForm() {
    const { addTask } = useContext(TaskContext)
    const [taskTitle, setTaskTitle] = useState('');
    const [taskDescription, setTaskDescription] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        const task = {
            id: 0,
            title: taskTitle,
            description: taskDescription,
        }
        addTask(task);
        setTaskDescription('');
        setTaskTitle('')

    }

    return (
        <div className='max-w-md mx-auto '>
            <form className='bg-slate-800 p-10 mb-4 rounded-md' onSubmit={handleSubmit}>
                <h1 className='text-2xl font-bold text-white mb-3'>Crea tu Tarea</h1>
                <input className='bg-slate-300 p-3 w-full mb-2' onChange={e => setTaskTitle(e.target.value)} placeholder="Escribe tu tarea" value={taskTitle} autoFocus />
                <textarea className='bg-slate-300 p-3 w-full mb-2' onChange={e => setTaskDescription(e.target.value)} placeholder="Escribe la descripción de tu tarea" value={taskDescription}></textarea>
                <button className='bg-indigo-500 rounded-md px-3 py-1 text-white hover:bg-indigo-400'>Guardar</button>
            </form>
        </div>
    )
}

export default TaskForm