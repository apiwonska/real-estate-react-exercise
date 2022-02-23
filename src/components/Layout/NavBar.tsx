import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Apartment from '@mui/icons-material/Apartment';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavDrawer from './NavDrawer';

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

export interface IMenuItem {
  name: string;
  to: string;
}

const menuItems: Array<IMenuItem> = [
  { name: 'Strona Główna', to: '/' },
  { name: 'Nieruchomości', to: '/houses' },
  { name: '+ Dodaj', to: '/houses/add' },
];

const NavBar = () => {
  const matchesBigScreen = useMediaQuery('(min-width:600px)');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (matchesBigScreen) setIsOpen(false);
  }, [matchesBigScreen]);

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          {!matchesBigScreen && (
            <>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={() => setIsOpen(true)}
              >
                <MenuIcon />
              </IconButton>
              <NavDrawer
                menuItems={menuItems}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
              />
            </>
          )}
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}
          >
            <Apartment sx={{ mx: 1, fontSize: '1.5em' }} />
            Imobili
          </Typography>
          {matchesBigScreen &&
            menuItems.map((menuItem) => (
              <StyledButton to={menuItem.to} key={menuItem.name}>
                {menuItem.name}
              </StyledButton>
            ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
