import {Box, Button, TextField } from '@mui/material';


const AddTask = ({capturingInput, addInputTask, input, confirmEditedTask, error, textHelper, btn}) =>{
   return(
      <>
      <Box sx={{width:'100%', display: 'flex', justifyContent:'center' ,alignContent:'center', mt:10}}>
         <TextField  onChange={capturingInput}  value={input}  id="outlined-basic" label="Agrega una tarea" variant="outlined" error={error} helperText={textHelper}/>
         {btn === 1 ? (
            <Button onClick={addInputTask} sx={{ height: 56, mx: 2 }} variant='contained'>
               Agregar
            </Button>
            ) : (
            <Button onClick={confirmEditedTask} sx={{ height: 56, mx: 2 }} variant='contained'>
               Editar
            </Button>
            )}

         {/* <Button onClick={addInputTask} sx={{height:56, mx:2}} variant='contained'>
               Agregar
         </Button>
         <Button onClick={confirmEditedTask} sx={{height:56, mx:2}} variant='contained'>
               Editar
         </Button> */}
      </Box>
      </>
   )
}

export default AddTask