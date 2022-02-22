import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { IHouse } from '../appInterfaces';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export interface IHouseItemProps {
  house: IHouse;
}

export type TColorProp =
  | 'success'
  | 'default'
  | 'warning'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | undefined;

export const colors = {
  available: 'success',
  reserved: 'default',
  sold: 'error',
};

const HouseItem = ({
  house: { id, address, floorsNumber, label },
}: IHouseItemProps): React.ReactElement => {
  const labelColor = colors[label] as TColorProp;

  return (
    <Paper sx={{ m: 2, px: 3, py: 2, backgroundColor: '#eee' }} elevation={0}>
      <Box sx={{ mb: 1 }}>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Adres:
          </Typography>
          <Typography>{address}</Typography>
        </Box>
        <Box sx={{ mb: 1 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Liczba pięter:
          </Typography>
          <Typography>{floorsNumber}</Typography>
        </Box>
      </Box>
      <Chip label={label} size="small" color={labelColor} />
      <Box sx={{ my: 1, display: 'flex', justifyContent: 'end' }}>
        <Link component={RouterLink} to={`/houses/${id}`} variant="body2">
          Zobacz więcej...
        </Link>
      </Box>
    </Paper>
  );
};

export default HouseItem;
