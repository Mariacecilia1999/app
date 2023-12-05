import AddTask from "./AddTask"

const Data = () =>{

   const capturingInput = (e) =>{
      console.log(e.target.value)
   }
   
   const addInputTask = () =>{
      console.log('clic')
   }

   return <>
            <AddTask capturingInput={capturingInput} addInputTask={addInputTask}/>
         </>
}

export default Data