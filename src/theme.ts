import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    htmlFontSize: 17,
    h3: {
      fontSize: 34,
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
