import AddTask from "./AddTask"

const Data = () =>{

   const capturingInput = (e) =>{
      console.log(e.target.value)
   }


   return <>
            <AddTask capturingInput={capturingInput}/>
         </>
}

export default Data