import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';

export default function FilterWrapper({
    filterLabel,
    children,
}: {
    filterLabel: string;
    children: React.ReactNode;
}) {
    const theme = useTheme();

    return (
        <Grid item xs={4} sx={{ borderWidth: '0px', borderBottomWidth: '1px', borderColor: theme.palette.background.neutral, borderStyle: 'solid' }}>
            <Box sx={{ flexDirection: 'row', display: 'flex', alignItems: 'center', flex: 1 }}>
                <Box sx={{ bgcolor: theme.palette.background.neutral, minWidth: 80, height: 40, px: 2, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <Typography sx={{ whiteSpace: 'nowrap', width: 'auto' }} variant="body2">{filterLabel}</Typography>
                </Box>

                {children}
            </Box>
        </Grid>
    )
} 