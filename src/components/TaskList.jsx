import { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'
import TaskElement from "./TaskElement"

function TaskList() {
    const { tasks, removeTask, editTask } = useContext(TaskContext)
    if (tasks.length == 0)
        return <h1 className='mt-20 text-white text-4xl font-bold text-center'>No hay tareas aun...</h1>
    return (
        <div className='mt-16 grid grid-cols-4 gap-2'>
            {
                tasks.map(task => <TaskElement key={task.id} task={task} removeTask={removeTask} editTask={editTask} />)
            }
        </div>
    )
}

export default TaskList