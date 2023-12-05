import { useState } from "react"
import AddTask from "./AddTask"
import ShowTask from "./ShowTask"
import ShowBy from "./ShowBy"

const Data = () =>{

   const [input, setInput] = useState('')
   const [tasks, setTasks] = useState([])
   const [edit, setEdit] = useState([])
   const [allDeleted, setAddDeleted]= useState([])

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
      setAddDeleted([...allDeleted, findDeletedTask])
      console.log(allDeleted)

      const filterTask = tasks.filter(task => task != findDeletedTask)
      setTasks(filterTask)
   }

   const editTask = (id) =>{
      const findEdit = tasks.find(task => task.id === id)
      setEdit(findEdit)
      console.log(findEdit.name)
      setInput(findEdit.name)
   }

   const confirmEditedTask = () =>{
      console.log(edit)
      const allTask = tasks.map((task) =>{
         if(task === edit){
           return {id: edit.id, name : input}
         }
         return task
      })
      setTasks(allTask)
   }

   const completeTask = (id) =>{
      const findComplete = tasks.find(task => task.id === id)
      const filterTasks = tasks.filter(task => task != findComplete)
      setTasks(filterTasks)
   }

   const showBy = (e) =>{
      console.log(e.target.value)
      if(e.target.value === 'deleted'){
         setTasks(allDeleted)
      }
   }

   return <>
            <ShowBy showBy={showBy}/>
            <AddTask capturingInput={capturingInput} addInputTask={addInputTask} input={input} confirmEditedTask={confirmEditedTask}/>
            <ShowTask dataTasks={tasks} deleteTask={deleteTask} editTask={editTask} completeTask={completeTask}/>
         </>
}

export default Data