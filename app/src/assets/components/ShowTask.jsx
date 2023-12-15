import {Box, Typography} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckIcon from '@mui/icons-material/Check';
import EditIcon from '@mui/icons-material/Edit';


const ShowTask = ({dataTasks, deleteTask, editTask, completeTask, stateHeight, showTask}) =>{
 

   return(<>
   <Box width={'100vw'}  display={'flex'} alignItems={'center'} justifyContent={'center'}> 
   {dataTasks.length == 0 && <Box  display={'flex'} justifyContent={'center'} alignItems={'center'} alignContent={'center'}>
                                 <Typography fontSize={'27px'}  variant='h3'>Sin tareas pendientes...</Typography>
                            </Box>}
   {showTask != 4 &&
      <Box height={`${stateHeight}vh`}>
         {dataTasks.map((task)=>{
            return <Box sx={{width:{xs:'50vw', sm:'70vw'}}}  borderBottom='1px solid black' key={task.id} my='30px' display='flex' justifyContent={'space-around'}>
               <Typography width='14vw' variant='h5'>{task.name}</Typography>
               <Box width='27vw'  display='flex' justifyContent='space-between' alignItems='center'>
                  <DeleteIcon onClick={() => {deleteTask(task.id)}}/>
                  <CheckIcon  onClick={() => {completeTask(task.id)}}/>
                  <EditIcon onClick={() => {editTask(task.id)}}/>
               </Box>
            </Box>
         })}
      </Box>}
      </Box>
      </>)
   
   
   
}

export default ShowTask