import {Box, Button, TextField } from '@mui/material';


const EditForm = ({capturingInput, input, error, helperText, cancellEdit, confirmEditedTask}) =>{
   return(
      <>
      <Box sx={{width:'100%', mt:10}}    display='flex' justifyContent='center' alignContent='center'>
         <TextField  onChange={capturingInput}  value={input}  id="outlined-basic" label="Agrega una tarea" variant="outlined" error={error} helperText={helperText}/>

         <Button sx={{ height: 56, mx: 2 }} onClick={cancellEdit}>
               Cancelar
            </Button>
            <Button sx={{ height: 56, mx: 2 }} variant='contained' onClick={confirmEditedTask}>
               Editar
            </Button>
            
      </Box>
      </>
   )
}

export default EditForm