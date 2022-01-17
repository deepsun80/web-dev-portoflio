import { createTheme } from '@mui/material/styles';
import { blueGrey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: blueGrey.A700,
    },
    secondary: {
      main: blueGrey.A100,
    }
  },
  spacing: 10
});

export default theme;