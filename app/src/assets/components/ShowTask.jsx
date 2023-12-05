const ShowTask = ({dataTasks, deleteTask}) =>{
   return(<>
      {dataTasks.map((task) =>{
        return<> <div key={task.id}>
                  <h3>{task.name}</h3>
                  <button onClick={() => {deleteTask(task.id)}}>
                     Eliminar
                  </button>
               </div>
         </>
      })}
      </>
   )
}

export default ShowTask