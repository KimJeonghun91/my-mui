import { Theme } from '@mui/material';

export default function AppBar(theme: Theme) {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.5)',
          backdropFilter: 'blur(10px)',
          boxShadow: 'none',
        },
      },
    },
  };
}
