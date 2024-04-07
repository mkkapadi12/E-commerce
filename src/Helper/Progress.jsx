import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';
import styled from 'styled-components';

const Progress = () => {
  return (
    <Loading>
      <Box>
        <CircularProgress />
      </Box>
    </Loading>
  );
};
const Loading = styled.div`
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default Progress;
