const AddTask = ({capturingInput, addInputTask, input}) =>{
   return(
      <>
         <input type="text" onChange={capturingInput} value={input} />
         <button onClick={addInputTask}>Agregar</button>
      </>
   )
}

export default AddTask