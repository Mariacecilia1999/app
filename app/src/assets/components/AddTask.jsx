const AddTask = ({capturingInput, addInputTask}) =>{
   return(
      <>
         <input type="text" onChange={capturingInput} />
         <button onClick={addInputTask}>Agregar</button>
      </>
   )
}

export default AddTask