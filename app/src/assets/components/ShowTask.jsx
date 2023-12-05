const ShowTask = ({dataTasks, deleteTask, editTask, completeTask}) =>{
   return(<>
      {dataTasks.map((task) =>{
        return<> <div key={task.id}>
                  <h3>{task.name}</h3>
                  <button onClick={() => {deleteTask(task.id)}}>
                     Eliminar
                  </button>
                  <button onClick={() => {editTask(task.id)}}>
                     Editar
                  </button>
                  <button onClick={() => {completeTask(task.id)}}>
                     Completada
                  </button>
               </div>
         </>
      })}
      </>
   )
}

export default ShowTask