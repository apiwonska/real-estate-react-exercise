import { useNavigate, useLocation } from 'react-router-dom';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { IMenuItem } from './NavBar';

interface IProps {
  menuItems: Array<IMenuItem>;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavDrawer = ({ menuItems, isOpen, setIsOpen }: IProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Drawer anchor={'left'} open={isOpen} onClose={() => setIsOpen(false)}>
      {
        <List sx={{ pt: 4 }}>
          {menuItems.map((menuItem) => (
            <ListItemButton
              key={menuItem.name}
              onClick={() => navigate(menuItem.to)}
              selected={menuItem.to === location.pathname}
            >
              <ListItem>
                <ListItemText color="primary">{menuItem.name}</ListItemText>
              </ListItem>
            </ListItemButton>
          ))}
        </List>
      }
    </Drawer>
  );
};

export default NavDrawer;
