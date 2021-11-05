import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
// import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';

const Spinner = ()=>{
  return (
    <Box sx={{ display: 'flex',
    backgroundColor:"black", justifyContent:"center"
     }}>
      <CircularProgress  />
    </Box>
  );
}
export default Spinner;