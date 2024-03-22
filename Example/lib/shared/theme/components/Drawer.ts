import { Theme, alpha } from '@mui/material/styles';

export default function Drawer(theme: Theme) {
  return {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRight: `0px !important`,
        },
      }
    }
  };
}
