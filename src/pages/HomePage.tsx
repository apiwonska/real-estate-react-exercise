import { Link as RouterLink } from 'react-router-dom';
import Button from '@mui/material/Button';

const HomePage = () => (
  <>
    <h1>HomePage</h1>
    <Button to="/houses" component={RouterLink}>
      Zobacz więcej...
    </Button>
  </>
);

export default HomePage;
