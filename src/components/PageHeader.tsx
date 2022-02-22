import Typography from '@mui/material/Typography';

const PageHeader = ({ children }: { children: string }) => (
  <Typography variant="h3" component="h1" marginY={5} textAlign="center">
    {children}
  </Typography>
);

export default PageHeader;
