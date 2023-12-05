const AddTask = ({capturingInput}) =>{
   return(
      <>
         <input type="text" onChange={capturingInput} />
         <button>Agregar</button>
      </>
   )
}

export default AddTask