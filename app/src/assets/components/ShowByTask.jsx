import { Box, Typography } from '@mui/material';

const ShowByTask = ({ showByTask }) => {
  return (
    <>
      <Box display='flex' flexDirection='column'>
        {typeof showByTask === 'object' && showByTask !== null && showByTask.length > 0 ? (
          showByTask.map((task) => (
            <Box display={'flex'} flexDirection={'column'} key={task.id}>
              <Typography sx={{ fontSize: { xs: '17px', sm: '19px' } }} variant='h5' key={task.id}>
                Tarea: {task.name}
              </Typography>
            </Box>
          ))
        ) : (
          <Box
            sx={{ width: { xs: '50vw', sm: '20vw' } }}
            borderBottom='1px solid black'
            my='30px'
            display='flex'
            justifyContent={'center'}
          >
            <Typography width='90vw' variant='h3' sx={{fontSize:{xs:'17px', sm:'27px'}}}>
              Sin resultados
            </Typography>
          </Box>
        )}
      </Box>
    </>
  )
}

export default ShowByTask;
