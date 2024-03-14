import { Box, Divider, Typography } from "@mui/material";
import { useTheme } from '@mui/material/styles';
import { useRouter } from 'next/navigation';
var DrawerTooltipSub = function (_a) {
    var _b;
    var menuItem = _a.menuItem, pathName = _a.pathName;
    var router = useRouter();
    var theme = useTheme();
    return (<Box>
            {(_b = menuItem.subMenu) === null || _b === void 0 ? void 0 : _b.map(function (subMenuItem, index) { return (<Box key={index}>
                    <Box key={index} sx={{
                px: 2.5,
                py: 1,
                cursor: 'pointer',
                '&:hover': {
                    backgroundColor: theme.palette.action.hover
                },
                borderRadius: 2
            }} onClick={function () { router.push(subMenuItem.path); }}>
                        <Typography variant="body2" color={subMenuItem.path === pathName ? theme.palette.primary.main : "inherit"}>{subMenuItem.title}</Typography>
                    </Box>

                    {(menuItem === null || menuItem === void 0 ? void 0 : menuItem.subMenu) && index !== menuItem.subMenu.length - 1 && <Divider />}
                </Box>); })}
        </Box>);
};
export default DrawerTooltipSub;
//# sourceMappingURL=drawer-tooltip-sub.js.map