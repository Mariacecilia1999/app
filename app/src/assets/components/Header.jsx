import {Box, Typography} from '@mui/material';
import { useState } from 'react';
import Data from './Data';
const Header = () =>{
      const [show, setShow] = useState(1)

  return <>
   <Box width={'100vw'}  backgroundColor='#1976d2' display='flex'  alignItems={'center'} justifyContent={'space-around'}    
   sx={{
      flexDirection: { xs: "column", sm: "row" },
      height: { xs: '20vh', sm: "15vh" }
    }}
     
   
  
   >
         <Typography sx={{fontSize: {xs:'18px', sm: '24px'}}} borderBottom={'1px solid white'}  variant='h1'>Aplicación de tareas</Typography>
         <Box  sx={{width: {xs:'100vw', sm: '40vw'}}} width={'40vw'} display={'flex'} justifyContent={'space-around'} fontWeight={'800'}
         >
            <a onClick={() => setShow(1)}>Agregar</a>
            <a onClick={() =>setShow(2)}>Filtrar</a>
            <a onClick={() => setShow(3)}>Pendientes</a>
         </Box>
   </Box>
   <Data show={show}/>
   </>
}

export default Header