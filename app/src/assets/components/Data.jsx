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

   const editTask = (id) =>{
      const findEdit = tasks.find(task => task.id === id)
      console.log(findEdit.name)
      setInput(findEdit.name)
   }

   return <>
            <AddTask capturingInput={capturingInput} addInputTask={addInputTask} input={input}/>
            <ShowTask dataTasks={tasks} deleteTask={deleteTask} editTask={editTask}/>
         </>
}

export default Data