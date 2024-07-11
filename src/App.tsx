import FormTask from "./components/FormTask"
import ListTask from "./components/ListTask"
import { useTask } from "./hooks/useTask"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { initialTask, task, setTask, listTask, addTask, addTaskToList, catchId, updateTaskOfList, deleteTaskOfList } = useTask()

  return (
    <>
      <header className="bg-blue-500">
        <h1 className="text-3xl font-black text-center py-10 font-sarabun-bold">Lista de tareas pendientes</h1>
      </header>

      <main className="grid md:grid-cols-2 w-11/12 mx-auto gap-5">
       
        <FormTask
          initialTask={initialTask}
          task={task}
          setTask={setTask}
          addTask={addTask}
          addTaskToList={addTaskToList}
          updateTaskOfList={updateTaskOfList}
          />
        <ListTask
          listTask={listTask}
          catchId={catchId}
          deleteTaskOfList={deleteTaskOfList}
        />
      </main>

      <ToastContainer/>
    </>
  )
}

export default App
