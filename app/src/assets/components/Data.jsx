import { useState } from "react"
import AddTask from "./AddTask"
import ShowTask from "./ShowTask"
import ShowBy from "./ShowBy"
import {Box} from '@mui/material';

const Data = () =>{

   const [input, setInput] = useState('')
   const [tasks, setTasks] = useState([])
   const [edit, setEdit] = useState([])
   const [allDeleted, setAddDeleted]= useState([])
   const [allCompleted, setAllCompleted] = useState([])
   const [select, setSelect] = useState('all')
   const [error, setError] = useState(false)
   const [textHelper, setHelper] = useState('')
   const [btn, setBtn] = useState(1)

   const capturingInput = (e) =>{
      setInput(e.target.value)
   }
   
   const addInputTask = () =>{
      setBtn(1)
      if(input === ''){
         setError(true)
         setHelper('No se pueden agregar tareas vacias')
      }else{
         setError(false)
         setHelper('')

      }
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
      setBtn(2)
      const findEdit = tasks.find(task => task.id === id)
      setEdit(findEdit)
      console.log(findEdit.name)
      setInput(findEdit.name)
   }

   const confirmEditedTask = () =>{
      setBtn(1)
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
      setAllCompleted([...allCompleted, findComplete])
      const filterTasks = tasks.filter(task => task != findComplete)
      setTasks(filterTasks)
   }

   const showBy = (e) => {
      console.log(e.target.value);
    
      if (e.target.value === 'deleted') {
        setSelect('deleted');
        setTasks(allDeleted);
      } else if (e.target.value === 'completed') {
        setSelect('completed');
        setTasks(allCompleted);
      } else {
        setSelect('all');
        setTasks([...allDeleted, ...allCompleted]);
      }
    };
    

   return <>
            <Box sx={{width:{xs:'90vw', sm:'75vw'}, flexDirection:{xs:'column', sm:'row'}, alignItems:{xs:'end', sm:'center'}}} display='flex'>
               <ShowBy select={select} showBy={showBy}/>
               <AddTask error={error} textHelper={textHelper} btn={btn} capturingInput={capturingInput} addInputTask={addInputTask} input={input} confirmEditedTask={confirmEditedTask}/>
            </Box>
            <ShowTask dataTasks={tasks} deleteTask={deleteTask} editTask={editTask} completeTask={completeTask}/>
         </>
}

export default Data