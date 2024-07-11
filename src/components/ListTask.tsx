import { XCircleIcon, PencilIcon } from '@heroicons/react/24/outline'
import type { ListTask, Task } from '../types'
import { useMemo } from 'react'

type ListTaskProps = {
    listTask: ListTask[]
    catchId: (id: Task['id']) => void
    deleteTaskOfList: (id: Task['id']) => void
}

export default function ListTask({listTask, catchId, deleteTaskOfList} : ListTaskProps) {

    const hasTask = useMemo(() => listTask.length > 0, [listTask])

    return (
        <div className='w-full'>
            {hasTask ? 
                <h2 className="text-center text-2xl mt-10 font-sarabun-bold">Lista tareas pendientes</h2> :
                <h2 className="text-center text-2xl mt-10 font-sarabun-bold">No hay tareas pendientes</h2>  
            }
            

            <div className=" bg-slate-100 mt-10 rounded max-w-lg mx-auto max-h-128 overflow-auto">
                {listTask.map(task => (
                    <div key={task.id} className="p-5 flex justify-between border-b last:border-b-0 border-b-gray-300">
                        <div className=''>
                            <p className=' font-sarabun-bold'>Tarea: <span className=' font-sarabun-regular'>{task.nombre}</span></p>
                            <p className=' font-sarabun-bold'>Fecha: <span className=' font-sarabun-regular'>{task.fecha}</span></p>
                        </div>
                        <div className='flex items-center'>
                            <XCircleIcon className='w-6 h-6 cursor-pointer hover:scale-125 duration-200' onClick={() => deleteTaskOfList(task.id)}/>
                            <PencilIcon className='w-6 h-6 cursor-pointer hover:scale-125 duration-200' onClick={() => catchId(task.id)}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
