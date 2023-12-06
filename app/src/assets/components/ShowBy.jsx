import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


const ShowBy = ({showBy}) =>{
   return <>
    
       
            <Select onChange={showBy}>
               <MenuItem value="all">Todas</MenuItem>
               <MenuItem value="completed">Completadas</MenuItem>
               <MenuItem value="deleted">Eliminadas</MenuItem>
            </Select>
         </>
}

export default ShowBy