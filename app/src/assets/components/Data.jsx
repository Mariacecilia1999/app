import { useState } from "react"
import AddTask from "./AddTask"

const Data = () =>{

   const [input, setInput] = useState('')
   const [tasks, setTasks] = useState([])

   const capturingInput = (e) =>{
      setInput(e.target.value)
   }
   
   const addInputTask = () =>{
      console.log(input)
   }

   return <>
            <AddTask capturingInput={capturingInput} addInputTask={addInputTask}/>
         </>
}

export default Data