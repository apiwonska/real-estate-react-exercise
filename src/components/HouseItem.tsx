import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IHouse } from '../appInterfaces';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';

export interface IHouseItemProps {
  house: IHouse;
}

const HouseItem = ({
  house: { id, address, floorsNumber, label },
}: IHouseItemProps): React.ReactElement => (
  <Paper elevation={3} sx={{ my: 3, p: 2 }}>
    <Box sx={{ mb: 1 }}>
      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle2">Adres:</Typography>
        <Typography>{address}</Typography>
      </Box>
      <Box sx={{ mb: 1 }}>
        <Typography variant="subtitle2">Liczba pięter:</Typography>
        <Typography>{floorsNumber}</Typography>
      </Box>
    </Box>
    <Chip label={label} size="small" />
    <Box sx={{ my: 1, display: 'flex', justifyContent: 'end' }}>
      <Link component={RouterLink} to={`/houses/${id}`} variant="body2">
        Zobacz więcej...
      </Link>
    </Box>
  </Paper>
);

export default HouseItem;
