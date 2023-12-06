import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';


const ShowBy = ({showBy, select}) =>{
   return <>
            <Box mt={'60px'} mr={'20px'}>
               <Select onChange={showBy} value={select} mt='70px'>
                  <MenuItem value="all">Todas</MenuItem>
                  <MenuItem value="completed">Completadas</MenuItem>
                  <MenuItem value="deleted">Eliminadas</MenuItem>
               </Select>
            </Box>
         </>
}

export default ShowBy