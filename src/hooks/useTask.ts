import { useState } from "react";
import { ListTask, Task } from "../types";
import { ChangeEvent } from "react"
import { toast } from 'react-toastify';

export function useTask(){

    const initialTask : Task = {
        id: '',
        nombre: '',
        fecha: ''
    }

    const [task, setTask] = useState<Task>(initialTask)
    const [listTask, setListTask] = useState<ListTask[]>([])


    const addTask = (e: ChangeEvent<HTMLInputElement>) => {
        setTask({
            ...task,
            [e.target.name] : e.target.value
        })
    }

    const addTaskToList = (newTask: Task) => {
        setListTask([...listTask, newTask])
    }

    const catchId = (id: Task['id']) => {
        const [ filterTask ] = listTask.filter(itemTask => itemTask.id === id)
        setTask({
            ...filterTask
        })
    }

    const updateTaskOfList = (task: Task) => {
        const giveTasks = listTask.map(itemTask => itemTask.id === task.id ? {...task} : itemTask)
        setListTask([...giveTasks])
    }

    const deleteTaskOfList = (id: Task['id']) => {
        const filterTask = listTask.filter(itemTask => itemTask.id !== id)
        setListTask([...filterTask])
        toast.info('Tarea eliminada correctamente')
    } 

    return{
        initialTask,
        task,
        setTask,
        listTask,
        addTask,
        addTaskToList,
        catchId,
        updateTaskOfList,
        deleteTaskOfList
    }

}