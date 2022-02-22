import { NavLink as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const StyledButton = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactText;
}) => (
  <Button
    color="inherit"
    component={RouterLink}
    to={to}
    sx={{ textTransform: 'capitalize', mx: 1 }}
  >
    {children}
  </Button>
);

const NavBar = () => (
  <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Domex
        </Typography>
        <StyledButton to="/">Strona główna</StyledButton>
        <StyledButton to="/houses">Nieruchomości</StyledButton>
        <StyledButton to="/houses/add">+ Dodaj</StyledButton>
      </Toolbar>
    </AppBar>
  </Box>
);

export default NavBar;
