import React from 'react';
import Box from '@mui/material/Box';

const ContentWrapper = ({ children }: { children: React.ReactNode }) => (
  <Box maxWidth={700} margin="auto">
    {children}
  </Box>
);

export default ContentWrapper;
