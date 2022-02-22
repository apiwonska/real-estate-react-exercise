import React from 'react';
import NavBar from './NavBar';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';
import backgroundImg from 'assets/living-room.jpg';

const StyledLayoutWrapper = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${backgroundImg});
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC<React.ReactNode> = ({ children }) => {
  return (
    <StyledLayoutWrapper>
      <NavBar />
      <Box
        sx={{
          background: 'white',
          flexGrow: 1,
          maxWidth: 800,
          width: '100%',
          marginX: 'auto',
        }}
      >
        <Outlet />
      </Box>
    </StyledLayoutWrapper>
  );
};

export default Layout;
