import Typography from '@mui/material/Typography';

const PageHeader = ({ children }: { children: string }) => (
  <Typography
    variant="h3"
    component="h1"
    textAlign="center"
    sx={{ mb: 4, mt: 6 }}
  >
    {children}
  </Typography>
);

export default PageHeader;
