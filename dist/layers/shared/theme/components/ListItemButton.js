export default function ListItemButton(theme) {
    return {
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    fontsize: '14px',
                    '&.Mui-selected': {
                        fontWeight: 'bold',
                        color: theme.palette.primary.main,
                    },
                },
            }
        }
    };
}
//# sourceMappingURL=ListItemButton.js.map