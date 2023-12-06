import {Box, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';


const ShowTask = ({dataTasks, deleteTask, editTask, completeTask}) =>{
 

   return(<>
      <Box sx={{width:{xs:'90vw', sm:'50vw'}}} width='25vw'>
         {dataTasks.map((task)=>{
            return <Box borderBottom='1px solid black' key={task.id} my='30px' display='flex' justifyContent={'space-around'}>
               <Typography width='14vw' variant='h5'>{task.name}</Typography>
               <Box width='5vw'  display='flex' justifyContent='space-between' alignItems='center'>
                  <DeleteIcon onClick={() => {deleteTask(task.id)}}/>
                  <CheckIcon  onClick={() => {completeTask(task.id)}}/>
                  <EditIcon onClick={() => {editTask(task.id)}}/>
               </Box>
            </Box>
         })}
      </Box>
      </>)
   
   
   
}

export default ShowTask