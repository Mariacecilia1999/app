const AddTask = ({capturingInput, addInputTask, input, confirmEditedTask}) =>{
   return(
      <>
         <input type="text" onChange={capturingInput} value={input} />
         <button onClick={addInputTask}>Agregar</button>
         <button onClick={confirmEditedTask}>Editar</button>
      </>
   )
}

export default AddTask