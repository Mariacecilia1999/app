const ShowBy = ({showBy}) =>{
   return <>
            <select onChange={showBy}>
               <option>Filtrar</option>
               <option value="all">Todas</option>
               <option value="completed">Completadas</option>
               <option value="deleted">Eliminadas</option>
            </select>
         </>
}

export default ShowBy