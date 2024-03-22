import { Theme, alpha } from '@mui/material/styles';

export default function TextField(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette.common.white, 0.3),
          borderRadius: `${Number(theme.shape.borderRadius) * 2}px !important`,
        },
      }
    }
  };
}