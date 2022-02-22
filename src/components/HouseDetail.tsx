import { Link as RouterLink } from 'react-router-dom';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CustomAlert from './CustomAlert';
import { TColorProp, colors } from './HouseItem';

import { IHouse } from '../appInterfaces';

interface IHouseDetailProps {
  house: IHouse;
  handleDelete: () => Promise<void>;
  isRemoving: boolean;
  isRemoveError: boolean;
}

const HouseDetail = ({
  house: { id, address, description, floorsNumber, label },
  handleDelete,
  isRemoving,
  isRemoveError,
}: IHouseDetailProps) => {
  const labelColor = colors[label] as TColorProp;
  return (
    <Paper elevation={0} sx={{ px: 3, py: 1 }}>
      {isRemoveError && <CustomAlert severity="error" />}
      <Box sx={{ my: 2 }} textAlign="right">
        <Link
          component={RouterLink}
          to={`/houses`}
          variant="body2"
          sx={{ ml: 'auto' }}
        >
          Wróć do listy nieruchomości
        </Link>
      </Box>
      <Box sx={{ mb: 3 }}>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Nr referencyjny:
          </Typography>
          <Typography>{id}</Typography>
        </Box>
        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Liczba pięter:
          </Typography>
          <Typography>{floorsNumber}</Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Adres:
          </Typography>
          <Typography>{address}</Typography>
        </Box>

        <Box sx={{ mb: 2 }}>
          <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
            Opis:
          </Typography>
          <Typography>{description}</Typography>
        </Box>
      </Box>
      <Chip label={label} size="small" color={labelColor} />
      <Box sx={{ my: 2, display: 'flex', alignItems: 'center' }}>
        <Button onClick={handleDelete} variant="contained" sx={{ ml: 'auto' }}>
          {isRemoving ? <CircularProgress /> : 'Usuń'}
        </Button>
      </Box>
    </Paper>
  );
};

export default HouseDetail;
