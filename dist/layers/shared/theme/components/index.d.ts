import { Theme } from '@mui/material';
export default function CustomComponents(theme: Theme): {
    MuiListItemButton: {
        styleOverrides: {
            root: {
                fontsize: string;
                '&.Mui-selected': {
                    fontWeight: string;
                    color: string;
                };
            };
        };
    };
} & {
    MuiListItemText: {
        styleOverrides: {
            root: {
                '& .MuiTypography-root': {
                    fontSize: string;
                };
            };
        };
    };
};
//# sourceMappingURL=index.d.ts.map