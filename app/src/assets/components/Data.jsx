import { useState} from "react"
import AddTask from "./AddTask"
import ShowTask from "./ShowTask"
import ShowBy from "./ShowBy"
import {Box} from '@mui/material';
import ShowByTask from "./ShowByTask";
import EditForm from "./EditForm";


const Data = ({show}) =>{
   const get = (key) => JSON.parse(localStorage.getItem(key))
   const set = (key, arr) => localStorage.setItem(key, JSON.stringify(arr))

   const [openEdit, setOpenEdit] = useState()
   const [tasks, setTasks] = useState(get('task') || [])
   const [input, setInput] = useState('')
   const [edit, setEdit] = useState([])
   const [allDeleted, setAddDeleted]= useState(get('delete') || [])
   const [allCompleted, setAllCompleted] = useState(get('completed') || [])
   const [select, setSelect] = useState(get('completed') ? 'completed' : 'completed')
   const [error, setError] = useState(false)
   const [textHelper, setHelper] = useState('')
   const [btn, setBtn] = useState(1)
   const [stateHeight, setHeight] = useState(46)
   const [showByTask, setShowByTask] = useState(get('completed') ? get('completed') : 'completed')
   const [showTask, setShowTask] = useState(show)





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
         setInput('')
         setHeight(stateHeight + 12)

      }

      const addingTask = () =>{
         return  {
            id: Date.now(),
            name: input
         }
      }

      set('task', [...tasks, addingTask()])
      input != '' && setTasks([...tasks, addingTask()])
   }

   const deleteTask = (id) =>{
      const findDeletedTask = tasks.find(task => task.id === id)
      set('delete', [...allDeleted, findDeletedTask])
      setAddDeleted([...allDeleted, findDeletedTask])
      const filterTask = tasks.filter(task => task != findDeletedTask)
      set('task', filterTask)
      setTasks(filterTask)
   }

   const editTask = (id) =>{
      setShowTask(4)
      setOpenEdit(1)
      setBtn(2)
      const findEdit = tasks.find(task => task.id === id)
      setEdit(findEdit)
      console.log(findEdit.name)
      setInput(findEdit.name)
   }

   const confirmEditedTask = () =>{
      setShowTask(3)
      setOpenEdit(0)
      setBtn(1)
      console.log(edit)
      const allTask = tasks.map((task) =>{
         if(task === edit){
           return {id: edit.id, name : input}
         }
         return task
      })
      setTasks(allTask)
      setInput('')
   }

   const completeTask = (id) =>{
      const findComplete = tasks.find(task => task.id === id)
      set('completed', [...allCompleted, findComplete])
      setAllCompleted([...allCompleted, findComplete])
      const filterTasks = tasks.filter(task => task != findComplete)
      set('task', filterTasks)
      setTasks(filterTasks)
      setShowByTask(get('completed'))
   }

   const showBy = (e) => {
      if(showTask === 2){
         setSelect('completed')
         setShowByTask(get('completed'))
      }
      setShowByTask(get('completed'))
      if (e.target.value === 'deleted') {
        setSelect('deleted')
        if(get('delete')){
        setShowByTask(get('delete'))
        }
      } else if (e.target.value === 'completed') {
            setShowByTask(get('completed'))
            setSelect('completed')
       
      }
    }

    const cancellEdit = () =>{
      setOpenEdit(0)
      setShowTask(3)
    }
    

   return <>
            <Box height={'70vh'} justifyContent={'center'} alignContent={'cenetr'}> 
               {show === 1  ? 
               <AddTask error={error} textHelper={textHelper} btn={btn} capturingInput={capturingInput} addInputTask={addInputTask} input={input} confirmEditedTask={confirmEditedTask}/>
                  :  show === 2  ?
                  <Box margin={'20px'} height={'50vh'}  display={'flex'} 
                  sx={
                     {flexDirection:{xs:'column', sm:'row'},
                     justifyContent:{xs:'center', sm:'space-around'}}
                  }  
                  
                  
                  >
                      <ShowBy select={select} showBy={showBy} />
                      <Box mt={'20px'}  display={'flex'} justifyContent={'center'} alignItems={'center'}>
                        <ShowByTask showByTask={showByTask}/>
                     </Box>
                 
                   </Box>
                  :   
                  <Box height={'70vh'} width={'100vw'}>
                  <ShowTask  showTask={showTask}  stateHeight={stateHeight} dataTasks={tasks} deleteTask={deleteTask} editTask={editTask} completeTask={completeTask}/>
                  </Box>
               }
               </Box>

               {openEdit === 1  &&  <EditForm capturingInput={capturingInput} select={select} input={input} error={error} helperText={textHelper}  confirmEditedTask={confirmEditedTask} cancellEdit={cancellEdit}/>}
           
         </>
}

export default Data