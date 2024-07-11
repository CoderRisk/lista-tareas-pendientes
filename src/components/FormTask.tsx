import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useState } from "react"
import type { Task } from "../types"
import { v4 as uuidv4 } from 'uuid'
import { toast } from 'react-toastify';

type FormTaskProps = {
    initialTask: Task
    task: Task
    setTask: Dispatch<SetStateAction<Task>>
    addTask: (e: ChangeEvent<HTMLInputElement>) => void
    addTaskToList: (newTask: Task) => void
    updateTaskOfList: (task: Task) => void
}

export default function FormTask({initialTask, task, setTask, addTask, addTaskToList, updateTaskOfList} : FormTaskProps) {

    const [mensajeError, setMensajeError] = useState(false)
    
    const handleSubmit = (e: FormEvent<HTMLFormElement>, task: Task) => {

        e.preventDefault()

        const { id, ...items } = task
        
        const isEmpty = Object.values(items).includes('')

        if(isEmpty){
            setMensajeError(true)
            toast.error('Todos los campos son requeridos')
            return
        } else if(id){
            updateTaskOfList(task)
            setTask({
                ...initialTask
            })
            toast.success('Tarea actualizada correctamente')
            return
        } else {
            setMensajeError(false)
            setTask({
                ...initialTask
            })

            const newId = uuidv4()
            const newTask = {...items, id: newId}
            addTaskToList(newTask)
            toast.success('Tarea añadida correctamente')
        }

    }


    return (
        <div className="w-full">
            <h2 className="text-center text-2xl font-sarabun-bold mt-10">Formulario</h2>

            
            <form className="shadow bg-slate-50 rounded p-8 max-w-xl mx-auto mt-10" action="" onSubmit={e => handleSubmit(e, task)}>

                {mensajeError && (<p className="text-center my-5 bg-red-500 p-1 rounded font-sarabun-bold uppercase">Todos los campos son requeridos</p>)}

                <div className="flex flex-col space-y-3">
                    <label className=" font-sarabun-bold" htmlFor="nombre">Nombre: </label>
                    <input id="nombre" name="nombre" className=" border border-slate-400 rounded p-1 outline-none" value={task.nombre} type="text" placeholder="Tarea ..." onChange={e => addTask(e)}/>
                </div>
                <div className="flex flex-col mt-5 space-y-3">
                    <label className=" font-sarabun-bold" htmlFor="fecha">Fecha: </label>
                    <input id="fecha" name="fecha" className=" border border-slate-400 rounded p-1 cursor-text outline-none" value={task.fecha} type="date" onChange={e => addTask(e)}/>
                </div>
                <input className="w-full bg-blue-500 mt-5 p-2 font-sarabun-bold text-lg rounded hover:bg-blue-600 cursor-pointer duration-200" type="submit" value={task.id ? 'Actualizar' : 'Envíar'}/>
            </form>
        </div>
    )
}