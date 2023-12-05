const ShowTask = ({dataTasks}) =>{
   return(
      <>
      {dataTasks.map((task) =>{
         console.log(task.name)
      })}
      </>
   )
}

export default ShowTask