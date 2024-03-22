import { Theme, alpha } from '@mui/material/styles';

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: `0 0 2px 0 ${alpha(theme.palette.grey[200], 0.19)}, 0 11px 22px -3px ${alpha(theme.palette.grey[200], 0.11)}`,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          zIndex: 0,
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: { variant: 'h6' },
        subheaderTypographyProps: { variant: 'body2', marginTop: theme.spacing(0.4) },
      },
      styleOverrides: {
        root: {
          padding: theme.spacing(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(3),
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2),
        },
      },
    },
  };
}
