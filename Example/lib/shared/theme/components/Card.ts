import { Theme, alpha } from '@mui/material/styles';

export default function Card(theme: Theme) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: `0 0 2px 0 ${alpha(theme.palette.grey[400], 0.19)}, 0 11px 22px -3px ${alpha(theme.palette.grey[400], 0.11)}`,
          borderRadius: Number(theme.shape.borderRadius) * 3,
          zIndex: 0,
          border: `1px solid ${alpha(theme.palette.divider, 0.15)}`,
          padding: theme.spacing(2.5),
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
          padding: theme.spacing(0, 0, 2),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing(0, 0, 0, 0),
        },
      },
    },
    MuiCardActions: {
      styleOverrides: {
        root: {
          padding: theme.spacing(2, 0, 0, 0),
        },
      },
    },
  };
}
