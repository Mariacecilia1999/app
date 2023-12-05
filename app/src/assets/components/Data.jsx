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
      setTasks([...tasks, {
         id: Date.now(),
         name: input
      }])
      console.log(tasks)
   }

   return <>
            <AddTask capturingInput={capturingInput} addInputTask={addInputTask}/>
            <ShowTask dataTasks={tasks}/>
         </>
}

export default Data