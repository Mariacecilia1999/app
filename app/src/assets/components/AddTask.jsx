import {Box, Button, TextField } from '@mui/material';


const AddTask = ({capturingInput, addInputTask, input, error, textHelper}) =>{
   return(
      <>
      <Box sx={{width:'100%', mt:10}}    display='flex' justifyContent='center' alignContent='center'>
         <TextField  onChange={capturingInput}  value={input}  id="outlined-basic" label="Agrega una tarea" variant="outlined" error={error} helperText={textHelper}/>
            <Button onClick={addInputTask} sx={{ height: 56, mx: 2 }} variant='contained'>
               Agregar
            </Button>
      </Box>
      </>
   )
}

export default AddTask