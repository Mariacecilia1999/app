const ShowTask = ({dataTasks, deleteTask, editTask}) =>{
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
               </div>
         </>
      })}
      </>
   )
}

export default ShowTask