import { useState } from "react"
import AddTask from "./AddTask"
import ShowTask from "./ShowTask"

const Data = () =>{

   const [input, setInput] = useState('')
   const [tasks, setTasks] = useState([])

   const capturingInput = (e) =>{
      setInput(e.target.value)
   }
   
   const addInputTask = () =>{
      input != '' && setTasks([...tasks, {
         id: Date.now(),
         name: input
      }])
   }

   const deleteTask = (id) =>{
      const findDeletedTask = tasks.find(task => task.id === id)
      const filterTask = tasks.filter(task => task != findDeletedTask)
      setTasks(filterTask)
   }

   return <>
            <AddTask capturingInput={capturingInput} addInputTask={addInputTask}/>
            <ShowTask dataTasks={tasks} deleteTask={deleteTask}/>
         </>
}

export default Data