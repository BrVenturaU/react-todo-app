function TaskElement({ task, removeTask, editTask }) {

    const handleDeleteClick = () => {
        alert(`Eliminando tarea: ${task.title}`)
        removeTask(task.id);
    }

    return (
        <div className="bg-gray-800 text-white p-4 rounded-md">
            <h1 className="text-xl font-bold capitalize">{task.title}</h1>
            <p className="text-gray-500 text-sm">{task.description}</p>
            <button className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400" onClick={handleDeleteClick}>Eliminar</button>
            <button className="bg-green-700 px-2 py-1 rounded-md ml-2 mt-4 hover:bg-green-600 " onClick={() => editTask(task)}>Editar</button>
        </div>
    )
}

export default TaskElement