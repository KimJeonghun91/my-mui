import { Theme } from '@mui/material';
export default function ListItemButton(theme: Theme): {
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
};
//# sourceMappingURL=ListItemButton.d.ts.map